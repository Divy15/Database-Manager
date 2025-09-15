import { BrowserRouter, Route , Routes } from "react-router-dom"
import { Home } from "./Page/Home"
import { Login } from "./Page/Login"
import { Navbar } from "./Component/Navbar"

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
