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
import { RaiseDBRequestSubNavbar } from "./Component/RaiseDBRequest/RaiseDBRequestSubNavbar"
import { MergeRequest } from "./Page/MergeRequest"
import CodeDiff from "./Component/MergeRequest/CodeDiff"
import { HistoryList } from "./Component/RequestHistory/HistoryList"
import CodeDiffRevert from "./Component/RequestHistory/CodeDiffRevert"
import { DatabaseRegistry } from "./Page/DatabaseRegistry"
// import { SearchBox } from "./UI/SearchBox"

function App() {


  return (
    <>
      <BrowserRouter>
       <HistoryProvider>
        {/* Full-height flex container */}
        <div className="flex flex-col min-h-screen">
          <Navbar />
          {/* main content grows to fill space */}
          <main className="flex-grow pt-[80px]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/dashboard" element={<DatabaseInfo />} />
              <Route path="/raise/request" element={<RaiseDBRequestSubNavbar />} />
              <Route path="/merge/request" element={<MergeRequest />} />
              <Route path="/code/diff" element={<CodeDiff/>} />
              <Route path="/request/history" element={<HistoryList />}/>
              <Route path="/revert/code/diff" element={<CodeDiffRevert />}/>
              <Route path="/database/registery" element={<DatabaseRegistry />}/>
              {/* <Route path="/ui" element={<SearchBox />}/> */}
            </Routes>
          </main>
          {/* Footer will now stick to the bottom if content is short */}
          <Footer />
        </div>
      </HistoryProvider>
      </BrowserRouter>
    </>
  )
}

export default App
