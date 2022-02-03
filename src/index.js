// const elemento =document.createElement('h1')
// elemento.innerText='Hola React'

// const container=document.getElementById('root')
// container.appendChild(elemento)

import React from 'react'
import ReactDom from 'react-dom'
import Card from './components/Card'
import 'bootstrap/dist/css/bootstrap.css'



// const user={
//   firstName:'elkin',
//   lastName:'hurtado',
//   avatar:'https://imgur.com/a/iCJ2uvL'
// }

// function getName(user){
//   return user.firstName +  ' ' + user.lastName;
// }
// const nombre='elkin'

// const elemento=(
//   <div>
//   <h1>{getName(user)}</h1>
// <img src={user.avatar}/>
// </div>
// )
 const contenedor=document.getElementById('root')

ReactDom.render(<Card
            titulo="Hola mundo con props como les queda el ojo"
            descripcion="estas son las propiedades"
            leftColor="#A74CF2"
            rightColor="#617BFB"






/> ,contenedor)
