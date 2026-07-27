import { useEffect } from 'react';

const EnglishPage = () => {
    useEffect(() => {
        // 페이지 진입 시 영어로 설정
        document.documentElement.lang = 'en';

        // 페이지를 나갈 때 기존 언어(ko)로 복구
        return () => {
            document.documentElement.lang = 'ko';
        };
    }, []);

    return (
        <div>
            <h1>Welcome to the English Page</h1>
            <p>This content is optimized for English speakers.</p>
        </div>
    );
};

export default EnglishPage;
