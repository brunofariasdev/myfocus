import React from 'react';
import { MenuLateral, Menu, Perfil, ImgPerfil, NickName, MenuList,MenuItemSelect, MenuItem} from './style';


function LeftMenu(){
        return(
        <MenuLateral>  
                <Perfil>
                        <ImgPerfil/>
                        <NickName>BolinhaDev</NickName>
                </Perfil>    
    
                 <Menu>
                    <MenuList>
                        <MenuItemSelect>Home</MenuItemSelect>
                        <MenuItem>Pomodoro</MenuItem>
                        <MenuItem>Resumos</MenuItem>
                        <MenuItem>TodoList</MenuItem>
                        <MenuItem>Cronogramas</MenuItem>
                     </MenuList>
                </Menu>   
        </MenuLateral>
        )
   
}
export default LeftMenu;