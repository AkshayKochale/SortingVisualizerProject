import { useState } from 'react'
import './App.css'
import MainComponent from './component/MainComponent'
import './index.css'
import Header from './component/Header'
import {ContextProvider,RenderProvider} from './component/ArrayContext'
function App() {

  return (
    <>  
    <RenderProvider>
    <ContextProvider>
    <Header></Header>
    <MainComponent></MainComponent>
    </ContextProvider>
    </RenderProvider>
    </>
  )
}

export default App
