import React, {useState} from "react";
import {StyledSearchBar, StyledInputBar, StyledButton} from './SearchBox.style'


export const SearchBar = ({setQuery}) => {
    const [inputValue, setInputValue] = useState('')

  return (
    <StyledSearchBar>
      <StyledInputBar onChange={(e)=>setInputValue(e.target.value)} />
      <StyledButton onClick={()=>{setQuery(inputValue)}} >Search</StyledButton>
    </StyledSearchBar>
  );
};
