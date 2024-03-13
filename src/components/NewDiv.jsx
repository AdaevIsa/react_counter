import { useState } from "react"
import Buton from "./buton"
function NewDiv() {
    const  [count, setCount] = useState(0)
    return (
       <div>
         <div className="nol">{count}</div>
        
             <Buton title={'Начать'} bg={'blue'} onClick={() => setCount( Math.floor (Math.random() * 100) )}/>
             <Buton title={'Уменьшить'} bg={'orange'} onClick={() => setCount(count - 1)}/>
             <Buton title={'Сбросить'} bg={'gray'} onClick={() => setCount(0)}/>
         </div>
    )
}

export default NewDiv