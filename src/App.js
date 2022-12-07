import React, { useState ,useEffect} from "react"

const ButtonClick = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
     })
     //useEffect ( () =>{
    //fetchData();
    // },[])
  }

  return (
    <div>
      <button onClick={fetchData}>click me</button>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <div> 
              <li>
              {user.name}    {user.email}   {user.id}

              </li>
              </div>
          ))}
        </ul>
      )}
    </div>
  )
}
export default ButtonClick;


