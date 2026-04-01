import type { ChangeEvent } from "react";

export default function OnChange() {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('onChange', e.target.value)
    }
    return <input type="text" onChange={onChange} />
}

/*
제시해주신 코드는 사용자가 입력창(input)에 값을 입력할 때마다 그 내용을 콘솔에 출력하는 간단한 React 컴포넌트입니다.
주요 부분별 해석은 다음과 같습니다:
import type { ChangeEvent } ...: TypeScript에서 제공하는 타입을 가져오는 구문입니다. input 요소의 변경 이벤트인 ChangeEvent 타입을 명확히 지정하기 위해 사용했습니다.
onChange 함수:
e: 발생한 이벤트 객체입니다.
HTMLInputElement: 이 이벤트가 텍스트 입력창에서 일어났음을 TypeScript에 알려줍니다. 덕분에 e.target.value를 안전하게 참조할 수 있습니다.
console.log(...): 사용자가 키보드를 누를 때마다 현재 입력된 전체 문자열을 개발자 도구 콘솔에 찍습니다.
return <input ... />: 실제 화면에 그려질 HTML 요소입니다. onChange={onChange} 설정을 통해 입력값이 바뀔 때마다 위에서 만든 함수가 실행되도록 연결했습니다. 
한 마디로 "입력창에 타이핑하는 대로 콘솔에 보여주는 컴포넌트"라고 보시면 됩니다.

React(TSX)에서 onChange는 사용자가 입력창(input, textarea, select)의 값을 변경할 때마다 즉각적으로 발생하는 이벤트 핸들러입니다. 
1. 주요 특징과 의미
실시간 감지: 순수 HTML의 onchange는 입력 후 포커스를 잃어야 발생하지만, React의 onChange는 글자를 하나 입력하거나 삭제할 때마다 즉시 실행됩니다.
데이터 흐름의 시작점: 사용자가 입력한 새로운 값(e.target.value)을 읽어와 컴포넌트의 상태(State)를 업데이트하는 데 필수적인 도구입니다.
합성 이벤트(SyntheticEvent): 브라우저마다 다른 이벤트 동작을 React가 하나로 통일해 준 객체를 전달받습니다. 
2. TypeScript(TSX)에서의 역할
TSX 파일에서는 onChange에 전달되는 이벤트 객체의 타입을 명확히 정의해야 합니다. 
타입 안전성: ChangeEvent<HTMLInputElement>와 같이 타입을 지정하면, e.target이 반드시 입력창임을 보장받아 자동 완성이나 에러 체크의 도움을 받을 수 있습니다.
실수 방지: 엉뚱한 속성에 접근하거나 존재하지 않는 메서드를 호출하는 실수를 컴파일 단계에서 잡아줍니다.
*/
