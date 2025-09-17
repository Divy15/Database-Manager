import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./Page/Home"
import { Login } from "./Page/Login"
import { Navbar } from "./Component/Navbar"
import { Signup } from "./Page/Signup"
import { HistoryProvider } from "./Context/HistoryContext";
import About from "./Component/About"

function App() {

  return (
    <>
      <BrowserRouter>
        <HistoryProvider>
          <Navbar />
           <main className="pt-[80px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />}/>
          </Routes>
          </main>
        </HistoryProvider>
      </BrowserRouter>
    </>
  )
}

export default App
