import { useState, useEffect } from "react";
import { getRandomFacts } from "../services/facts";
export function useCatFact() {
  const [fact, setFact] = useState();
  const refreshFact = () => {
    getRandomFacts().then((newFact) => setFact(newFact));
  };
  // para recuperar la cita al cargar la página
  useEffect(refreshFact, []);
  return { fact, refreshFact };
}
