import { useState } from 'react';

import Popup from './Popup';

const App: React.FC = () => {
  //Function Component의 약자로, React에서 함수형 컴포넌트를 정의할 때 사용하는 타입스크립트(TypeScript) 타입입니다. 리액트 패키지(@types/react)에서 기본적으로 제공합니다.
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);
  return (
    <>
      <div>
        <h1>팝업 테스트</h1>
        <button onClick={openPopup}>팝업 열기</button>
        {isOpen && (
          <Popup onClose={closePopup} />
        )}

      </div>
    </>
  );
};

export default App
