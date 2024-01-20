import Header from './Header1'
import Section from './Section1';
import Counter from './Counter1';
import { useState } from 'react';
import List from './List1';


function App() {
  const [counter, setCounter] = useState(1)

  return (
    <>
      <Header title='This is the Header'/>

      <Section>
        <p>New World</p>
      </Section>

      <h1>Hello World</h1>

      <Counter setCounter={setCounter}> Counter is {counter} </Counter>

      <List items={['apple', 'pancake', 'omlet']} render= {(item:string) => <span className='gold'>{item}</span>}/>
    </>
  )
}

export default App
