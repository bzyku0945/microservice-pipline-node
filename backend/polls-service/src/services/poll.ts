// src/services/poll.service.js

// Mock baza danych w pamięci
const mockPolls = [
  {
    id: "1",
    question: "Jaki jest Twój ulubiony język programowania?",
    options: [
      { id: "opt1", text: "JavaScript" },
      { id: "opt2", text: "Python" },
      { id: "opt3", text: "Go" },
    ],
  },
  {
    id: "2",
    question: "Frontend czy Backend?",
    options: [
      { id: "opt1", text: "Frontend" },
      { id: "opt2", text: "Backend" },
      { id: "opt3", text: "Fullstack" },
    ],
  },
];

// Używamy "async", aby symulować opóźnienie bazy danych
export const pollService = {
  /**
   * Zwraca listę wszystkich ankiet
   */
  getAll: async () => {
    // Symulacja opóźnienia sieci
    await new Promise((res) => setTimeout(res, 50));
    // Zwracamy tylko ID i pytanie (lista)
    return mockPolls.map((p) => ({ id: p.id, question: p.question }));
  },
};
