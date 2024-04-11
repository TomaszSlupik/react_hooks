import React, { useCallback, useState } from 'react'
import HooksCallbackChild from './HooksCallbackChild'

export default function HooksCallback() {

const [counter, setCounter] = useState(0)

// useCallback - hook używany jest jako funkcja do przekazywania jej do komponentów 
// potomnych (dzieci). W ten sposób unikniemy niepotrzebnego ponownego renderowania tych komponentów 
// przy każdym renderowaniu komponentu nadrzędnego

const handleClick = useCallback(() => {
    setCounter(counter + 1)
}, [counter])

  return (
    <div>
        Callbackhook:
        <div>{counter}</div>
        <HooksCallbackChild 
        handleClick={handleClick}
        />
    </div>
  )
}