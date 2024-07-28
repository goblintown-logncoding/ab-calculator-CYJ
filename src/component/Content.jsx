import { useRef, useState } from "react";
import "./Content.css";

const Content = () => {
    const refA = useRef();
    const refB = useRef();
    const [state,setState] = useState(0);
    const [out,setOut] = useState(0);
    let operator = "+";
    const Calculate = () => {
        let a = refA.current.value;
        let b = refB.current.value;
        if(state === 0){
            setOut(a + b);
        }
        else if(state === 1){
            setOut(a - b);
        }
        else if(state === 2){
            setOut(a * b);
        }
        else if(state === 3){
            setOut(a / b);
        }
    }
    return (
        <div className="content">
            <div className="button">
                <button onClick = {()=>{setState(0)}}>Add</button>
                <button onClick = {()=>{setState(1)}}>Subtract</button>
                <button onClick = {()=>{setState(2)}}>Multiply</button>
                <button onClick = {()=>{setState(3)}}>Divide</button>
            </div>
            <div className="input">
                <input ref={refA}/>
                {state == 0 ? "+" : state == 1 ? "-" : state == 2 ? "*" : "/"}
                <input ref={refB}/>
                =
                 {out} 
                <button className = "calculate" onClick={
                    Calculate}>Calculate</button>
            </div>
        </div>
    )
}
export default Content;