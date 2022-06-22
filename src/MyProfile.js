import React, {useState} from 'react'

function MyProfile(){
    const [name, setName] = useState("")
    const [balance, setBalance] = useState("")

    
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
            balance: balance
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
        </div>
        )
}
export default MyProfile