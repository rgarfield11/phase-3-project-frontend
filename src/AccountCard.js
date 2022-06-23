import React, { useState } from 'react'

function AccountCard({id, name, balance}) {

    const [showCard, setShowCard] = useState(true)

    function expandAccount() {
        console.log("test")
    }

    function deleteAccount() {
        fetch(`http://localhost:9292/accounts/${id}`, {
            method: "DELETE",    
        })
        setShowCard(!showCard)
    }

  return (
    <>
        {showCard ? <div className="accountCard"  >
        <div onClick={expandAccount} >
            <h2 style={{color: "black", fontSize: "25px", fontFamily: "fantasy"  }}>{name}</h2>
            <h5 style={{color: "green", fontSize: "20px"  }}>${balance}</h5>
        </div>
        <button onClick={deleteAccount}>🗑️</button>
        </div> : null}
    </>
  )
}

export default AccountCard