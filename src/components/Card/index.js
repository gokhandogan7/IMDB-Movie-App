import {StyledCardWrapper, StyledTitle, StyledMovieImage} from './Card.style'



export const Card = (props)=>{
    console.log(props)
    return(
    <StyledCardWrapper>
        <StyledMovieImage src={props.img} />
        <StyledTitle>{props.name}</StyledTitle>
    </StyledCardWrapper>
        )
    
}


