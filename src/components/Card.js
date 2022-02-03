import React from "react";
import imagenuno from '../images/hombre.png'
import imagenCirculo from '../images/degradado.png'
import './styles/Card.css'

class Card extends React.Component{
 render(){

     return (
<div className="Card mx-auto Fitness-Card"
    style={{
        backgroundImage:'url({imagenCirculo}),linear-gradient(to right, {this.props.leftColor}, #617BFB)'
    }}
>
    <div className="card-body">
    <div className="row center">
            <div className="col-6">
                <img src={imagenuno} />
            </div>
            <div>
                <h1>{this.props.titulo}</h1>
                <p>{this.props.descripcion}</p>
            </div>
        </div>
    </div>
</div>



 

     )
 }

}

export default Card