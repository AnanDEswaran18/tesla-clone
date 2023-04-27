import React from 'react'
import styled from 'styled-components'

function Section() {
  return (
    <Wrap>
        <ItemText>
            <h1>Model s</h1>
            <p>Order Online for Touchless delivery</p>
        </ItemText>
        <ButtonGroup>
            <LeftButton>
                Custom Order
            </LeftButton>
            <RightButton>
                Existing Inventory
            </RightButton>
        </ButtonGroup>
    </Wrap>
  )
}

export default Section
const Wrap = styled.div`
    width:100vw;
    height:100vh;
    background-size:cover;
    background-position:centre;
    background-repeat:no-repeat;
    background-image:url('/images/model-s.jpg');
`
const ItemText = styled.div`
    padding-top:15vh;
    text-align:center;
`//component

const ButtonGroup = styled.div``;

const LeftButton = styled.div`
    background-color:rgba(23,26,32,0.8);
    height:40px;
    width:256px;
    color:white;
`;

const RightButton = styled(LeftButton)`

`;
