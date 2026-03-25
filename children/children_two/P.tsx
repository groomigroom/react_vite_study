import type { FC, ReactNode } from 'react';

export type PProps = {
    children?: ReactNode
}
const P: FC<PProps> = props => {
    const { children } = props
    return <p children={children} />
}

export default P;

/*
React(TypeScript 환경)에서 export type은 타입 정의(Type Alias)나 인터페이스(Interface)를 다른 파일에서 재사용할 수 있도록 외부에 공개(내보내기)하는 명명된 내보내기(Named Export) 방식입니다. 주로 컴포넌트의 Props 구조, API 응답 데이터 타입 등을 별도 파일로 분리하여 관리할 때 사용됩니다. 

핵심 의미와 특징:
타입 재사용: 한 곳에서 정의한 타입을 여러 컴포넌트나 파일에서 import하여 일관된 데이터 구조를 유지합니다.
Named Export: export default와 달리 이름 그대로 내보내므로, 가져올 때 { } (중괄호)를 사용해야 합니다.
명확한 구조: 데이터 형식이 복잡할 때 타입을 별도로 내보내어 코드의 가독성과 유지보수성을 높입니다. 

사용 예시:
typescript
// types.ts - 타입 정의 파일
export type User = {
  id: number;
  name: string;
};

// Profile.tsx - 사용하는 파일
import type { User } from './types'; // type 키워드를 붙여서 import 권장

const Profile = ({ user }: { user: User }) => {
  return <div>{user.name}</div>;
};

#####
children?: ReactNode는 TypeScript 기반 React에서 컴포넌트가 자식 요소(JSX, 문자열, 숫자 등)를 선택적으로(?) 받을 수 있음을 의미하며, React가 렌더링할 수 있는 가장 넓은 범위의 타입(ReactNode)을 자식으로 허용하겠다는 설정입니다. 
1. 주요 특징 및 구성
children: 컴포넌트 사이에 위치한 내용(예: <Layout>내용</Layout>)을 컴포넌트 내부에서 받아들일 때 사용하는 특수 props입니다.
? (Optional): 이 Props가 필수가 아님을 의미합니다. 컴포넌트에 자식이 없어도 에러가 나지 않습니다.
ReactNode: React에서 렌더링할 수 있는 모든 것을 포괄하는 타입입니다.
JSX.Element (컴포넌트)
string, number (텍스트)
boolean, null, undefined (렌더링 안 됨)
위 요소들의 배열 
2. 왜 사용하나요?
유연성: 컴포넌트 내부의 자식 요소를 고정하지 않고, 다양한 형태(문자열, 다른 컴포넌트, 배열 등)로 전달받을 수 있어 재사용성이 높아집니다.
타입 안정성: React에서 제공하는 정확한 타입 정의(@types/react)를 사용하여 런타임 에러를 방지합니다. 

3. 예시 코드 (TypeScript)
tsx
import React, { ReactNode } from 'react';

// Wrapper 컴포넌트는 children을 선택적으로(Optional) 받음
interface WrapperProps {
  children?: ReactNode; // <--- 요기!
}

const Wrapper = ({ children }: WrapperProps) => {
  return <div className="wrapper">{children}</div>;
};

// 사용 예시
const App = () => (
  <Wrapper>
    <h1>안녕하세요</h1>
    <p>이것은 children입니다.</p>
  </Wrapper>
);
4. ReactNode vs ReactElement vs JSX.Element 
ReactNode: 텍스트, 숫자, null 등을 포함한 가장 넓은 범위 (가장 안전).
ReactElement: JSX 형식(<div>, <Component/>)만 허용.
JSX.Element: ReactElement의 구체적인 타입 정의. 

보통 children을 정의할 때는 ReactNode가 권장됩니다.
*/
