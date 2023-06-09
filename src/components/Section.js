import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({title, description, leftBtnText, rightBtnText, backgroundImage}) {
    // console.log(props);
  return (
      <Container bgImage={backgroundImage}>
        <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
        </Fade>
        <Buttons>
            <Fade bottom>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                    {rightBtnText && 
                        <RightButton>
                            {rightBtnText}
                        </RightButton>
                    }
                </ButtonGroup>
            </Fade>
            <DownArrow src=process.env.PUBLIC_URL+"images/down-arrow.svg"/>
        </Buttons>

    </Container>
  )
}

export default Section 
const Container = styled.div`
    width:100vw;
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    display:flex;
    flex-direction:column; 
    justify-content:space-between;
    align-items:center;
    background-image: ${props=>`url(process.env.PUBLIC_URL+"images/${props.bgImage}")`}
`
const ItemText = styled.div`
    margin-top:15vh;
    text-align:center;
`//component

const Buttons = styled.div``;

const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:30px;
    @media(max-width:768px){
        flex-direction:column;
    }
`;

const LeftButton = styled.div`
    background-color:rgba(23,26,32,0.8);
    height:40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius: 20px;
    opacity:0.85;
    text-transform:uppercase;
    font-size:12px;
    cursor:pointer;
    margin:8px;
`;

const RightButton = styled(LeftButton)`
    background:white;
    opacity:0.85;
    color:black;
`;

const DownArrow = styled.img`
    margin-top:20px;
    height:40px;
    overflow-x:hidden;
    cursor:pointer;
    animation:animateDown infinite 1.5s;
`;
