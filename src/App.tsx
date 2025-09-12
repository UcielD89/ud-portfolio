import "./App.css";
import { BrowserRouter } from "react-router-dom";
// Components and pages
import NavbarComponent from "./components/Navbar/NavbarComponent";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
