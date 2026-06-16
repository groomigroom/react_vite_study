interface UnderModuleProps {
    groomi: number;
}

export default function UnderModule({ groomi }: UnderModuleProps) {
    //({ groomi }: UnderModuleProps) 문법은 리액트(React)와 타입스크립트(TypeScript)에서 "부모가 보내준 객체(Props) 안에서 groomi라는 알맹이만 쏙 빼서 쓰고, 그 객체의 타입은 UnderModuleProps이다"라는 뜻입니다.
    return (
        <div>
            <p>{groomi}</p>
        </div>
    );
};
