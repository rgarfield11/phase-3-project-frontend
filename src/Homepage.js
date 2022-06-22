import React, { useState, useEffect } from 'react'
import AccountCard from './AccountCard'

function Homepage(){
    const [accounts, setAccounts] = useState([])
    const [name, setName] = useState("")
    const [balance, setBalance] = useState("")

    useEffect(() => {(fetch(`http://localhost:9292/accounts`))
        .then(res => res.json())
        .then(data => setAccounts(data))
    },[accounts.length])

    function handleName(e) {
        setName(e.target.value)
    }

    function handleBalance(e) {
        setBalance(e.target.value)
    }

    function handleCreateAccount(e) {
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
        .then(account => setAccounts([...accounts, account]))

        setName("")
        setBalance("")
    }

    const renderCards = accounts.map((account) => {
        return <AccountCard 
            key={account.id} 
            id={account.id} 
            name={account.name} 
            balance={account.balance} />
    })

    return(
        <>
        <div>
            <h1>Expensify</h1>
        </div>
        <div>
            <h3>Add an Account</h3>
            <form onSubmit={handleCreateAccount}>
                <label>Account Name:</label>
                <input onChange={handleName} value={name}></input>
                <br/>
                <label>Balance:</label>
                <input onChange={handleBalance} value={balance}></input>
                <br/>
                <button>Create Account</button>
            </form>
            {renderCards}
            <AccountCard/>
        </div>
        </>
    )
}
export default Homepage