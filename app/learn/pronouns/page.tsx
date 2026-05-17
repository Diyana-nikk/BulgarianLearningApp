import Link from "next/link";

const personal = [
  { bg: "аз", translit: "az", en: "I" },
  { bg: "ти", translit: "ti", en: "you (singular)" },
  { bg: "той", translit: "toy", en: "he" },
  { bg: "тя", translit: "tya", en: "she" },
  { bg: "то", translit: "to", en: "it" },
  { bg: "ние", translit: "nie", en: "we" },
  { bg: "вие", translit: "vie", en: "you (plural / formal)" },
  { bg: "те", translit: "te", en: "they" },
];

const object = [
  { bg: "мен / мене", translit: "men / mene", en: "me" },
  { bg: "теб / тебе", translit: "teb / tebe", en: "you" },
  { bg: "него", translit: "nego", en: "him" },
  { bg: "нея", translit: "neya", en: "her" },
  { bg: "нас", translit: "nas", en: "us" },
  { bg: "вас", translit: "vas", en: "you (plural)" },
  { bg: "тях", translit: "tyakh", en: "them" },
];

const possessive = [
  { bg: "мой / моя / мое", translit: "moy / moya / moe", en: "my (m/f/n)" },
  { bg: "твой / твоя / твое", translit: "tvoy / tvoya / tvoe", en: "your (m/f/n)" },
  { bg: "негов / негова / негово", translit: "negov / negova / negovo", en: "his (m/f/n)" },
  { bg: "неин / нейна / нейно", translit: "nein / neyna / neyno", en: "her (m/f/n)" },
  { bg: "наш / наша / наше", translit: "nash / nasha / nashe", en: "our (m/f/n)" },
  { bg: "ваш / ваша / ваше", translit: "vash / vasha / vashe", en: "your pl (m/f/n)" },
  { bg: "техен / тяхна / тяхно", translit: "tekhen / tyakhna / tyakhno", en: "their (m/f/n)" },
];

function Table({ rows }: { rows: { bg: string; translit: string; en: string }[] }) {
  return (
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
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-amber-50 transition-colors">
              <td className="px-4 py-3 font-bold text-gray-900 text-base">{r.bg}</td>
              <td className="px-4 py-3 text-gray-400 italic">{r.translit}</td>
              <td className="px-4 py-3 text-gray-700">{r.en}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-sm text-amber-900">
      💡 {children}
    </div>
  );
}

export default function PronounsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-3">
        <Link href="/learn" className="text-gray-400 hover:text-gray-600 transition-colors text-sm">← Learn</Link>
      </div>

      <div>
        <h1 className="text-2xl font-bold text-gray-800">🙋 Pronouns</h1>
        <p className="text-gray-500 text-sm mt-1">
          Bulgarian pronouns change depending on whether they are the subject (who acts) or object (who receives the action).
        </p>
      </div>

      <section className="flex flex-col gap-3">
        <h2 className="font-semibold text-gray-700">Personal pronouns — Subject</h2>
        <Table rows={personal} />
        <Note>
          Bulgarian often drops the subject pronoun — the verb ending makes it clear. <strong>Говоря</strong> already means "I speak" without needing <strong>аз</strong>.
        </Note>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="font-semibold text-gray-700">Object pronouns — me, him, her…</h2>
        <Table rows={object} />
        <Note>
          Example: <strong>Обичам те</strong> (Obicham te) = "I love you". <strong>Той ме вижда</strong> (Toy me vizhda) = "He sees me".
        </Note>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="font-semibold text-gray-700">Possessive pronouns — my, your, his…</h2>
        <Table rows={possessive} />
        <Note>
          Possessives agree in gender with the noun they describe, not the owner. <strong>моят брат</strong> (my brother — masc), <strong>моята сестра</strong> (my sister — fem), <strong>моето куче</strong> (my dog — neut).
        </Note>
      </section>
    </div>
  );
}
