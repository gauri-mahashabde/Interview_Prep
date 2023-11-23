import React from 'react'
import Childcomponent from './Childcomponent'

function Parentcomponent() {
    const greeting = 'Hello';
    const user = {name:'gauri' , age:25}
  return (
    <div>
     <Childcomponent greeting = {greeting} user = {user}/>
    </div>
  )
}

export default Parentcomponent