import Link from "next/link";

const practice = [
  {
    href: "/flashcards",
    emoji: "🃏",
    title: "Flashcards",
    desc: "Flip cards to learn vocabulary — tap to reveal the translation.",
    color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
    accent: "text-blue-700",
  },
  {
    href: "/quiz",
    emoji: "🧠",
    title: "Quiz",
    desc: "4-option multiple choice. Test what you know and track your score.",
    color: "bg-emerald-50 border-emerald-200 hover:bg-emerald-100",
    accent: "text-emerald-700",
  },
  {
    href: "/browse",
    emoji: "📖",
    title: "Browse",
    desc: "Search and browse all words with transliteration and example sentences.",
    color: "bg-violet-50 border-violet-200 hover:bg-violet-100",
    accent: "text-violet-700",
  },
];

const lessons = [
  {
    href: "/learn/pronouns",
    emoji: "🙋",
    title: "Pronouns",
    desc: "I, you, he, she, we — personal and possessive pronouns.",
    color: "bg-amber-50 border-amber-200 hover:bg-amber-100",
    accent: "text-amber-700",
  },
  {
    href: "/learn/tenses",
    emoji: "⏱️",
    title: "Tenses",
    desc: "Present, past, and future — how to talk about time in Bulgarian.",
    color: "bg-sky-50 border-sky-200 hover:bg-sky-100",
    accent: "text-sky-700",
  },
  {
    href: "/learn/genders",
    emoji: "⚖️",
    title: "Genders",
    desc: "Masculine, feminine, neuter — how Bulgarian nouns are categorised.",
    color: "bg-rose-50 border-rose-200 hover:bg-rose-100",
    accent: "text-rose-700",
  },
  {
    href: "/learn/articles",
    emoji: "📌",
    title: "The — Definite Article",
    desc: "Bulgarian 'the' is a suffix — learn how it attaches to words.",
    color: "bg-orange-50 border-orange-200 hover:bg-orange-100",
    accent: "text-orange-700",
  },
  {
    href: "/learn/tourist",
    emoji: "✈️",
    title: "Tourist Survival",
    desc: "Order beer, find the metro, ask for directions — essential phrases.",
    color: "bg-teal-50 border-teal-200 hover:bg-teal-100",
    accent: "text-teal-700",
  },
];

function Card({ href, emoji, title, desc, color, accent }: typeof practice[0]) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-4 border-2 rounded-2xl px-5 py-4 transition-colors ${color}`}
    >
      <span className="text-3xl shrink-0">{emoji}</span>
      <div className="min-w-0">
        <div className={`font-bold text-base ${accent}`}>{title}</div>
        <div className="text-gray-600 text-sm mt-0.5 leading-snug">{desc}</div>
      </div>
      <span className="ml-auto text-gray-300 text-xl shrink-0">›</span>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      {/* Hero */}
      <div className="text-center pt-2">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2" style={{ color: "#1A6B45" }}>
          Хайде!
        </h1>
        <p className="text-gray-500 text-base">
          <em>"Let's go!"</em> — your Bulgarian adventure starts here 🇧🇬
        </p>
      </div>

      {/* Practice */}
      <section className="flex flex-col gap-3">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">Practice</h2>
        {practice.map((m) => <Card key={m.href} {...m} />)}
      </section>

      {/* Learn */}
      <section className="flex flex-col gap-3">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">Learn</h2>
        {lessons.map((m) => <Card key={m.href} {...m} />)}
      </section>

      <p className="text-center text-xs text-gray-400 pb-2">
        50+ words · 5 grammar lessons · tourist survival guide
      </p>
    </div>
  );
}
