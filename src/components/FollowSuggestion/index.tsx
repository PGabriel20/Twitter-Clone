import React from 'react';

import { Container, Avatar, Info, FollowButton } from './styles';

interface Props{
  name: string;
  nickname: string;
}

const FollowSuggestion: React.FC<Props> = ({name, nickname}) => {
  return (
    <Container>
      <div>
        <Avatar />

        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>
      <FollowButton>Seguir</FollowButton>
    </Container>
  );
}

export default FollowSuggestion;