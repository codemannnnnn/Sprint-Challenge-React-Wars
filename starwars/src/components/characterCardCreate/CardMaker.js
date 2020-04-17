import React from 'react'
import {Container, Card} from './cardStyle'


const CardMaker = props => {

console.log(props.character)
//assembling cards passing info through props
return(
<Card>
<h3>{props.character.name}</h3>
<p>Height: {props.character.height} </p>
<p>Mass: {props.character.mass} </p>
<p>Hair Color: {props.character.hair_color} </p>
<p>Skin: {props.character.skin_color} </p>
<p>Eyes: {props.character.eye_color} </p>
<p>Gender: {props.character.gender} </p>

</Card>
)


}

export default CardMaker;
