import React from 'react'

import '../styles/letter.css'

export default function letter({ children, guessed }) {
  return (
    <div className={`letter ${guessed === 1 ? 'guessed' : ''} ${guessed === 2 ? 'wrongPlace' : ''}`}>{ children }</div>
  )
}