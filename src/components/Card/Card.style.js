import styled from "styled-components";

export const StyledCardWrapper = styled.div`
width: 200px;
height:300px;
color:#bdbdbd;
box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.5);
display: flex;
flex-direction: column;
border:1px solid black;
margin:12px 0px;
transition: 0.3s;
border-radius:10px;

&:hover{
    transform:scale(1.1);
transition: 0.5s;
}


`
export const StyledTitle = styled.p`
color:red;
font-size:12px;
font-weight:bold;
text-align:center

`

export const StyledMovieImage = styled.img`
border-radius:10px;
width:auto;
height:85%;

`