import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Groomgroom from './Groomgroom';

export default function RoutesSetup() {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Groomgroom' element={<Groomgroom />}></Route>

        </Routes>
    );
}
