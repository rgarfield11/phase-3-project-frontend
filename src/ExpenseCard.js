import React from 'react'

function ExpenseCard({price, description}) {
  return (
    <div style={{width: "20%", margin: "auto", marginTop: "20px", borderStyle: "solid", borderWidth: "1px"}}>
        <h5>${price}</h5>
        <h5>{description}</h5>
    </div>
  )
}

export default ExpenseCard