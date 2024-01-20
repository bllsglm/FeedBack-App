import { ReactNode } from "react"

type CounterProps = {
  children : ReactNode,
  setCounter : React.Dispatch<React.SetStateAction<number>>
}


const Counter = ({ setCounter, children} :CounterProps) => {

  return (
    <>
      <button onClick={()=>setCounter(previous => previous - 1)}>-</button>
      <div>{children}</div>
      <button onClick={()=>setCounter(previous => previous + 1)}>+</button>
    </>
  )
}

export default Counter