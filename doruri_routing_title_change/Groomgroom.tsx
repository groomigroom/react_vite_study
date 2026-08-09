import { Link } from 'react-router-dom';
import { useDocumentTitle } from './useDocumentTitle';

export default function Groomgroom() {
    useDocumentTitle('구름이네 멍멍이 페이지');

    return (
        <div>
            김구름의 멍멍이의 홈페이지
            <Link to='/'>dfd</Link>
        </div>
    );
}
