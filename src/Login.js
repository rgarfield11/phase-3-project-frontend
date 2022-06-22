import React, {useState} from 'react'
import {useHistory} from "react-router-dom"

function Login({setCurrentUser}){
    const history = useHistory()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    
    function handleUsername(e){
        setUsername(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }
    
    // useEffect(()=>{
    //     fetch("http://localhost:9292")
    //     .then((r) => r.json())
    //     .then((data) => console.log(data));
    // }, [])

    function handleCreateProfile(e){
        e.preventDefault()
        const user = {
            username: username,
            password: password
        }

        fetch("http://localhost:9292/users",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(user => setCurrentUser(user))

        e.preventDefault()  
        setUsername("")
        setPassword("")
        history.push("/MyProfile")
    }

    return(
        <div>
            <h1>expensify</h1>
            <div className="createProfileForm">
                <h4>Create Your Profile</h4>
                <form onSubmit={handleCreateProfile}>
                    <label>Username: </label>
                    <input 
                        onChange={handleUsername}
                        value={username}
                    />
                    <br/>
                    <label>Password: </label>
                    <input 
                        onChange={handlePassword}
                        value={password}
                    />
                    <br/>
                    <button>Create User</button> 
                </form>
            </div>
        </div>
    )
}
export default Login