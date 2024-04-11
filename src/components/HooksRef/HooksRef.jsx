import React, { useEffect, useRef } from 'react'

export default function HooksRef() {

// Hook useRef służy do pobierania inputa - to samo co document.queryselector 
// W Tym przykładzie pobrałem inputa i od razu po odświeżeniu strony mam na Inpucie i mogę coś pisać 

const inputRef = useRef(null)

const focusInput = () => {  
    inputRef.current.focus()
}

useEffect(() => {
    focusInput()
}, [])

// 2 przykład
// Zwiększamy co 1 ilość countera a useRef powoduje ze komponent nie jest odświeżany na nowo a counter liczony jest
// W konsoleLogu to widac 

const countRef = useRef(0)

const addCount = () => {
    countRef.current += 1;
    console.log('Aktualna wartość licznika:', countRef.current);
}

  return (
    <div>
        <input
        style={{margin: ' 1em 1em'}}
        type="text" ref={inputRef} />

        <button
        onClick={addCount}
        >Zwiększ Counter</button>
        <p>Aktualna wartość licznika: {countRef.current}</p>
    </div>
  )
}
