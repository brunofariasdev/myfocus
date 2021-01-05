import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #FFFFFA;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

export const Timer = styled.div`
    height: 60rem;
    width: 60rem;
    border-radius: 50%;
    border: 3px solid #FF2E56;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Span = styled.span`
    font-size: 8rem;
    text-align: center;
    margin-top: 4rem;
    color: #FF2E56;

`;

export const Button = styled.button`

    height: 7rem;
    width: 15rem;
    background-color: #FF2E56;
    border: 0;
    border-radius: 5rem;
    font-size: 3.2rem;
    color: ${props => props.Color};
    margin-bottom: 6rem;


`;