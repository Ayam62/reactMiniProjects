import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './container/Form'
import Result from './container/Result'


function App() {
  const [submit, setSubmit] = useState("false")
  const [result,setResult]=useState(0);
  const[height,setHeight]=useState(0);
  const[weight,setWeight]=useState(0);

  return (
    <div className="Page">
     <div className="container">
      <h1>BMI CALCULATOR</h1>
      <Form setHeight={setHeight}
       setWeight={setWeight}
       setSubmit={setSubmit}
       setResult={setResult}
      ></Form>
      {submit==="true" && <Result result={result}></Result>}
     </div>
    </div>
  )
}

export default App
