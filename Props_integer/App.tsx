import UnderModule from "./UnderModule";


function App() {

  let groomi = 1;

  return (
    <>
      <div>
        <UnderModule groomi={groomi} />
        {/* groomi= (하위 모듈에서 부를 이름) */}
      </div>
    </>
  )
}

export default App
