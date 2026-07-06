import { useState } from 'react';
import './App.css';

export default function App() {
    // 1. 각 박스의 'on' 상태를 리스트(배열)로 한 번에 관리합니다. (초기값은 둘 다 false)
    const [boxStates, setBoxStates] = useState<boolean[]>([false, false]);

    // 전체 버튼의 토글 상태를 기록하는 변수
    const [allOn, setAllOn] = useState<boolean>(false);

    // 2. 개별 박스를 클릭했을 때 실행되는 함수 (해당 인덱스만 true로 전환)
    const handleBoxClick = (index: number) => {
        setBoxStates((prev) => {
            const nextStates = [...prev];
            nextStates[index] = true; // 토글이 아닌 고정 추가
            return nextStates;
        });
    };

    // 3. 상단 버튼을 클릭했을 때 전체를 켜거나 끄는 함수
    const handleAllToggle = () => {
        const nextTargetState = !allOn; // 현재 상태의 반대값 계산
        setAllOn(nextTargetState);

        // 개별 박스 상태들도 전체 버튼의 상태와 똑같이 동기화시켜 버립니다.
        setBoxStates([nextTargetState, nextTargetState]);
    };

    return (
        <div className="full">
            {/* 전체 토글 버튼 */}
            <div className="button" onClick={handleAllToggle}>버튼</div>

            <div className="table_box">
                {/* 첫 번째 박스 (인덱스 0) */}
                <div className="table_box_parts" onClick={() => handleBoxClick(0)}>
                    <div className="tb_box_p1">dd</div>
                    <div className="tb_box_p2">
                        {/* 개별 상태가 true이거나 전체 상태가 true일 때 'on' 클래스 부여 */}
                        <div className={`tb_box_p1_1 ${boxStates[0] || allOn ? 'on' : ''}`}>가림</div>
                        <div className='tb_box_p1_2'>공개</div>
                    </div>
                </div>

                {/* 두 번째 박스 (인덱스 1) */}
                <div className="table_box_parts" onClick={() => handleBoxClick(1)}>
                    <div className="tb_box_p1">dd</div>
                    <div className="tb_box_p2">
                        <div className={`tb_box_p1_1 ${boxStates[1] || allOn ? 'on' : ''}`}>가림</div>
                        <div className='tb_box_p1_2'>공개</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
