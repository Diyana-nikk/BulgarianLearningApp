"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { loadWords, shuffle, CATEGORIES, type Word } from "@/lib/words";

interface Question {
  word: Word;
  options: string[];
  correct: string;
}

function buildQuestions(words: Word[]): Question[] {
  return shuffle(words).map((word) => {
    const distractors = shuffle(words.filter((w) => w.english !== word.english))
      .slice(0, 3)
      .map((w) => w.english);
    const options = shuffle([word.english, ...distractors]);
    return { word, options, correct: word.english };
  });
}

export default function QuizPage() {
  const [allWords, setAllWords] = useState<Word[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    loadWords().then(setAllWords);
  }, []);

  useEffect(() => {
    const filtered = category === "all" ? allWords : allWords.filter((w) => w.category === category);
    if (filtered.length >= 4) {
      setQuestions(buildQuestions(filtered));
      setIndex(0);
      setScore(0);
      setSelected(null);
      setFinished(false);
    }
  }, [allWords, category]);

  const q = questions[index];

  function choose(option: string) {
    if (selected !== null) return;
    setSelected(option);
    if (option === q.correct) setScore((s) => s + 1);
  }

  function next() {
    if (index + 1 >= questions.length) {
      setFinished(true);
    } else {
      setIndex((i) => i + 1);
      setSelected(null);
    }
  }

  function restart() {
    const filtered = category === "all" ? allWords : allWords.filter((w) => w.category === category);
    setQuestions(buildQuestions(filtered));
    setIndex(0);
    setScore(0);
    setSelected(null);
    setFinished(false);
  }

  if (!q) return <div className="text-center text-gray-500 mt-20">Loading…</div>;

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="flex flex-col items-center gap-6 text-center py-8 sm:py-12">
        {pct < 50 && (
          <Image src="/images/book.png" alt="" width={64} height={64} className="object-contain" />
        )}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Quiz complete!</h2>
        <p className="text-lg sm:text-xl text-gray-600">
          You scored <span className="font-bold text-blue-600">{score}/{questions.length}</span> ({pct}%)
        </p>
        <button
          onClick={restart}
          className="px-8 py-3 rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-colors"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Quiz</h1>
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
            className="bg-green-500 h-2 rounded-full transition-all"
            style={{ width: `${Math.round(((index) / questions.length) * 100)}%` }}
          />
        </div>
        <span>{index + 1} / {questions.length}</span>
        <span className="text-green-600 font-medium">✓ {score}</span>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-3xl p-5 sm:p-8 text-center shadow-sm">
        <p className="text-sm text-gray-400 mb-2 uppercase tracking-wide">What does this mean?</p>
        <p className="text-3xl sm:text-5xl font-bold text-gray-900">{q.word.bulgarian}</p>
        <p className="text-gray-400 italic mt-2">{q.word.transliteration}</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {q.options.map((opt) => {
          let style = "bg-white border-2 border-gray-200 text-gray-800 hover:bg-gray-50";
          if (selected !== null) {
            if (opt === q.correct) style = "bg-green-50 border-2 border-green-500 text-green-800";
            else if (opt === selected) style = "bg-red-50 border-2 border-red-400 text-red-700";
            else style = "bg-white border-2 border-gray-100 text-gray-400";
          }
          return (
            <button
              key={opt}
              onClick={() => choose(opt)}
              className={`rounded-2xl p-4 font-medium text-left transition-colors ${style}`}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <div className="flex flex-col items-center gap-3">
          {selected === q.correct ? (
            <p className="text-green-700 font-semibold">Correct!</p>
          ) : (
            <p className="text-red-600 font-semibold">
              Incorrect — the answer is <span className="font-bold">{q.correct}</span>
            </p>
          )}
          {q.word.example_bg && (
            <p className="text-sm text-gray-500 text-center">
              <span className="text-gray-700 font-medium">{q.word.example_bg}</span>
              <br />
              <span className="italic">{q.word.example_en}</span>
            </p>
          )}
          <button
            onClick={next}
            className="px-8 py-2 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors"
          >
            {index + 1 >= questions.length ? "See results" : "Next →"}
          </button>
        </div>
      )}
    </div>
  );
}
