import React, {useState} from 'react'
import './style.css'

export default function Calculadora(){
       
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [operador,setOperador] = useState()

    function valorNum(e) {
        let valorNum = e.target.value
            if(num1 === 0){
                setNum1(valorNum)
                
            }else{
                setNum1(num1 + valorNum)
            }
            
            
        }

    function limpar(){
        setNum1(0)
    }

    function operacao(e) {
        let ClickOperador = e.target.value
        setOperador(ClickOperador)
        setNum2(num1)
        setNum1(0)
  
    }

    function calcular() {

       if(operador === '+') {
       setNum1(parseFloat(num2) + parseFloat(num1))
    }

    if(operador === '-') {
        setNum1(parseFloat(num2) - parseFloat(num1))
     }

     if(operador === 'x') {
        setNum1(parseFloat(num2) * parseFloat(num1))
     }

     if(operador === '/') {
        setNum1(parseFloat(num2) / parseFloat(num1))
     }
         
    }

return (
    
   <body> 
    <div className='calculadora'>
        
        <div className='display'>
            <h1 className='resultadoFinal'>{num1}</h1>  
        </div>
            <button className='operacoes' onClick={limpar}> c </button>
            
            <button onClick={valorNum} value={1}>1</button>
            
            <button onClick={valorNum} value={2}>2</button>
            
            <button className='operacoes' onClick={operacao} value='+'> + </button>
            
            <button onClick={valorNum} value={3}>3</button>
            
                
            <button onClick={valorNum} value={4}>4</button>
            
            <button onClick={valorNum} value={5}>5</button>
            
            <button className='operacoes' onClick={operacao} value='-'> - </button>
            
            <button onClick={valorNum} value={6}>6</button>
            
            
            <button onClick={valorNum} value={7}>7</button>
            
            <button onClick={valorNum} value={8}>8</button>
            
            <button className='operacoes' onClick={operacao} value='/'> / </button>
            
            <button onClick={valorNum} value={9}>9</button>
            
            
            <button onClick={valorNum} value={0}>0</button>
            
            <button onClick={valorNum} value={'.'}>.</button>
            
            <button className='operacoes' onClick={operacao} value='x'> x </button>
            
            <button className='operacoes' id='igual' onClick={calcular}> = </button>
            
        </div>
      </body>
   
)
}