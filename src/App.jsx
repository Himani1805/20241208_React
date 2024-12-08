import { Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import CountryPage from "./pages/CountryPage";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => (
  <ThemeProvider>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/countryName" element={<CountryPage/>}/>
        </Routes>
      </Router>
  </ThemeProvider>

);

export default App
