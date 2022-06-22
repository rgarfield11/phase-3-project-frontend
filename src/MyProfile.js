import React, {useState} from 'react'

function MyProfile(){
    const [accountName, setAccountName] = useState("")
    const [balance, setBalance] = useState("")

    
    function handleAccountName(e){
        setAccountName(e.target.value)
    }

    function handleBalance(e){
        setBalance(e.target.value)
    }


    function handleCreateAccount(e){
        e.preventDefault()
        const account = {
            accountName: accountName,
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
        setAccountName("")
        setBalance("")
    }
    return(
        <div>
            <h1>Add an Account</h1>
            <form onSubmit={handleCreateAccount}>
                    <label>Account Name: </label>
                    <input 
                        onChange={handleAccountName}
                        value={accountName}
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