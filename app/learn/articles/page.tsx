import Link from "next/link";
import Image from "next/image";

const masculineArticle = [
  { without: "мъж", withFull: "мъжът", withShort: "мъжа", translit: "myzh → myzhtyt / myzhа", en: "man → the man" },
  { without: "стол", withFull: "столът", withShort: "стола", translit: "stol → stoltyt / stola", en: "chair → the chair" },
  { without: "град", withFull: "градът", withShort: "града", translit: "grad → gradyt / grada", en: "city → the city" },
  { without: "ден", withFull: "денят", withShort: "деня", translit: "den → denyat / denya", en: "day → the day" },
];

const feminineArticle = [
  { without: "жена", withArticle: "жената", translit: "zhena → zhenata", en: "woman → the woman" },
  { without: "маса", withArticle: "масата", translit: "masa → masata", en: "table → the table" },
  { without: "книга", withArticle: "книгата", translit: "kniga → knigata", en: "book → the book" },
  { without: "нощ", withArticle: "нощта", translit: "nosht → noshtta", en: "night → the night" },
];

const neuterArticle = [
  { without: "дете", withArticle: "детето", translit: "dete → deteto", en: "child → the child" },
  { without: "море", withArticle: "морето", translit: "more → moreto", en: "sea → the sea" },
  { without: "мляко", withArticle: "млякото", translit: "mlyako → mlyakoto", en: "milk → the milk" },
  { without: "вино", withArticle: "виното", translit: "vino → vinoto", en: "wine → the wine" },
];

const pluralArticle = [
  { without: "мъже", withArticle: "мъжете", translit: "myzhe → myzhete", en: "men → the men" },
  { without: "жени", withArticle: "жените", translit: "zheni → zhenite", en: "women → the women" },
  { without: "деца", withArticle: "децата", translit: "detsa → detsata", en: "children → the children" },
  { without: "градове", withArticle: "градовете", translit: "gradove → gradovete", en: "cities → the cities" },
];

