interface PopupProps {
    onClose: () => void;
}
//이 컴포넌트가 부모 컴포넌트로부터 받아야 하는 데이터(Props)의 '설계도(타입)'를 작성하는 것입니다.onClose: () => void;: "이 팝업은 부모로부터 onClose라는 이름의 값을 받아야 하는데, 그 값의 형태는 매개변수가 없고(()) 반환하는 값이 없는(void) 함수여야 한다"라는 뜻입니다.

export default function Popup({ onClose }: PopupProps) {
    return (
        <div>
            <h2>팝업 제목</h2>
            <p>팝업 내용 부분</p>
            {/* 부모에게 받은 onClose 함수를 실행합니다 */}
            <button onClick={onClose}>닫기</button>
        </div>
    );
}

// ({ onClose }: PopupProps) 부분typescript({ onClose }: PopupProps)
// 코드를 사용할 때는 주의가 필요합니다.{ onClose } (구조 분해 할당):
// 원래 리액트에서 부모가 전달한 데이터는 하나의 덩어리 object(예: props)로 들어옵니다.
// 그래서 원래는 props.onClose라고 써야 하지만, 괄호 안에서 { onClose }라고 적어주면
// "전달받은 보따리(props)에서 onClose만 쏙 빼서 바로 변수로 쓰겠다"는 의미가 됩니다.:
// PopupProps(타입 지정): 방금 위에서 쪼갠 그 보따리의 데이터 구조가 아까 우리가 1번에서
// 만든 PopupProps 설계도와 똑같이 생겼음을 보장(타입 체크)하겠다는 뜻입니다.
// 만약 부모가 onClose를 안 보내주거나 다른 타입을 보내면 컴파일 에러를 띄워줍니다.
