import './style.css'
import {useState} from 'react';

function Cal(){
    const [input, setInput] = useState('');

    const handleClick=(value)=>{
        setInput((prev)=>prev+value);
    };

    const handleResult=()=>{
        try{
            setInput(eval(input).toString());
        }
        catch(error){
            setInput('error');
        }
    };
    return(
        <div class="box">
            <div class="box-display">
                <input value={input} />
            </div>
            <button onClick={()=>handleClick('7')}>7</button>
            <button onClick={()=>handleClick('8')}>8</button>
            <button onClick={()=>handleClick('9')}>9</button>
            <button onClick={()=>handleClick('*')}>x</button>
            <button onClick={()=>handleClick('4')}>4</button>
            <button onClick={()=>handleClick('5')}>5</button>
            <button onClick={()=>handleClick('6')}>6</button>
            <button onClick={()=>handleClick('/')}>/</button>
            <button onClick={()=>handleClick('1')}>1</button>
            <button onClick={()=>handleClick('2')}>2</button>
            <button onClick={()=>handleClick('3')}>3</button>
            <button onClick={()=>handleClick('-')}>-</button>
            <button onClick={()=>handleClick('0')}>0</button>
            <button onClick={()=>handleClick('.')}>.</button>
            <button onClick={()=>handleResult()}>=</button>
            <button onClick={()=>handleClick('+')}>+</button>
            
        </div>
    )
}

export default Cal;