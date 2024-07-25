import React from "react";
//리액트 라이브러리 불러오는 명령어
import { BrowserRouter, Route, Routes }from "react-router-dom";
import HomeView from "./views/HomeView";


const App = ()=>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;