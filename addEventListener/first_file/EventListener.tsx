document.getElementById('root')?.addEventListener('click', (e: Event) => {
    const { isTrusted, target, bubbles } = e
    console.log('mouse click occurs.', isTrusted, target, bubbles)
})
document.getElementById('root')?.addEventListener('click', (e: Event) => {
    const { isTrusted, target, bubbles } = e
    console.log('mouse click also occurs.', isTrusted, target, bubbles)
})

export default function EventListener() {
    return (
        <div>
            EventListener
        </div>
    )
}

/*
1. 코드 구조 분석
document.getElementById('root')?: ID가 'root'인 HTML 요소를 찾습니다. 뒤에 붙은 ? (Optional Chaining)는 해당 요소가 존재하지 않을 경우 에러를 내는 대신 실행을 멈추라는 뜻입니다.
.addEventListener('click', ...): 해당 요소에서 '클릭' 이벤트가 발생했을 때 실행할 함수를 연결합니다.
(e: Event) => { ... }: 이벤트 객체(e)를 매개변수로 받는 화살표 함수입니다. TypeScript 타입으로 Event가 지정되었습니다.
2. 출력되는 데이터의 의미
콘솔에 찍히는 세 가지 속성은 다음과 같습니다:
isTrusted:
true: 실제 사용자가 마우스로 직접 클릭했을 때.
false: 코드(element.click())로 강제 발생시킨 클릭일 때.
target: 클릭된 가장 안쪽의 요소가 무엇인지 알려줍니다.
bubbles: 이 이벤트가 부모 요소들로 전달(버블링)되는 성질을 가졌는지 여부입니다. (클릭 이벤트는 보통 true입니다.)
*/
