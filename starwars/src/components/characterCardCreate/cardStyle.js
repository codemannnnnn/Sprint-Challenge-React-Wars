

import React from 'react'
import styled from 'styled-components'


export const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
margin: auto;
width: 1000px;
`;

export const Card = styled.div`
background-color: white;
width: 300px;
height: 300px;
margin: 50px;
padding: 20px;
& > h3{
  text-align: center;
}
& > p{
  text-align: left;
}
&:hover{
}
`;
