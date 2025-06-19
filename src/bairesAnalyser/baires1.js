import React, {useState, useRef} from 'react';
import {AiOutlineBold, AiOutlineItalic, AiOutlineUnderline, AiOutlineAlignCenter,AiOutlineAlignLeft, AiOutlineAlignRight, AiOutlineRollback } from "react-icons/ai";

const  Editor = () => {

  const [text, setText ] = useState("");
  const [bold, setBold ] = useState(false);
  const [italian, setItalian ] = useState(false);
  const [underline, setUnderline ] = useState(false);
  const [font, setFont] = useState(16);
  const[align,setAlign] = useState("left");
  const [quotes, setQuotes] = useState("false");
  const [currCase, setCurrCase] = useState("capitalize");
  const [Analysis, setAnalysis] = useState({});
  const [HTMLCODE, setHTMLCODE] = useState("");
  
  const Bold = () =>{
    setBold(true)
  }

  const Italian = () =>{
    setItalian(true)
  }
  const Underline = () =>{
    setUnderline(true)
  }

  const changeFont = (operation) =>{
    for(let i = 0; i < operation.length; i++){
      if(operation == 1){
        setFont(font + 1)
      }else{
        setFont(font - 1)
      } return
    }
  };

  const changeAlign = () =>{
    setAlign(!align)
  };

  
const Quotes = () =>{
  setQuotes(!quotes)
};

const caseChange = (c) =>{
  for (let i = 0; i < c.length; i++){
    if (c =='u'){
      setCurrCase(!currCase)
    } else{

    }
  }
}

const reset = () =>{
    
  }

  const Analyse = () =>{
    /*
    no of letters
    no of words
    no of integers
    no of space
    no of specialsymbols
    */
      setFont(font);
      setAlign(true);
      setCurrCase(currCase);
      setQuotes(true);
      setUnderline(true);
      setItalian(true);
      setBold(true);
  }







  return (

    <div className='editorcomp'>
      <div className="button">
        <button className='bold' placeholder="bldbtn" onClick={Bold}><AiOutlineBold /></button>
      

      <button className='italian' placeholder="italian" onClick={Italian}><AiOutlineItalic /></button>
      

      <button className='underline' placeholder="underline" onClick={Underline}><AiOutlineUnderline /></button>
      
      {/* to increase d font */}
      <button className='size' onClick={changeFont}>A+</button>
      
            {/* to decrease d font */}
      <button className='size' onClick={changeFont}>A-</button>
      
      <button className='align' onClick={(e) => changeAlign("left")}><AiOutlineAlignLeft /></button>

            <button className='align' placeholder="align" onClick={(e) => changeAlign("center")}><AiOutlineAlignCenter /></button>

            <button className='align' onClick={(e) => changeAlign("right")}><AiOutlineAlignRight /></button>

            <button className='quotes' onClick={Quotes}> " "</button>

            <button className='caseChange' onClick={(e) => caseChange("u")}>UC</button>

            <button className='caseChange' onClick={(e) => caseChange("l")}>LC</button>

            <button className='caseChange' onClick={(e) => caseChange("c")}>C</button>

            <button className='Empty' onClick={reset}><AiOutlineRollback /></button>

        {/** create a button with className="analyse nd wen clicked it shud call Analyse() functn used to analyse the text in the of this button shud be "Analyse""*/}
        <button className='analyse' onClick={Analyse}>Analyse</button>

      
      </div>
      <textarea
        name=""
        id=""
        cols="30"
        row="10"
        placeholder='type something...'

        onChange={(e) => setText(e.target.value)}
        value={text}
      ></textarea>

      {/**create a textarea with placeholder="ANALYSIS", type disabled, className="analysis", and it should display the object result generated in the analysis functn*/}
      <textarea className="analysis" placeholder='ANALYSIS' type= "disabled"></textarea>
    </div>
  )
}

export default Editor;