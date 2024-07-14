
import React, { lazy, Suspense } from "react"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
const Mainpage=lazy(()=>import('./Pages/Mainpage'))
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Suspense fallback={<div>...Loading</div>}>
          <Mainpage/>
        </Suspense>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