export default function ArticlesPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-3">
        <Link href="/learn" className="text-gray-400 hover:text-gray-600 transition-colors text-sm">← Learn</Link>
      </div>

      <div>
        <h1 className="text-2xl font-bold text-gray-800">The — Definite Article</h1>
        <p className="text-gray-500 text-sm mt-1">
          English puts "the" <em>before</em> a word. Bulgarian attaches it to the <em>end</em> of the word as a suffix. The suffix changes depending on the gender and number.
        </p>
      </div>

      <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl px-5 py-4 text-sm text-orange-900">
        <div className="font-bold mb-3 text-base">Quick reference — "the" suffixes</div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-xl p-3 border border-orange-100">
            <div className="text-xs text-orange-500 font-semibold uppercase mb-1">Masculine (subject)</div>
            <div className="font-mono font-bold text-lg">-ът / -ят</div>
            <div className="text-xs text-gray-500 mt-1">столът, денят</div>
          </div>
          <div className="bg-white rounded-xl p-3 border border-orange-100">
            <div className="text-xs text-orange-500 font-semibold uppercase mb-1">Masculine (object)</div>
            <div className="font-mono font-bold text-lg">-а / -я</div>
            <div className="text-xs text-gray-500 mt-1">стола, деня</div>
          </div>
          <div className="bg-white rounded-xl p-3 border border-orange-100">
            <div className="text-xs text-rose-500 font-semibold uppercase mb-1">Feminine</div>
            <div className="font-mono font-bold text-lg">-та</div>
            <div className="text-xs text-gray-500 mt-1">жената, масата</div>
          </div>
          <div className="bg-white rounded-xl p-3 border border-orange-100">
            <div className="text-xs text-emerald-600 font-semibold uppercase mb-1">Neuter</div>
            <div className="font-mono font-bold text-lg">-то</div>
            <div className="text-xs text-gray-500 mt-1">детето, морето</div>
          </div>
          <div className="bg-white rounded-xl p-3 border border-orange-100 col-span-2">
            <div className="text-xs text-purple-600 font-semibold uppercase mb-1">Plural (all genders)</div>
            <div className="font-mono font-bold text-lg">-те / -та</div>
            <div className="text-xs text-gray-500 mt-1">мъжете, жените, децата</div>
          </div>
        </div>
      </div>

      <section className="flex flex-col gap-3">
        <h2 className="font-semibold text-gray-700 flex items-center gap-2"><span className="text-blue-600">♂</span> Masculine — two forms</h2>
        <p className="text-xs text-gray-400">Masculine nouns have a <em>full form</em> (-ът/-ят) used when the noun is the subject, and a <em>short form</em> (-а/-я) used otherwise.</p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-blue-50">
                <th className="text-left px-4 py-3 font-semibold text-gray-600">Without "the"</th>
                <th className="text-left px-4 py-3 font-semibold text-blue-700">Subject "the"</th>
                <th className="text-left px-4 py-3 font-semibold text-blue-500">Object "the"</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-500">English</th>
              </tr>
            </thead>
            <tbody>
              {masculineArticle.map((r, i) => (
                <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-blue-50 transition-colors">
                  <td className="px-4 py-3 font-bold text-gray-900">{r.without}</td>
                  <td className="px-4 py-3 font-bold text-blue-700">{r.withFull}</td>
                  <td className="px-4 py-3 font-bold text-blue-500">{r.withShort}</td>
                  <td className="px-4 py-3 text-gray-500 text-xs">{r.en}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 text-sm text-blue-900 flex items-start gap-2">
          <Image src="/images/lightbulb.png" alt="" width={16} height={16} className="shrink-0 mt-0.5 object-contain" />
          <span>In casual speech most Bulgarians use the short form (-а/-я) for everything. The distinction matters more in writing.</span>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="font-semibold text-gray-700 flex items-center gap-2"><span className="text-rose-600">♀</span> Feminine — add -та</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-rose-50">
                <th className="text-left px-4 py-3 font-semibold text-gray-600">Without "the"</th>
                <th className="text-left px-4 py-3 font-semibold text-rose-700">With "the"</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-500">English</th>
              </tr>
            </thead>
            <tbody>
              {feminineArticle.map((r, i) => (
                <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-rose-50 transition-colors">
                  <td className="px-4 py-3 font-bold text-gray-900">{r.without}</td>
                  <td className="px-4 py-3 font-bold text-rose-700">{r.withArticle}</td>
                  <td className="px-4 py-3 text-gray-500 text-xs">{r.en}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="font-semibold text-gray-700 flex items-center gap-2"><span className="text-emerald-600">◇</span> Neuter — add -то</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-emerald-50">
                <th className="text-left px-4 py-3 font-semibold text-gray-600">Without "the"</th>
                <th className="text-left px-4 py-3 font-semibold text-emerald-700">With "the"</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-500">English</th>
              </tr>
            </thead>
            <tbody>
              {neuterArticle.map((r, i) => (
                <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-emerald-50 transition-colors">
                  <td className="px-4 py-3 font-bold text-gray-900">{r.without}</td>
                  <td className="px-4 py-3 font-bold text-emerald-700">{r.withArticle}</td>
                  <td className="px-4 py-3 text-gray-500 text-xs">{r.en}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="font-semibold text-gray-700">Plural — add -те or -та</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-purple-50">
                <th className="text-left px-4 py-3 font-semibold text-gray-600">Plural (no article)</th>
                <th className="text-left px-4 py-3 font-semibold text-purple-700">Plural with "the"</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-500">English</th>
              </tr>
            </thead>
            <tbody>
              {pluralArticle.map((r, i) => (
                <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-purple-50 transition-colors">
                  <td className="px-4 py-3 font-bold text-gray-900">{r.without}</td>
                  <td className="px-4 py-3 font-bold text-purple-700">{r.withArticle}</td>
                  <td className="px-4 py-3 text-gray-500 text-xs">{r.en}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
