export interface Word {
  bulgarian: string;
  transliteration: string;
  english: string;
  category: string;
  example_bg: string;
  example_en: string;
}

export const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "greetings", label: "Greetings" },
  { id: "animals", label: "Animals" },
  { id: "food", label: "Food" },
  { id: "numbers", label: "Numbers" },
  { id: "colors", label: "Colors" },
];

export async function loadWords(): Promise<Word[]> {
  const res = await fetch("/data/words.csv");
  const text = await res.text();

  const lines = text.trim().split("\n");
  const headers = lines[0].split(",");

  return lines.slice(1).map((line) => {
    // Handle commas inside fields by splitting carefully
    const values = line.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/);
    const obj: Record<string, string> = {};
    headers.forEach((h, i) => {
      obj[h.trim()] = (values[i] ?? "").trim().replace(/^"|"$/g, "");
    });
    return obj as unknown as Word;
  });
}

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
