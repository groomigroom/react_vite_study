// export default function App () {
//   const texts = [<p key="one">hello</p>, <p key="two">world</p>];
//   return (
//     <div>
//       {texts}
//     </div>
//   )
// }
// #####

const items = ["goo", "goorem", "googooeee"];

export default function App() {
  return (
    <div>
      {items.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}
