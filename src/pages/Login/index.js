import React from 'react';
import { ContainerLogin ,Social, SocialItem,  FormArt, FormLogin, Imput,Button,TextLogin, Container} from './style';
function Login(){
    return(
      <Container>
        <ContainerLogin>
          <FormLogin>

              <TextLogin>Login</TextLogin>
              <Imput />
              <Imput />
              <Button>Entrar</Button>
              <Social>
                <SocialItem background="facebook" />
                <SocialItem background="tw" />
                <SocialItem background="google"/>
              </Social>
          </FormLogin>
          <FormArt>
              
          </FormArt>
        </ContainerLogin>
      </Container>
        
    )
}

export default Login;