import { BrowserRouter } from "react-router-dom";
import RoutesSetup from './routes_com/RoutesSetup';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <RoutesSetup />
      </BrowserRouter>
    </>
  )
}