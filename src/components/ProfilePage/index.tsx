import React from 'react';

import { 
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage 
} from './styles';

const ProfilePage: React.FC = () => {
  return(
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        {/* <EditButton outlined>Editar perfil</EditButton> */}

        <h1>Paulo Gabriel</h1>
        <h2>@bielllp</h2>

        <p>
          Desenvedor web, full-stack
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brazil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 4 de abril de 2002
          </li>
        </ul>

        <Followage>
          <span>
            Seguindo <strong>101</strong>
          </span>
          <span>
            <strong>21 </strong>seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
}

export default ProfilePage;