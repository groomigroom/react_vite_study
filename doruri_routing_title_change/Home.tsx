import { Link } from "react-router-dom";
import { useDocumentTitle } from './useDocumentTitle';

export default function Home() {
    useDocumentTitle('구름이네 기본 페이지다.');

    return (
        <div>
            김구름의 홈페이지
            <Link to='/Groomgroom'>구름구름</Link>
        </div>
    );
}
