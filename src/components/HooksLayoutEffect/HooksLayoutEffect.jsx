import React, { useEffect, useLayoutEffect, useState } from 'react'

export default function HooksLayoutEffect() {

  const quotes = [
    "Witaj użytkowniku",
    "Cześć, jak się masz?",
    "Hej, miłego dnia!"
  ]

  const [quote, setQuote] = useState('Wczytywanie cytatów')
  const [loading, setLoading] = useState(true)

  useEffect (() => {
    setLoading(false)
  }, [])

  // useLayoutEffect działa synchronicznie czyli najpierw wyświetli się nagłówek a pozniej 
  // cała strona
  useLayoutEffect(() => {
      const randomQuoteIndex = Math.floor(Math.random() * quotes.length)
      setQuote(quotes[randomQuoteIndex])
  }, [loading])

  return (
    <div>LayoutEffect:
        {quote}
    </div>
  )
}