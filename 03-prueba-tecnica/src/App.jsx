import { useEffect, useState } from "react"
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirstsWords}?size=50&color=red&json=true`
const IMAGE_PREFIX = 'https://cataas.com'


export function App() {
  const [fact, setFact] = useState('lorem ipsum cat fact')
  const [imageID, setImageID] = useState(null)
  const [imgThreeWords, setImgThreeWords] = useState(null)

  //recuperar la cita
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => {
        if (!res.ok) throw new Error('Error fetchig fact')
        return res.json()
      })
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
      .catch((err) => {
        //manejo de error
      })
  }, [])

  //recuperar imagenes con cada cita nueva
  useEffect(() => {
    if (!fact) return

    const threeFirstsWords = fact.split(' ', 3).join(' ')

    fetch(`https://cataas.com/cat/says/${threeFirstsWords}?json=true`)
      .then(res => res.json())
      .then(response => {
        const { _id } = response
        setImageID(_id)
        setImgThreeWords(threeFirstsWords)
      })
  }, [fact])

  const imageSource = `https://cataas.com/cat/${imageID}/says/${imgThreeWords}?size=50&fontColor=%23fff`

  return (
    <main>
      <h1>App de gatitos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageID && <img src={imageSource} alt={`Image extracted using the first three words for ${fact}`} />}
      </section>
    </main>
  )
}