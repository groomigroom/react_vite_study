import './App.css'

interface User {
  readonly name: String;
  age: number;
  hobby: String;
  favorite?: String;
  //물음표 써놓으면 필수 속성이 아님.
}

let user: User = {
  name: '김구름',
  age: 9,
  hobby: '잠자기'
}

//user.name = "김구름이";
//readonly면 위와 같이 값 수정 불가능

console.log(user.name);
console.log(user.hobby);

function App() {

  return (
    <>

    </>
  )
}

export default App

//https://www.youtube.com/watch?v=OIMPLNICzoc&list=PLZKTXPmaJk8KhKQ_BILr1JKCJbR0EGlx0&index=3
//3분 52초부터
