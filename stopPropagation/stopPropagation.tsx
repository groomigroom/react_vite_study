import type { SyntheticEvent } from 'react';

export default function StopPropagation() {
    const onDivClick = () => console.log('click 이벤트 버블이 <div>에서 일어납니다.');
    const onButtonClick = (e: SyntheticEvent) => {
        console.log('마우스 클릭이 버튼에서 나왔고, call stopPropagtion이 작동합니다..');
        e.stopPropagation();
    }
    return (
        <div onClick={onDivClick}>
            <p>StopPropagation</p>
            <button onClick={onButtonClick}>저를 클릭 하면은 stopPropagtion</button>
        </div>
    )
}

/*
제공해주신 코드는 리액트에서 이벤트 버블링(Event Bubbling)을 막는 방법을 보여주는 전형적인 예시입니다. 각 부분의 역할을 쉽게 설명해 드릴게요.
1. 주요 코드 해석
e.stopPropagation(): 이 코드의 핵심입니다. 이벤트가 발생했을 때 부모 요소로 전달되는 것(버블링)을 강제로 중단시킵니다.
onButtonClick: 버튼을 클릭했을 때 실행됩니다. e.stopPropagation()이 호출되었기 때문에, 클릭 이벤트는 여기서 멈추고 부모인 div로 전달되지 않습니다.
onDivClick: div 영역을 클릭했을 때 실행됩니다. 하지만 버튼을 클릭했을 때는 위에서 흐름을 끊었기 때문에 이 함수는 실행되지 않습니다. 
2. 실행 흐름 (클릭 시나리오)
버튼을 클릭하면:
콘솔에 "마우스 클릭이 버튼에서 나왔고..."가 출력됩니다.
e.stopPropagation() 때문에 이벤트가 위로 올라가지 못합니다.
결과적으로 onDivClick은 실행되지 않습니다.
p 태그나 div의 빈 공간을 클릭하면:
버튼이 아니므로 onButtonClick은 실행되지 않습니다.
이벤트가 부모인 div로 전달되어 콘솔에 "click 이벤트 버블이 <div>에서 일어납니다."가 출력됩니다. 
3. 기술적 포인트
SyntheticEvent: 리액트가 브라우저 간의 이벤트 호환성을 위해 제공하는 합성이벤트 타입입니다.
*/
