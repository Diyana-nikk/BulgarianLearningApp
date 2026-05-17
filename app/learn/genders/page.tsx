import Link from "next/link";

const masculine = [
  { bg: "мъж", translit: "myzh", en: "man", ending: "consonant" },
  { bg: "стол", translit: "stol", en: "chair", ending: "consonant" },
  { bg: "брат", translit: "brat", en: "brother", ending: "consonant" },
  { bg: "град", translit: "grad", en: "city", ending: "consonant" },
  { bg: "ден", translit: "den", en: "day", ending: "consonant" },
  { bg: "учител", translit: "uchitel", en: "teacher", ending: "consonant" },
];

const feminine = [
  { bg: "жена", translit: "zhena", en: "woman", ending: "-а" },
  { bg: "маса", translit: "masa", en: "table", ending: "-а" },
  { bg: "сестра", translit: "sestra", en: "sister", ending: "-а" },
  { bg: "книга", translit: "kniga", en: "book", ending: "-а" },
  { bg: "нощ", translit: "nosht", en: "night", ending: "consonant (exception)" },
  { bg: "любов", translit: "lyubov", en: "love", ending: "consonant (exception)" },
];

const neuter = [
  { bg: "дете", translit: "dete", en: "child", ending: "-е" },
  { bg: "море", translit: "more", en: "sea", ending: "-е" },
  { bg: "небе", translit: "nebe", en: "sky", ending: "-е" },
  { bg: "мляко", translit: "mlyako", en: "milk", ending: "-о" },
  { bg: "село", translit: "selo", en: "village", ending: "-о" },
  { bg: "вино", translit: "vino", en: "wine", ending: "-о" },
];

function GenderTable({ rows, color }: { rows: typeof masculine; color: string }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
      <table className="w-full text-sm">
        <thead>
          <tr className={`border-b border-gray-100 ${color}`}>
            <th className="text-left px-4 py-3 font-semibold text-gray-600">Bulgarian</th>
            <th className="text-left px-4 py-3 font-semibold text-gray-400">Pronunciation</th>
            <th className="text-left px-4 py-3 font-semibold text-gray-600">English</th>
            <th className="text-left px-4 py-3 font-semibold text-gray-500">Ending</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-gray-50 last:border-0">
              <td className="px-4 py-3 font-bold text-gray-900 text-base">{r.bg}</td>
              <td className="px-4 py-3 text-gray-400 italic">{r.translit}</td>
              <td className="px-4 py-3 text-gray-700">{r.en}</td>
              <td className="px-4 py-3 text-gray-400 font-mono text-xs">{r.ending}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function GendersPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-3">
        <Link href="/learn" className="text-gray-400 hover:text-gray-600 transition-colors text-sm">← Learn</Link>
      </div>

      <div>
        <h1 className="text-2xl font-bold text-gray-800">⚖️ Genders</h1>
        <p className="text-gray-500 text-sm mt-1">
          Bulgarian nouns have three genders: masculine, feminine, and neuter. The gender affects the adjectives, articles and pronouns you use with the noun.
        </p>
      </div>

      {/* Overview cards */}
      <div className="grid grid-cols-3 gap-3 text-center text-sm">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4">
          <div className="text-2xl mb-1">♂</div>
          <div className="font-bold text-blue-800">Masculine</div>
          <div className="text-blue-600 mt-1 text-xs">ends in consonant</div>
        </div>
        <div className="bg-rose-50 border-2 border-rose-200 rounded-2xl p-4">
          <div className="text-2xl mb-1">♀</div>
          <div className="font-bold text-rose-800">Feminine</div>
          <div className="text-rose-600 mt-1 text-xs">ends in -а or -я</div>
        </div>
        <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-4">
          <div className="text-2xl mb-1">◇</div>
          <div className="font-bold text-emerald-800">Neuter</div>
          <div className="text-emerald-600 mt-1 text-xs">ends in -о or -е</div>
        </div>
      </div>

      <section className="flex flex-col gap-3">
        <h2 className="font-semibold text-gray-700 flex items-center gap-2"><span className="text-blue-600">♂</span> Masculine nouns</h2>
        <GenderTable rows={masculine} color="bg-blue-50" />
        <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 text-sm text-blue-900">
          💡 Most masculine nouns end in a consonant. Adjectives agreeing with them use their base form: <strong>голям мъж</strong> (big man), <strong>хубав ден</strong> (nice day).
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="font-semibold text-gray-700 flex items-center gap-2"><span className="text-rose-600">♀</span> Feminine nouns</h2>
        <GenderTable rows={feminine} color="bg-rose-50" />
        <div className="bg-rose-50 border border-rose-200 rounded-xl px-4 py-3 text-sm text-rose-900">
          💡 Most feminine nouns end in <strong>-а</strong> or <strong>-я</strong>. Adjectives add <strong>-а</strong>: <strong>голяма жена</strong> (big woman), <strong>хубава книга</strong> (nice book). A few feminine nouns end in a consonant (like нощ/night) — these are exceptions to memorise.
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="font-semibold text-gray-700 flex items-center gap-2"><span className="text-emerald-600">◇</span> Neuter nouns</h2>
        <GenderTable rows={neuter} color="bg-emerald-50" />
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3 text-sm text-emerald-900">
          💡 Neuter nouns end in <strong>-о</strong> or <strong>-е</strong>. Adjectives add <strong>-о</strong>: <strong>голямо море</strong> (big sea), <strong>хубаво вино</strong> (nice wine).
        </div>
      </section>

      <div className="bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4 text-sm text-amber-900">
        <div className="font-bold mb-2">🎯 Summary — adjective endings by gender</div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div><div className="font-mono bg-white rounded-lg px-2 py-1 border border-amber-200">голям</div><div className="text-xs mt-1 text-amber-700">masc (base)</div></div>
          <div><div className="font-mono bg-white rounded-lg px-2 py-1 border border-amber-200">голям<strong>а</strong></div><div className="text-xs mt-1 text-amber-700">fem (+а)</div></div>
          <div><div className="font-mono bg-white rounded-lg px-2 py-1 border border-amber-200">голям<strong>о</strong></div><div className="text-xs mt-1 text-amber-700">neut (+о)</div></div>
        </div>
      </div>
    </div>
  );
}
