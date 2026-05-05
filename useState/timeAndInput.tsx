import { type ChangeEvent, useState } from 'react';
/*
type ChangeEvent는 리액트(React)와 타입스크립트(TypeScript)를 함께 사용할 때 React.ChangeEvent`는 폼 요소(input, textarea, select 등)의 값이 변경될 때 발생하는 이벤트 객체의 타입을 정의하는 데 사용됩니다.단순한 자바스크립트 이벤트가 아니라, 리액트가 래핑한 합성 이벤트(SyntheticEvent)의 일종입니다.1. React.ChangeEvent의 의미역할: 사용자가 입력 필드에 값을 입력하거나 선택을 변경할 때(onChange), 해당 이벤트 객체(e)가 어떤 구조를 가지고 있는지 명시합니다.제네릭 <T>: ChangeEvent는 어떤 HTML 요소에서 발생한 이벤트인지 구체적으로 지정해야 합니다. 예를 들어, input 요소라면 React.ChangeEvent<HTMLInputElement>를 사용합니다.장점: TypeScript 환경에서 이벤트 객체 내부의 속성(e.target.value 등)에 안전하게 접근할 수 있도록 자동완성과 타입 체크를 제공합니다.
*/

const heavyWork = () => {
  return ['김김구름', '구구르미'];
};

function App() {
  const [time, setTime] = useState(1);

  const handleClick = () => {
    let newTime;
    if (time >= 12) {
      newTime = 1;
    } else {
      newTime = time + 1;
    }
    setTime(newTime);
  };

  const [names, setNames] = useState(() => {
    return heavyWork();
  });
  const [input, setInput] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    //이벤트가 발생한 요소(target)의 현재 입력값(value)을 가져옵니다.
  };

  const handleUpload = () => {
    setNames((prevState) => {
      //setNames 안에서 (prevState) => ...처럼 콜백 함수를 사용하는 이유는 상태 업데이트의 "안전성"과 "최신성"을 보장하기 위해서입니다.
      return [input, ...prevState];
      //React TSX에서 return [input, ...prevState]; 코드는 주로 useState 훅의 함수형 업데이트(functional update) 내에서 사용되며, "기존 상태 배열(prevState)의 모든 요소를 유지하면서, 그 앞에 새로운 항목(input)을 추가한 새로운 배열을 반환"하는 의미입니다.
    });
  };



  return (
    <div>
      <span>현재 시각: {time}시</span>
      <button onClick={handleClick}>Update</button>
      <input type="text" onChange={handleInputChange} />
      <button onClick={handleUpload}>Upload</button>
      {names.map((name, idx) => {
        //React(TSX)에서 변수.map()은 배열 데이터를 기반으로 UI 요소(JSX/TSX)를 반복적으로 렌더링(리스트 렌더링)할 때 사용하는 가장 핵심적인 자바스크립트 내장 함수입니다.

        return <p key={idx}>{name}</p>;
      })}
    </div>
  )
}

export default App;
