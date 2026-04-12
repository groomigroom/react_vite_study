import type {FC} from 'react';
import {Link} from 'react-router-dom';

type HomeProps = {
    title?: string
}

const Home: FC<HomeProps> = ({title}) => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/welcome">환영합니다.</Link>
            <Link to="/board">보드판</Link>
            <p>{title ?? 'Home'}</p>
        </div>
    )
}

export default Home;