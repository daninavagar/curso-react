import { useEffect, useState } from "react";
import { URL_CATS } from "../constant";

export default function useCatImage(fact) {

  const [image, setImage] = useState(null) 
  
  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ')[0]
    
    fetch(URL_CATS+firstWord)
    .then(res => res.url)
    .then(data => {
      setImage(data)
    })
  }, [fact])

  return image
}