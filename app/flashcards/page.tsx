"use client";

import { useEffect, useState } from "react";
import { loadWords, shuffle, CATEGORIES, type Word } from "@/lib/words";

export default function FlashcardsPage() {
  const [allWords, setAllWords] = useState<Word[]>([]);
  const [deck, setDeck] = useState<Word[]>([]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [category, setCategory] = useState("all");
  const [showTranslit, setShowTranslit] = useState(true);

  useEffect(() => {
    loadWords().then(setAllWords);
  }, []);

  useEffect(() => {
    const filtered = category === "all" ? allWords : allWords.filter((w) => w.category === category);
    setDeck(shuffle(filtered));
    setIndex(0);
    setFlipped(false);
  }, [allWords, category]);

  const current = deck[index];
  const progress = deck.length ? Math.round(((index + 1) / deck.length) * 100) : 0;

  function next() {
    setFlipped(false);
    setTimeout(() => setIndex((i) => Math.min(i + 1, deck.length - 1)), 150);
  }

  function prev() {
    setFlipped(false);
    setTimeout(() => setIndex((i) => Math.max(i - 1, 0)), 150);
  }

  function restart() {
    setDeck(shuffle(deck));
    setIndex(0);
    setFlipped(false);
  }

  if (!current) {
    return <div className="text-center text-gray-500 mt-20">Loading words…</div>;
  }

  const done = index === deck.length - 1 && flipped;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Flashcards</h1>
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
      </div>

      <div className="text-sm text-gray-500 flex items-center gap-2">
        <div className="flex-1 bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span>{index + 1} / {deck.length}</span>
      </div>

      {/* Card */}
      <div
        onClick={() => setFlipped((f) => !f)}
        className="cursor-pointer select-none bg-white border-2 border-gray-200 rounded-3xl shadow-sm hover:shadow-md transition-shadow min-h-48 sm:min-h-64 flex flex-col items-center justify-center gap-4 p-5 sm:p-8 text-center"
      >
        {!flipped ? (
          <>
            <p className="text-3xl sm:text-5xl font-bold text-gray-900">{current.bulgarian}</p>
            {showTranslit && (
              <p className="text-lg sm:text-xl text-gray-400 italic">{current.transliteration}</p>
            )}
            <p className="text-sm text-gray-400 mt-4">Tap to reveal</p>
          </>
        ) : (
          <>
            <p className="text-2xl sm:text-4xl font-bold text-blue-700">{current.english}</p>
            <div className="border-t border-gray-100 pt-4 w-full">
              <p className="text-gray-700 font-medium">{current.example_bg}</p>
              <p className="text-gray-400 text-sm mt-1 italic">{current.example_en}</p>
            </div>
          </>
        )}
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={prev}
          disabled={index === 0}
          className="px-3 sm:px-5 py-2 rounded-xl border border-gray-300 text-gray-600 font-medium disabled:opacity-30 hover:bg-gray-50 transition-colors text-sm sm:text-base"
        >
          ← Back
        </button>

        <label className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 cursor-pointer">
          <input
            type="checkbox"
            checked={showTranslit}
            onChange={(e) => setShowTranslit(e.target.checked)}
            className="rounded"
          />
          <span className="hidden sm:inline">Show </span>transliteration
        </label>

        {done ? (
          <button
            onClick={restart}
            className="px-3 sm:px-5 py-2 rounded-xl bg-green-600 text-white font-medium hover:bg-green-700 transition-colors text-sm sm:text-base"
          >
            Restart 🎉
          </button>
        ) : (
          <button
            onClick={next}
            disabled={index === deck.length - 1}
            className="px-3 sm:px-5 py-2 rounded-xl bg-blue-600 text-white font-medium disabled:opacity-30 hover:bg-blue-700 transition-colors text-sm sm:text-base"
          >
            Next →
          </button>
        )}
      </div>

      <p className="text-xs text-center text-gray-400">
        Category: <span className="capitalize">{category}</span> · {deck.length} cards
      </p>
    </div>
  );
}
