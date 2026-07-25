type Groomi = {
  name: string,
  age: number
};

function App() {
  const data: Groomi = { name: "구름이", age: 3 };

  const { name, age } = data;

  return (
    <div>
      {name}
      {age}
    </div>
  );
}

export default App
