import React from "react";
import imagenuno from '../images/hombre.png'
import './styles/Card.css'

class Card extends React.Component{
 render(){
     return (
<div className="Card mx-auto Fitness-Card">
    <div className="card-body">
    <div className="row center">
            <div>
                <img src={imagenuno} />
            </div>
            <div>
                <h1>Guía técnica</h1>
                <p>Aprender habilidades</p>
            </div>
        </div>
    </div>
</div>



 

     )
 }

}

export default Card