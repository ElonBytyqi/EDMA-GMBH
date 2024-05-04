import React, { useContext } from 'react';
import { Context } from '../Context/Products';
import de from "../assets/de.svg";
import en from "../assets/england.svg";


const LangSwitch = () => {
  const [state, dispatch] =  useContext(Context);

  const change = () => {
    dispatch({
      type: "LANG",
      payload: {
        language: state.language === "en" ? "de" : "en"
      }
    })
  }

  return (
    <button onClick={() => change()}>
        {state.language === "en" ? (
          <img className='h-8' src={de} />
        ) : (
          <img className='h-8' src={en} />
        )}
    </button>
  )
}

export default LangSwitch;
