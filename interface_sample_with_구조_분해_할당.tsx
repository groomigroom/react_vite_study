interface Groomi {
  name: string;
  age: number;
};

interface Groomi2 extends Groomi {
  role?: string;
  live: string;
};

function App() {
  const data: Groomi2 = { name: "구름이", age: 3, live: "구름이 집" };
  const data2: Groomi2 = { name: "구름멍멍", age: 4, role: "집 지키기", live: "구름이 집" };

  const { name, age, live } = data;
  const { name: name2, age: age2, role: role2, live: live2 } = data2;
  // :은 구조 분해 할당에서 새로운 변수에다가 담는다는 의미

  return (
    <div>
      {name}
      {age}
      {live}
      <p>{name2} {age2} {role2} {live2}</p>
    </div>
  );
}

export default App
