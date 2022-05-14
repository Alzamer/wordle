import React from 'react'
import '../styles/key.css'

import BackspaceIcon from '@mui/icons-material/Backspace';

export default function Key({big, guess, children}) {
  if(children === 'BACKSPACE')
    return <div className="key big"><BackspaceIcon fontSize='large'/></div>
  return (
    <div className={`key ${big ? "big" : ""} ${guess === 1 ? "guessed" : ""} ${guess === 2 ? "wrongPosition" : ""}`}>{ children }</div>
  );
}