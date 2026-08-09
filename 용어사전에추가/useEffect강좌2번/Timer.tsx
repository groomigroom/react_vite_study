import {useEffect} from 'react';

const Timer = (props) => {

    useEffect (() => {
        const timer = setInterval(() => {
            console.log("타이머 돌아감");
        }, 1000);

        //return 부분 지워보기도 하기.
        return () => {
            clearInterval(timer);
            console.log('타이머 종료됨');
        }
    }, []);

    return (
        <div>
            <span>타이머를 시작합니다. 콘솔</span>
        </div>
    );
}

export default Timer;
