import type {FC} from 'react';

export type ArrowComponentProps = {
    href: string
    text: string
}

const ArrowComponent: FC<ArrowComponentProps> = props => {
    const {href, text} = props
    return (
        <li>
            <a href={href}>
                <p>{text}</p>
            </a>
        </li>
    )
}

export default ArrowComponent

/*
함수형 컴포넌트(Functional Component)의 타입을 정의하는 FC(Function Component) 인터페이스만 명시적으로 가져오겠다는 의미입니다.
:은 타입을 지정한다는 의미.
*/


