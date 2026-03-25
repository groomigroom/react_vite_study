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
*/
