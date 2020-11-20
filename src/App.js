import React, { useEffect } from "react";
import { CardList } from "./components/CardList/index";
import axios from 'axios';
import {StyledCardList} from './components/CardList/CardList.style'





function App() {






  return (
    <StyledCardList>
      <CardList />
    </StyledCardList>
  );
}

export default App;
