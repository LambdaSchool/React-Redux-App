import React from 'react';
import { Card } from 'semantic-ui-react';

import styled from 'styled-components';

const CustomCard = styled(Card)`
  &&& {
    width: 25%;
    padding: 5%;
  }
`


const PlayerCard = props => {
  
  const handleClick = e => {
    e.preventDefault();
    props.addPlayer(props.player)
  }

  return (
    
    <CustomCard>
      <Card.Header>
        {props.player.first_name} {props.player.last_name}
      </Card.Header>
      <Card.Meta>
        Position: {props.player.position}
      </Card.Meta>
      <Card.Description>
        {props.player.team.full_name} <br/>
        Conference: {props.player.team.conference}
      </Card.Description>
      <button onClick={handleClick} className='button'> Add </button>
    </CustomCard>

  );
};



export default PlayerCard;
