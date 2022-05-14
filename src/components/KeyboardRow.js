import React from 'react'
import '../styles/row.css'

export default function KeyboardRow({ children, num }) {
  return (
    <div className={`row ${num === 1 ? "second_line" : ""}`}>
        { children }
    </div>
  )
}