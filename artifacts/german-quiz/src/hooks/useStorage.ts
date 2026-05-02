import { useState, useCallback } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("gq_favorites") || "[]");
    } catch {
      return [];
    }
  });

  const toggleFavorite = useCallback((german: string) => {
    setFavorites((prev) => {
      const next = prev.includes(german)
        ? prev.filter((w) => w !== german)
        : [...prev, german];
      localStorage.setItem("gq_favorites", JSON.stringify(next));
      return next;
    });
  }, []);

  const isFavorite = useCallback(
    (german: string) => favorites.includes(german),
    [favorites]
  );

  return { favorites, toggleFavorite, isFavorite };
}

export function useMistakes() {
  const [mistakes, setMistakes] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("gq_mistakes") || "[]");
    } catch {
      return [];
    }
  });

  const addMistake = useCallback((german: string) => {
    setMistakes((prev) => {
      if (prev.includes(german)) return prev;
      const next = [...prev, german];
      localStorage.setItem("gq_mistakes", JSON.stringify(next));
      return next;
    });
  }, []);

  const removeMistake = useCallback((german: string) => {
    setMistakes((prev) => {
      const next = prev.filter((w) => w !== german);
      localStorage.setItem("gq_mistakes", JSON.stringify(next));
      return next;
    });
  }, []);

  const clearMistakes = useCallback(() => {
    setMistakes([]);
    localStorage.setItem("gq_mistakes", "[]");
  }, []);

  return { mistakes, addMistake, removeMistake, clearMistakes };
}

export interface NoteItem {
  id: string;
  german: string;
  translation: string;
  createdAt: number;
}

export function useNotes() {
  const [freeText, setFreeText] = useState<string>(() => {
    return localStorage.getItem("gq_notes_text") ?? "";
  });

  const [sentences, setSentences] = useState<NoteItem[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("gq_notes_sentences") || "[]");
    } catch {
      return [];
    }
  });

  const saveFreeText = useCallback((text: string) => {
    setFreeText(text);
    localStorage.setItem("gq_notes_text", text);
  }, []);

  const addSentence = useCallback((german: string, translation: string) => {
    setSentences((prev) => {
      const next: NoteItem[] = [
        ...prev,
        { id: Date.now().toString(), german, translation, createdAt: Date.now() },
      ];
      localStorage.setItem("gq_notes_sentences", JSON.stringify(next));
      return next;
    });
  }, []);

  const removeSentence = useCallback((id: string) => {
    setSentences((prev) => {
      const next = prev.filter((n) => n.id !== id);
      localStorage.setItem("gq_notes_sentences", JSON.stringify(next));
      return next;
    });
  }, []);

  return { freeText, saveFreeText, sentences, addSentence, removeSentence };
}
