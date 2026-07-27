import { BrowserRouter } from "react-router-dom";
import RoutesSetup from './RoutesSetup';



// import TxtEvent from "./modules/txt/events/TxtEvent";

function App() {


  return (
    <BrowserRouter>
      <RoutesSetup />
    </BrowserRouter>
  )
}

export default App
