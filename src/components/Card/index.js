import {StyledCardWrapper, StyledTitle, StyledMovieImage} from './Card.style'



export const Card = ({imgUrl, name})=>{

    return(
    <StyledCardWrapper>
        <StyledMovieImage src={imgUrl} />
        <StyledTitle>{name}</StyledTitle>
    </StyledCardWrapper>
        )
    
}


