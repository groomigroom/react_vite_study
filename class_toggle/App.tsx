
import { useState } from 'react';

import './App.css'

function App() {
  const [isOn, setIsOn] = useState<boolean>(false);

  // 2. 클릭 이벤트 핸들러 함수
  const handleToggle = () => {
    setIsOn((prev) => !prev); // 이전 상태의 반대값으로 변경 (toggle)
  };

  return (
    <div>
      {/* 3. div1 클릭 시 handleToggle 함수 실행 */}
      <div className="div1" onClick={handleToggle} style={{ cursor: 'pointer' }}>
        클릭하여 div2 토글하기
      </div>

      {/* 4. 상태(isOn)에 따라 클래스명을 동적으로 부여 */}
      <div className={`div2 ${isOn ? 'on' : ''}`}>
        상태에 따라 달라지는 div2
      </div>
    </div>
  )
}

export default App
