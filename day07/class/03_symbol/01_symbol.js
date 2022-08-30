/* 01_iterable (이터러블)
ES6 이전의 순회 가능한 데이터 컬렉션, 배열, 문자열, 유사 배열 객체, DOM 컬렉션 등은 통일 된 규약 없이 for문, for...in문, forEach 메서드 등 다양한 방법으로 순회 할 수 있었다.
ES6에서는 순회 가능한 데이터 컬렉션을 이터레이션 프로토콜을 준수하는 이터러블로 통일하여 for...of문, 스프레드 문법, 배열 디스트럭처링 할당의 대상으로 사용할 수 있도록 일원화했다.
*/

let range = {
    from: 1,
    to : 5
};


// TypeError : range is not iterable
for (let num of range) {
    console.log(num);
}