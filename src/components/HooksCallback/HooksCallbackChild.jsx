import React from 'react'

export default function HooksCallbackChild(props) {
  return (
    <div>
        ChildCallbackhook:
        <button
        onClick={props.handleClick}
        >Kliknij</button>
    </div>
  )
}