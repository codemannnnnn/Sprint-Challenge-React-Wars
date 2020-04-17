import React from 'react'
import CardMaker from "./CardMaker"
import {Container, Card} from './cardStyle'

const CardCreate = props => {

console.log(props.character)

return(

  <Container>

  {
    props.character.map(character =>{
    return(
      <CardMaker character = {character}/>
    )
  })
}

  </Container>
)


}

export default CardCreate;
