import { useState } from 'react';

export default function CreateTodo(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
            <input id="title" style= {{padding:10, margin:10}} type= "text" placeholder="title"
            onChange={function(e) {
                const value = e.target.value
                setTitle(value)
            }}></input> <br />

            <input id="desc" style= {{padding:10, margin:10}} type= "text" placeholder="description" 
            onChange={function(e){
                const value = e.target.value
                setDescription(value)
            
            }}></input> <br />

            <button style= {{padding:10, margin:10}} onClick= {() => {
                fetch("http://localhost:3000/api/todos", {
                    method:"POST",
                    body: JSON.stringify({
                        username:title,
                        password:description,

                    }),
                    headers:{
                        "Content-Type": "application/json"
                    }
                }).then(async function(response){
                    const json = await response.json()
                    alert(json.message)
                    //return response.json()
                })
            }}>Add a Todo</button>
          </div>
    

}