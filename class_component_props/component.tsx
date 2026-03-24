import {Component} from 'react';

export type ClassComponentProps = {
    href: string
    text: string
}

export default class ClassComponent extends Component<ClassComponentProps> {
    render(){
        const {href, text} = this.props
        return (
            <li>
                <a href={href}>
                    <p>{text}</p>
                </a>
            </li>
        )
    }
}

/*
React에서 props는 Properties의 줄임말로, 부모 컴포넌트가 자식 컴포넌트에게 데이터를 전달할 때 사용하는 읽기 전용(불변성) 객체입니다. 컴포넌트 간의 데이터 흐름을 단방향으로 유지하며, 데이터를 기반으로 동적인 UI를 렌더링하고 컴포넌트를 재사용하는 데 필수적인 핵심 개념입니다.

이 코드는 **React + TypeScript**로 작성된 *클래스형 컴포넌트*입니다. 하나씩 쉽게 풀어볼게요.

---

## 1. import

```tsx
import {Component} from 'react';
```

* React에서 `Component` 클래스를 가져옵니다.
* 이걸 기반으로 클래스형 컴포넌트를 만듭니다.

---

## 2. Props 타입 정의

```tsx
export type ClassComponentProps = {
    href: string
    text: string
}
```

* 이 컴포넌트가 받을 **props의 타입**을 정의한 것
* 즉, 부모 컴포넌트에서 반드시 아래 두 값을 넘겨줘야 합니다:

  * `href`: 문자열 (링크 주소)
  * `text`: 문자열 (표시할 텍스트)

---

## 3. 클래스 컴포넌트 정의

```tsx
export default class ClassComponent extends Component<ClassComponentProps> {
```

* `Component<ClassComponentProps>`
  → 이 컴포넌트는 위에서 정의한 props 타입을 사용한다는 의미

---

## 4. render 메서드

```tsx
render(){
    const {href, text} = this.props
```

* `this.props`에서 `href`와 `text`를 꺼내서 사용

---

## 5. JSX 반환

```tsx
return (
    <li>
        <a href={href}>
            <p>{text}</p>
        </a>
    </li>
)
```

렌더링 결과:

```html
<li>
  <a href="(href 값)">
    <p>(text 값)</p>
  </a>
</li>
```

즉:

* `<li>` 안에
* `<a>` 링크가 있고
* 그 안에 `<p>`로 텍스트를 보여줌

---

## 6. 사용 예시

이 컴포넌트는 이렇게 쓸 수 있습니다:

```tsx
<ClassComponent href="https://example.com" text="클릭하세요" />
```

👉 결과:

* "클릭하세요"라는 텍스트가 보이고
* 클릭하면 `https://example.com`으로 이동

---

## 핵심 정리

이 컴포넌트는:

* **링크 목록 아이템 하나를 만드는 컴포넌트**
* props로 받은 `href`와 `text`를 이용해서
* `<li><a><p>` 구조를 렌더링함


*/
