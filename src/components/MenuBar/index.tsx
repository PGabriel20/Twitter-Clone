import React from 'react';

import {
  Container,
   Topside,
   Logo,
   HomeIcon,
   MenuButton,
   BellIcon,
   EmailIcon,
   FavoriteIcon,
   ProfileIcon,
   Botside,
   Avatar,
   ProfileData,
   ExitIcon
  } from './styles';

  import Button from '../Button';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo/>

        <MenuButton>
          <HomeIcon />
          <span>Página inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificaçõesl</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritadosl</span>
        </MenuButton>

        <MenuButton>
          <ProfileIcon className="active"/>
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>
      </Topside>

      <Botside>
        <Avatar />
          <ProfileData>
            <strong>Paulo Gabriel</strong>
            <span>@bielllp</span>
          </ProfileData>

          <ExitIcon />
      </Botside>

    </Container>
  );
}

export default MenuBar;