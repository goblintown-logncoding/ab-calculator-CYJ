import "./Content.css";
const Content = () => {
    let out= 0;
    let operator = "+";
    let mode = 0;
    const Calculate = () => {
        let a = document.getElementById("a").value;
        let b = document.getElementById("a").value;
        switch(mode){
            case 0:
                out = a + b;
                operator = "+";
                break;
            case 1:
                out = a - b;
                operator = "-";
                break;
            case 2:
                out = a * b;
                operator = "*";
                break;
            case 3:
                out = a / b;
                operator = "/";
                break;
            default:
                console.log("error");
        }
    }
    return (
        <div className="content">
            <div className="button">
                <button onClick={mode = 0}>Add</button>
                <button onClick={mode = 1}>Subtract</button>
                <button onClick={mode = 2}>Multiply</button>
                <button onClick={mode = 3}>Divide</button>
            </div>
            <div className="input">
                <input id="a"/>
                {/* {log} */}
                <input id="b"/>
                =
                {/* {out} */}
                <button className="calculate" onClick={Calculate()}>Calculate</button>
            </div>
        </div>
    )
}
export default Content;