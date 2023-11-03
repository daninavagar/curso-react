import { useEffect, useState } from "react"
import { getRandomFact } from "../services/fact"
import useCatImage from "../hooks/useCatImage"

function Facts() {

  const [facts, setFacts] = useState(null)

  const image = useCatImage(facts)
  
  useEffect(() => {
    getRandomFact().then(newFact => setFacts(newFact))
  }, [])

  const handleClick = async () => {
    const newFact = await getRandomFact();
    setFacts(newFact)
  }

  return (
    <section>
      <button onClick={handleClick}>Nuevos Factos</button>
      <div>
        <h2>Factos</h2>
        {
          facts && <p>{facts}</p>
        }
      </div>
      <div>
        <h2>Imagen</h2>
        {
          image && <img src={image} alt="Image from facts by first word" /> 
        }
      </div>
    </section>
  )
}

export default Facts