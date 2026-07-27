import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import EnglishPage from './EnglishPage';

export default function RoutesSetup() {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/EnglishPage' element={<EnglishPage />}></Route>
        </Routes>
    );
}
