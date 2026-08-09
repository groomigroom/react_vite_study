import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useDocumentTitle(title: string) {
    // 현재 라우터의 위치(URL) 정보를 가져옵니다.
    const location = useLocation();

    useEffect(() => {
        document.title = title;
    }, [title, location]); // URL(location)이 변경될 때마다 타이틀을 다시 세팅합니다.
}
