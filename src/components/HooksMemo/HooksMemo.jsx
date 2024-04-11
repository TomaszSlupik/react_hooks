import React, { useMemo } from 'react'

export default function HooksMemo() {

    const data = [
        {"name": "arbuz"},
        {"name": "banan"},
        {"name": "kiwi"}

    ]

    // useMemo - hook, który zwraca wartość, jest pomocny ponieważ nie wstrzymuje aplikacji. 
    // Jeżeli używamy liczbę posiłków jako useMemo,  wywoływała się ponownie tylko wtedy, gdy liczba posiłków zmienia się.
    // Gdy nie użyjemy useMemo, wtedy np. jak będziemy chcieli zmienic kolor innego przycisku to ten komponent co zawiera liczbę 
    // posiłków będzie ponownie renderował się
    
    const countMeal = useMemo(() => {
        return data.length
    }, [data])

  return (
    <div>
        Liczba posiłków:
        {
            countMeal
        }
    </div>
  )
}