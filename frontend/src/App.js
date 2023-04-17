 
import React, {useState,useMemo} from "react"
import styled from "styled-components";
import backgroundd from './img/backgroundd.png'
import {MainLayout} from './styles/layouts'
import Orb from './components/Orb/Orb' 
import Navigation from "./components/navigation/navigation";





function App() {
  
  const [active,setActive]=useState(1)
  const orbMemo=useMemo(() =>{
      return <Orb/> 
  },[])

  
  return (
    <AppStyled backgroundd={backgroundd} className="App">
        {orbMemo}
      <MainLayout>
         <Navigation active ={active},setActive={setActive} />
      </MainLayout>

    </AppStyled>
  );
}

const AppStyled=styled.div`{
  height: 100vh;
  background-image: url(${props=> props.backgroundd});
  position :relative;
`;




export default App;
