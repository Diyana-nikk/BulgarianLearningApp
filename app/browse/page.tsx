"use client";

import { useEffect, useState } from "react";
import { loadWords, CATEGORIES, type Word } from "@/lib/words";

export default function BrowsePage() {
  const [allWords, setAllWords] = useState<Word[]>([]);
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadWords().then(setAllWords);
  }, []);

  const visible = allWords.filter((w) => {
    const matchCat = category === "all" || w.category === category;
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      w.bulgarian.toLowerCase().includes(q) ||
      w.english.toLowerCase().includes(q) ||
      w.transliteration.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-gray-800">Browse Words</h1>

      <input
        type="text"
        placeholder="Search in Bulgarian or English…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-400 bg-white"
      />

      <div className="flex gap-2 flex-wrap">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            onClick={() => setCategory(c.id)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              category === c.id
                ? "bg-blue-600 text-white"
                : "bg-white border border-gray-300 text-gray-600 hover:bg-gray-50"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <p className="text-sm text-gray-400">{visible.length} words</p>

      <div className="flex flex-col gap-2">
        {visible.map((w) => (
          <div
            key={`${w.bulgarian}-${w.english}`}
            className="bg-white border border-gray-200 rounded-2xl px-5 py-4 flex items-start gap-4"
          >
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-xl font-bold text-gray-900">{w.bulgarian}</span>
                <span className="text-sm text-gray-400 italic">{w.transliteration}</span>
                <span className="text-base font-semibold text-blue-700">{w.english}</span>
              </div>
              {w.example_bg && (
                <div className="mt-2 text-sm text-gray-500">
                  <span className="text-gray-700">{w.example_bg}</span>
                  <span className="italic ml-2">— {w.example_en}</span>
                </div>
              )}
            </div>
            <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full capitalize whitespace-nowrap">
              {w.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
