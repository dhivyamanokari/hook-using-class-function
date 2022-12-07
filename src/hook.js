import React ,{useState , useRef} from "react"

export default function refTry (){
const [data , usedata] = useState("")
const inputRef = useRef(null);

const handleSubmit = () => {
  console.log(inputRef.current.value)
}

 return(
    <div>
      <input ref = {inputRef} type = "text" placeholder = "Enter text"/>
      <br/>
      {data}
      <br/>
      <button onClick = {handleSubmit}>submit</button>
      </div>

  )
}