import ReactDOM from 'react-dom/client'
import * as D from './data'

const children = D.makeArray(10).map((notUsed, index) => (
	<div key={index}>
		<p>{D.randomId()}</p>
		<p>{D.randomName()}</p>
		<p>{D.randomJobTitle()}</p>
		<p>{D.randomSentence()}</p>
		<img src={D.randomAvatar()} width={100} height={100} />
	</div>
))
const rootVirtualDOM = <div>{children}</div>

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(rootVirtualDOM)

/*
data.ts 파일 만들기

./data를 import하고 있으므로 반드시 만들어야 합니다.

예시 (src/data.ts):

export const makeArray = (length: number) => new Array(length).fill(null)

export const randomId = () => Math.random().toString(36).substring(2, 8)
export const randomName = () => "John Doe"
export const randomJobTitle = () => "Frontend Developer"
export const randomSentence = () => "This is a random sentence."
export const randomAvatar = () => "https://via.placeholder.com/100"
4️⃣ HTML에 root div 확인

public/index.html (CRA) 또는 index.html (Vite)에 있어야 함:

<div id="root"></div>
5️⃣ 전체 연결 구조
👉 main.tsx (또는 index.tsx)
import ReactDOM from 'react-dom/client'
import * as D from './data'

const children = D.makeArray(10).map((_, index) => (
  <div key={index}>
    <p>{D.randomId()}</p>
    <p>{D.randomName()}</p>
    <p>{D.randomJobTitle()}</p>
    <p>{D.randomSentence()}</p>
    <img src={D.randomAvatar()} width={100} height={100} />
  </div>
))

const rootVirtualDOM = <div>{children}</div>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(rootVirtualDOM)
*/
