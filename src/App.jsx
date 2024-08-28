import { Login } from "./routes/Login";
import { Home } from "./routes/Home";
import { About } from "./routes/About";
import { Contact } from "./routes/Contact";
import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { UsuarioProvider } from "./context/UsuarioProvider";
export const App = () => {
  return (
    <UsuarioProvider>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Contact"element={<Contact></Contact>}></Route>
        <Route path="/*" element= { <Navigate to= '/'/>} ></Route>
      </Routes>
    </UsuarioProvider>
  );
};
