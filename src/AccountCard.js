import React, { useState } from 'react'
import ExpenseCard from './ExpenseCard'

function AccountCard({id, name, balance, setBalance}) {

    const [showCard, setShowCard] = useState(true)
    const [expenses, setExpenses] = useState([])
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")


    // function showExpenses() {
    //     console.log("test")
    //     fetch(`http://localhost:9292/expenses`)
    //     .then(res => res.json())
    //     .then(data => setExpenses(data))
    // }

    function deleteAccount() {
        fetch(`http://localhost:9292/accounts/${id}`, {
            method: "DELETE",    
        })
        setShowCard(!showCard)
    }

    /////////////////
    function handleCreateExpense(e) {
        e.preventDefault()
        const expense = {
            price: price,
            description: description,
            account_id: id
        }

        fetch("http://localhost:9292/expenses",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(expense)
        })
        .then(res => res.json())
        .then(expense => setExpenses([...expenses, expense]))

        setPrice("")
        setDescription("")
        
        fetch(`http://localhost:9292/accounts/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                balance: parseFloat(balance) - parseFloat(price)
            }),
        })
        .then((r) => r.json())
        .then(data => setBalance(data.balance))
    }

    const renderExpenses = expenses.map((expense) => {
        return <ExpenseCard 
            key={expense.id} 
            id={expense.id} 
            price={expense.price} 
            description={expense.description} />
    })
    /////////////////

    function handlePrice(e) {
        setPrice(e.target.value)
    }

    function handleDescription(e) {
        setDescription(e.target.value)
    }

  return (
    <>
        {showCard ? <div className="accountCard"  >
        <div>
            <h2 style={{color: "black", fontSize: "25px", fontFamily: "fantasy"  }}>{name}</h2>
            <h5 style={{color: "green", fontSize: "20px"  }}>Account Balance: ${balance}</h5>
        </div>
        {renderExpenses}
        <ExpenseCard/>
        <form onSubmit={handleCreateExpense}>
                <h4>Add an Expense</h4>
                <label>Price: </label>
                <input onChange={handlePrice} value={price}></input>
                <br/>
                <br/>
                <label>Description: </label>
                <input onChange={handleDescription} value={description}></input>
                <br/>
                <br/>
                <button style={{color: "green"}}>Submit Expense</button>
        </form>
        <button onClick={deleteAccount}>🗑️</button>
        </div> : null}
    </>
  )
}

export default AccountCard