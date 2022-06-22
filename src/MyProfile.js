import React, {useState} from 'react'

function MyProfile({currentUser}){
    const [name, setName] = useState("")
    const [balance, setBalance] = useState("")
    const {id, username} = currentUser

    
 
    function listAccounts() {
        fetch(`http://localhost:9292//users/${id}`)
        .then(res => res.json())
        .then(data => console.log(data))
    }


    function handleName(e){
        setName(e.target.value)
    }

    function handleBalance(e){
        setBalance(e.target.value)
    }


    function handleCreateAccount(e){
        e.preventDefault()
        const account = {
            name: name,
            balance: balance,
            user_id: currentUser.id
        }

        fetch("http://localhost:9292/accounts",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(account)
        })
        .then(res => res.json())
        .then(account => console.log(account))

        e.preventDefault()  
        setName("")
        setBalance("")
    }
    return(
        <div>
            <h1>Add an Account</h1>
            <form onSubmit={handleCreateAccount}>
                    <label>Account Name: </label>
                    <input 
                        onChange={handleName}
                        value={name}
                    />
                    <br/>
                    <label>Starting Balance: $</label>
                    <input 
                        onChange={handleBalance}
                        value={balance}
                    />
                    <br/>
                    <button>Create Account</button> 
            </form>
            <div>
                <h1>Hello, {username}!</h1>
                <button onClick={listAccounts}>Accounts</button>
            </div>
        </div>
        )
}
export default MyProfile