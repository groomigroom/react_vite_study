import React, { useState } from 'react';

// input들의 타입 정의
interface FormState {
  cloud: string;
  kimCloud: string;
}

function App() {
  // 1. 여러 input 값을 하나의 객체 상태로 관리
  const [form, setForm] = useState<FormState>({
    /*
    useState<FormState>는 폼(Form)의 상태(입력값, 에러 등)를 저장하는 변수의 데이터 타입을 FormState라는 특정 인터페이스나 타입으로 제한하겠다는 의미입니다.
    이를 통해 얻을 수 있는 핵심 이점과 구조는 다음과 같습니다.1. 코드 의미 분석const [form, setForm] = useState<FormState>(initialState);
    useState: 컴포넌트의 상태(State)를 관리하는 React 훅입니다.<FormState>: TypeScript 제네릭(Generic) 문법입니다. 
    form 변수가 가질 수 있는 데이터 구조를 개발자가 직접 정의한 FormState 타입으로 명시합니다.form: 현재 폼의 상태 데이터 객체.
    setForm: form의 값을 업데이트하는 함수.2. 왜 이렇게 작성하나요? (타입스크립트의 역할)만약 <FormState>를 쓰지 않으면 
    TypeScript는 useState의 초기값(initialState)을 보고 타입을 자동 추론합니다. 그러나 개발자가 명시적으로 타입을 지정하면 
    다음과 같은 강력한 이점이 있습니다.
    자동 완성 및 오타 방지: form.useName처럼 존재하지 않는 키값을 입력하면 TypeScript가 에러를 띄워 실수를 방지합니다.
    안전한 데이터 처리: FormState에 정의된 타입(예: string, number 등)에 맞는 데이터만 입력되도록 강제하여 런타임 에러를 줄입니다.
    */
    cloud: '',
    kimCloud: '',
  });

  // 2. name 속성을 활용한 단 하나의 통합 핸들러 함수
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value, // 동적으로 key 값을 매칭
    }));
  };

  // 3. 파생 변수(Derived State) 계산: 렌더링될 때마다 자동으로 계산됨
  let result = 0;
  if (form.cloud === "구름이") result++;
  if (form.kimCloud === "김구름이") result++;

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="cloud" // 객체의 key와 일치시킴
          value={form.cloud}
          onChange={handleChange}
        />
        <input
          type="text"
          name="kimCloud" // 객체의 key와 일치시킴
          value={form.kimCloud}
          onChange={handleChange}
        />
      </form>
      <p>결과: {result}</p>
    </>
  );
}

export default App;

/*
제시해주신 코드는 Vite + React + TypeScript 환경에서 입력창(Input)의 값이 바뀔 때 상태(State)를 동적으로 업데이트하는 함수입니다.
한 줄씩 명확하게 풀어 설명해 드릴게요.
💡 한 줄씩 해석
typescript
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {


AI 모드
전체
제품
시각적으로 일치하는 항목
제시하신 React TypeScript 코드에서 e:는 함수 매개변수(parameter)인 e에 대한 타입 지정(Type Annotation)을 의미합니다.
TypeScript는 변수나 매개변수 이름 뒤에 콜론(:)을 붙여 해당 데이터가 어떤 종류(타입)인지를 명시합니다.
📌 구성 요소별 상세 의미
• e: 이벤트(Event) 객체를 나타내는 매개변수 이름입니다. (개발자 마음대로 변경 가능):: "이 변수의 타입은 다음과 같다"라고 선언하는 구분자입니다.React.ChangeEvent<HTMLInputElement>: e가 가져야 할 구체적인 타입의 이름입니다.
💡 한 줄 요약
"이 handleChange 함수가 실행될 때 들어오는 입력값 e는 반드시 React.ChangeEvent<HTMLInputElement> 형태여야만 한다"라고 컴퓨터에게 알려주는 것입니다.

───

코드를 사용할 때는 주의가 필요합니다.
• 해석: HTMLInputElement(텍스트 입력창)의 값이 변경되는 이벤트(ChangeEvent)가 발생했을 때 실행되는 handleChange라는 화살표 함수를 선언합니다.
typescript
const { name, value } = e.target;

코드를 사용할 때는 주의가 필요합니다.
• 해석: 이벤트가 발생한 입력창(e.target) 객체에서 name 속성(어떤 입력창인지 구분하는 이름)과 value 속성(현재 입력된 텍스트 값)을 구조 분해 할당으로 추출하여 변수에 담습니다.
• ##### target
typescript
setForm((prev) => ({

코드를 사용할 때는 주의가 필요합니다.
• 해석: form 상태를 변경하는 함수(setForm)를 실행하며, 기존의 상태 값(prev)을 매개변수로 받아와 안전하게 다음 상태를 계산합니다. (소괄호 ()는 객체를 즉시 반환함을 의미합니다.)
typescript
...prev,

코드를 사용할 때는 주의가 필요합니다.
• 해석: 스프레드 연산자(...)를 사용하여 기존 form 객체 안에 있던 기존 데이터(예: 다른 입력창의 값들)를 그대로 복사해 유지합니다.
typescript
[name]: value, // 동적으로 key 값을 매칭

코드를 사용할 때는 주의가 필요합니다.
• 해석: 대괄호 [name] 문법(계산된 프로퍼티 이름)을 사용해 변수 name에 담긴 값(예: 'email', 'password' 등)을 객체의 키(Key)로 사용하고, 거기에 새로 입력된 value 값을 할당합니다.
typescript
})); };

코드를 사용할 때는 주의가 필요합니다.
• 해석: 변경된 새 객체 반환을 마무리하고, setForm 함수와 handleChange 함수의 중괄호를 닫아 종료합니다.
*/
