let user:object;
//object 타입은 원시 타입(Primitive types)이 아닌 모든 값을 나타냅니다. 즉, 숫자(number), 문자열(string), 불리언(boolean), null, undefined을 제외한 객체, 배열, 함수 등이 모두 object 타입에 해당합니다.
//typescript object 타입 강좌 찾아보기

user = {
name: "구름이",
age: 9
}

console.log(user.name);
//구름이

interface User2 {
    name : string;
    age : number;
    like? : string;
    //TypeScript 인터페이스에서 속성 이름 뒤에 붙는 ?는 '선택적 속성(Optional Property)'을 의미합니다. 의미: 해당 속성이 있어도 되고 없어도 된다는 뜻입니다.
}

let useman : User2 = {
name : "김구름",
age : 9
}

useman.like = "brother";

console.log(useman.name);
//김구름
console.log(useman.like);
//brother

let useman22 : User2 = {
    name : "구름씨",
    age : 1
}

console.log(useman22.name);
//구름씨

//https://www.youtube.com/watch?v=OIMPLNICzoc&list=PLZKTXPmaJk8KhKQ_BILr1JKCJbR0EGlx0&index=3
//2분 16초까지
