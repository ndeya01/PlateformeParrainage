import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./pages/Dashboard";
import Candidats from "./pages/Candidats";
import Parrainage from "./pages/Parrainage";
import Electeurs from "./pages/Electeurs";
import Parametres from "./pages/Parametres";
import Acceuil from "./pages/Acceuil";
import Login from "./pages/Login";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Acceuil />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="candidats" element={<Candidats />} />
          <Route path="parrainage" element={<Parrainage/>}/>
          <Route path="electeurs" element={<Electeurs/>}/>
          <Route path="parametre" element={<Parametres/>}/>
        </Route>
        <Route path="login" element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default App
