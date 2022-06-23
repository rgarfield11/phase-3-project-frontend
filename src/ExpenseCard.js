import React from 'react'

function ExpenseCard({price, description}) {
  return (
    <div>
        <h3>${price}</h3>
        <h5>{description}</h5>
    </div>
  )
}

export default ExpenseCard