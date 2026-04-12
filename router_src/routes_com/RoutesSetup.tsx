import { Routes, Route } from 'react-router-dom';
import NoMatch from './NoMatch';
import Home from './Home';
import Board from './Board';

export default function RoutesSetup() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/welcome" element={<Home title='우리의 페이지에서 환영합니다.'/>}></Route>
            <Route path="/board" element={<Board/>}></Route>
            <Route path="*" element={<NoMatch/>}></Route>
        </Routes>
    )
};