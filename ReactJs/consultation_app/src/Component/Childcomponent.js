import React from 'react'

function Childcomponent({greeting , user}) {
    console.log(greeting , user)
  return (
    <div>
        <p>{greeting},{user.name}</p>
        <p>Age:{user.age}</p>
    </div>
  )
}

export default Childcomponent