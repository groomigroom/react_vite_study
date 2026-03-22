// export default function App () {
//   const texts = [<p key="one">hello</p>, <p key="two">world</p>];
//   return (
//     <div>
//       {texts}
//     </div>
//   )
// }
// #####

// const items = ["goo", "goorem", "googooeee"];

// export default function App() {
//   return (
//     <div>
//       {items.map((item) => (
//         <p key={item}>{item}</p>
//       ))}
//     </div>
//   );
// }

// #####

export default function App() {
  const texts = ['hello', 'world'].map((text, index) =>
  <p key={index}>{text}</p>)

  return (
    <div>
      {texts}
    </div>
  )
}

/*
React에서 map() 함수는 배열 데이터를 기반으로 HTML 요소(JSX) 목록을 반복적으로 렌더링할 때 사용하는 핵심 내장 함수입니다. 기존 배열을 수정하지 않고, 각 요소를 새로운 JSX 컴포넌트로 변환하여 새로운 배열을 반환하며, 데이터에 따라 UI를 동적으로 생성하는 데 필수적입니다. 
*/
