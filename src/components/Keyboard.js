import React, { useEffect } from 'react'
import '../styles/key.css'
import '../styles/keyboardWrapper.css'
import Key from './Key.js'
import KeyboardRow from './KeyboardRow.js'

export default function keyboard({ letters }) {
    const realKeyboard = letters.map((element, index) => 
        <KeyboardRow key={index} num={index}>
            {
                element.map((element, index) => 
                    <Key key={index} big={element.length > 1 ? true : false}>{ element }</Key>
                )
            }
        </KeyboardRow>
    );

    return (
      <div className="keyboardWrapper">
        { realKeyboard }
      </div>
  );
}