import React,{useState} from 'react'

export default function Textform(props) {
    const [text,setText] = useState("");

    const btnupclick = () =>{
        let newtxet = text.toUpperCase();
        setText(newtxet);
        props.showalert("converted to uppercase","success");
        }

    const btnloclick = () => {
        let newtxet = text.toLowerCase();
        setText(newtxet);
        props.showalert("converted to lowercase","success");
    }

    const btnclclick = () => {
        let newtxet = '';
        setText(newtxet);
        props.showalert("text is clear","success");
    }

    const btnspclick = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showalert("text speaked","success");
    }

    const btnrsclick = () =>
        {
            let newtxet = text.replace(/\s+/g,' ');
            setText(newtxet);
            props.showalert("all spacese are removed ", "success");
        }

    const btnchangehandle = (event) => {
        console.log("change handle");
        setText(event.target.value);
    }
  return (
    <>
    <div className="container" style={{color : props.mode==='dark'?'white':'#042743'}}>  
    <div className="mb-3">
    <h1 className="mb-3">{props.hading}</h1>
    <textarea className="form-control" value = {text}  onChange={btnchangehandle} style={{backgroundColor : props.mode==='dark'?'#042743':'white' , color : props.mode==='dark'?'white':'#042743'}} id="text" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={btnupclick}>convert to upper case</button>
    <button className="btn btn-primary mx-2" onClick={btnloclick}>convert to lower case</button>
    <button className="btn btn-primary mx-2" onClick={btnclclick}>clear</button>
    <button className="btn btn-primary mx-2" onClick={btnspclick}>speak</button>
    <button className="btn btn-primary mx-2" onClick={btnrsclick}>remove spaces</button>
    </div>
    <div className="container my-3" style={{color : props.mode==='dark'?'white':'#042743'}}>
        <h2>text summarry</h2>
        <p>{text.split(" ").length} words {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} in mintues you caan read this</p>
        <h3>Prview</h3>
        <p>{text.length>0?text:"Enter text in above text box to Prview"}</p>
    </div>
    </>
  )
}
