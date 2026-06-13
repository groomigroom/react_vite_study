import React, { useState } from 'react';

// input들의 타입 정의
interface FormState {
  cloud: string;
  kimCloud: string;
}

function App() {
  // 1. 여러 input 값을 하나의 객체 상태로 관리
  const [form, setForm] = useState<FormState>({
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
