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
