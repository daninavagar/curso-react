import { useEffect, useState } from "react";
import { getRandomFact } from "../services/fact";

export default function useCatFact () {

  const [facts, setFacts] = useState()
  
  const refreshFact = () => {
    getRandomFact().then(newFact => setFacts(newFact))

  }

  useEffect(refreshFact, [])

  return { facts, refreshFact }
}