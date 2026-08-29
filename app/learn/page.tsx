import Link from "next/link";

const lessons = [
  { href: "/learn/pronouns", title: "Pronouns", desc: "I, you, he, she, we — personal and possessive pronouns.", color: "bg-amber-50 border-amber-200 hover:bg-amber-100", accent: "text-amber-700" },
  { href: "/learn/tenses", title: "Tenses", desc: "Present, past and future tense with example conjugations.", color: "bg-sky-50 border-sky-200 hover:bg-sky-100", accent: "text-sky-700" },
  { href: "/learn/genders", title: "Genders", desc: "Masculine, feminine, neuter — how to recognise each.", color: "bg-rose-50 border-rose-200 hover:bg-rose-100", accent: "text-rose-700" },
  { href: "/learn/articles", title: "The — Definite Article", desc: "Bulgarian 'the' is a suffix attached to the end of words.", color: "bg-orange-50 border-orange-200 hover:bg-orange-100", accent: "text-orange-700" },
  { href: "/learn/tourist", title: "Tourist Survival", desc: "Order beer, find the metro, ask for the bill — quick wins.", color: "bg-teal-50 border-teal-200 hover:bg-teal-100", accent: "text-teal-700" },
];

export default function LearnPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Learn</h1>
        <p className="text-gray-500 text-sm mt-1">Grammar lessons and quick references.</p>
      </div>
      <div className="flex flex-col gap-3">
        {lessons.map((l) => (
          <Link key={l.href} href={l.href} className={`flex items-center gap-4 border-2 rounded-2xl px-5 py-4 transition-colors ${l.color}`}>
            <div>
              <div className={`font-bold text-base ${l.accent}`}>{l.title}</div>
              <div className="text-gray-600 text-sm mt-0.5">{l.desc}</div>
            </div>
            <span className="ml-auto text-gray-300 text-xl">›</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
