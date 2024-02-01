import { useState, useEffect } from "react"

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  useEffect(() => {
    if (!fact) return

    const threeFirstsWords = fact.split(' ', 3).join(' ')

    fetch(`https://cataas.com/cat/says/${threeFirstsWords}?json=true`)
      .then(res => res.json())
      .then(response => {
        const { _id } = response

        setImageUrl(`https://cataas.com/cat/${_id}/says/${threeFirstsWords}?size=50&fontColor=%23fff`)
      })
  }, [fact])

  return { imageUrl }
}