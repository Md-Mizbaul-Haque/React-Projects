import React from 'react'

function Cart(prop) {
  return (
    <div className='bg-white shadow flex flex-col'>
        <h1>{prop.name}</h1>
        <h2>{prop.age}</h2>
        <h2>{prop.profession}</h2>
    </div>
  )
}

export default Cart