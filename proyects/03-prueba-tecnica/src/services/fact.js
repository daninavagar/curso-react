import { URL_FACTS } from "../constant"

export const getRandomFact = () => {
  return fetch(URL_FACTS)
    .then(res => res.json())
    .then(data => data.fact)
}