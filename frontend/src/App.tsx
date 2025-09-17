import { BrowserRouter, Route , Routes } from "react-router-dom"
import { Home } from "./Page/Home"
import { Login } from "./Page/Login"
import { Navbar } from "./Component/Navbar"
import { Signup } from "./Page/Signup"

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
