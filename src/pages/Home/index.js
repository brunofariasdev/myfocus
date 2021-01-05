import React from 'react';
import {ContainerHome, Content} from './style';
import Pomodoro from '../../Components/Pomodoro';
import LeftMenu from '../../Components/LeftMenu';

function Home(){
    return(
        <ContainerHome>
            <LeftMenu />    
           
            <Content>
                <Pomodoro/>
            </Content>
        </ContainerHome>
    )
}

export default Home;