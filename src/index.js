// const elemento =document.createElement('h1')
// elemento.innerText='Hola React'

// const container=document.getElementById('root')
// container.appendChild(elemento)

import React from 'react'
import ReactDom from 'react-dom'

const user={
  firstName:'elkin',
  lastName:'hurtado',
  avatar:'https://imgur.com/a/iCJ2uvL'
}

function getName(user){
  return user.firstName +  ' ' + user.lastName;
}
const nombre='elkin'

const elemento=(
  <div>
  <h1>{getName(user)}</h1>
<img src={user.avatar}/>
</div>
)
const contenedor=document.getElementById('root')

ReactDom.render(elemento,contenedor)
