import React from 'react';
import { Container , Timer, Span, Button } from './style';


function Podomoro(){
   return(
       <Container>
            <Timer >

                <Span>25 : 00</Span>

                <Button Color="white">START</Button>

            </Timer>
       </Container>
   )
}

export default Podomoro;