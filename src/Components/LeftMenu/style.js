import styled from 'styled-components';

export const MenuLateral = styled.div`
    height: 100vh;
    width: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;


`;



export const Menu = styled.div`
    height: 80%;
    background-color: #FF2E56;
    padding: 0;
    margin-top: -3rem;
 
    

`;

export const Perfil = styled.div`
    background-color: #FF2E56;
    height: 19rem;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    
`;

export const ImgPerfil = styled.div`
    height: 20rem;
    width: 11rem;
    border-radius: 50%;
    margin: 1rem;
    background-image: url('https://i.pinimg.com/originals/fd/b6/3c/fdb63c8e5c0c201fccaf55c9fda27d52.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    border: 3px solid white;

`;

export const NickName = styled.h3`
    font-size: 1.5rem;
    color: white;
    text-align: center;
    padding: 0;
    
`;


export const MenuList = styled.ul`
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align:  center;
   
   
`;

export const MenuItem = styled.li`
    color: white;
    font-size: 1.7rem;
    padding: 0;
    margin: 0;
    height: 4rem;
    width: 100%;
    text-transform: uppercase;
    text-decoration: none;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
  &:hover{
      opacity: 0.7;
  }  

`;

export const MenuItemSelect = styled(MenuItem)`
    background-color: #fff6;
    border-left: 3px solid white;
    cursor: pointer;
    

`;