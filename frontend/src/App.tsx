import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./Page/Home"
import { Login } from "./Page/Login"
import { Navbar } from "./Component/Navbar"
import { Signup } from "./Page/Signup"
import { HistoryProvider } from "./Context/HistoryContext";
import About from "./Component/About"
import { Contact } from "./Component/Contact"
import Footer from "./Component/Footer"
import { DatabaseInfo } from "./Page/DatabaseInfo"
import { RaiseDBRequestSubNavbar } from "./Component/RaiseDBRequestSubNavbar"

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
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<DatabaseInfo />}/>
            <Route path="/raise/request" element={<RaiseDBRequestSubNavbar />}/>
          </Routes>
          </main>
        <Footer />
        </HistoryProvider>
      </BrowserRouter>
    </>
  )
}

export default App
