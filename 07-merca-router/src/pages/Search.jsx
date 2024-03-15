import React from 'react'
import { useEffect } from 'react'

export default function SearchPage({ routeParams }) {

  useEffect(() => {
    document.title = `Has buscado ${routeParams.query}`
  })
  return (
    <div>
      <h1>Has buscado: { routeParams.query }</h1>
    </div>
  )
}


