import Link from "next/link";

const presentRows = [
  { pronoun: "аз (I)", form: "говоря", translit: "govorya" },
  { pronoun: "ти (you)", form: "говориш", translit: "govorish" },
  { pronoun: "той/тя/то (he/she/it)", form: "говори", translit: "govori" },
  { pronoun: "ние (we)", form: "говорим", translit: "govorim" },
  { pronoun: "вие (you pl)", form: "говорите", translit: "govorite" },
  { pronoun: "те (they)", form: "говорят", translit: "govoryat" },
];

const pastRows = [
  { pronoun: "аз (I)", form: "говорих", translit: "govorikh" },
  { pronoun: "ти (you)", form: "говори", translit: "govori" },
  { pronoun: "той/тя/то (he/she/it)", form: "говори", translit: "govori" },
  { pronoun: "ние (we)", form: "говорихме", translit: "govorikhme" },
  { pronoun: "вие (you pl)", form: "говорихте", translit: "govorikhte" },
  { pronoun: "те (they)", form: "говориха", translit: "govorikh a" },
];

const futureRows = [
  { pronoun: "аз (I)", form: "ще говоря", translit: "shte govorya" },
  { pronoun: "ти (you)", form: "ще говориш", translit: "shte govorish" },
  { pronoun: "той/тя/то (he/she/it)", form: "ще говори", translit: "shte govori" },
  { pronoun: "ние (we)", form: "ще говорим", translit: "shte govorim" },
  { pronoun: "вие (you pl)", form: "ще говорите", translit: "shte govorite" },
  { pronoun: "те (they)", form: "ще говорят", translit: "shte govoryat" },
];

const commonVerbs = [
  { bg: "съм", translit: "sym", en: "to be" },
  { bg: "имам", translit: "imam", en: "to have" },
  { bg: "искам", translit: "iskam", en: "to want" },
  { bg: "говоря", translit: "govorya", en: "to speak" },
  { bg: "ям", translit: "yam", en: "to eat" },
  { bg: "пия", translit: "piya", en: "to drink" },
  { bg: "отивам", translit: "otivam", en: "to go" },
  { bg: "разбирам", translit: "razbiram", en: "to understand" },
  { bg: "виждам", translit: "vizhdam", en: "to see" },
  { bg: "обичам", translit: "obicham", en: "to love / to like" },
];

function ConjTable({ rows }: { rows: { pronoun: string; form: string; translit: string }[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-100 bg-gray-50">
            <th className="text-left px-4 py-3 font-semibold text-gray-600">Pronoun</th>
            <th className="text-left px-4 py-3 font-semibold text-gray-600">Bulgarian</th>
            <th className="text-left px-4 py-3 font-semibold text-gray-400">Pronunciation</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-sky-50 transition-colors">
              <td className="px-4 py-3 text-gray-500">{r.pronoun}</td>
              <td className="px-4 py-3 font-bold text-gray-900 text-base">{r.form}</td>
              <td className="px-4 py-3 text-gray-400 italic">{r.translit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-sky-50 border border-sky-200 rounded-xl px-4 py-3 text-sm text-sky-900">
      💡 {children}
    </div>
  );
}

export default function TensesPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-3">
        <Link href="/learn" className="text-gray-400 hover:text-gray-600 transition-colors text-sm">← Learn</Link>
      </div>

      <div>
        <h1 className="text-2xl font-bold text-gray-800">⏱️ Tenses</h1>
        <p className="text-gray-500 text-sm mt-1">
          Using the verb <strong>говоря</strong> (to speak) as a model. The same endings apply to most regular verbs.
        </p>
      </div>

      <section className="flex flex-col gap-3">
        <h2 className="font-semibold text-gray-700">Present tense — говоря (to speak)</h2>
        <ConjTable rows={presentRows} />
        <Note>
          The endings <strong>-я, -иш, -и, -им, -ите, -ят</strong> are the present tense pattern for most "-и" conjugation verbs.
        </Note>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="font-semibold text-gray-700">Simple past tense — говорих (I spoke)</h2>
        <ConjTable rows={pastRows} />
        <Note>
          The past stem adds <strong>-х</strong> for "I", then drops it for "you/he/she", and adds <strong>-хме / -хте / -ха</strong> for the rest.
        </Note>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="font-semibold text-gray-700">Future tense — ще говоря (I will speak)</h2>
        <ConjTable rows={futureRows} />
        <Note>
          Future is easy: just add <strong>ще</strong> (shte) in front of the present tense form. No verb changes needed!
        </Note>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="font-semibold text-gray-700">Common verbs to learn first</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-4 py-3 font-semibold text-gray-600">Bulgarian</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-400">Pronunciation</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-600">English</th>
              </tr>
            </thead>
            <tbody>
              {commonVerbs.map((v, i) => (
                <tr key={i} className="border-b border-gray-50 last:border-0">
                  <td className="px-4 py-3 font-bold text-gray-900">{v.bg}</td>
                  <td className="px-4 py-3 text-gray-400 italic">{v.translit}</td>
                  <td className="px-4 py-3 text-gray-700">{v.en}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="bg-sky-50 border border-sky-200 rounded-xl px-4 py-3 text-sm text-sky-900">
        🎯 <strong>Quick tip:</strong> Learn <em>съм</em> (to be) and <em>имам</em> (to have) first — they are the most used verbs and have irregular forms.
        <br /><br />
        <strong>Аз съм</strong> (az sym) = I am &nbsp;·&nbsp; <strong>Аз имам</strong> (az imam) = I have &nbsp;·&nbsp; <strong>Ще имам</strong> (shte imam) = I will have
      </div>
    </div>
  );
}
