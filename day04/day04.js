var grade = '손님';
var authority;

// if문 코드
if (grade === '손님') {
    authority = '글 읽기';
} else if (grade === '일반회원') {
    authority = '글 읽기, 글 쓰기';
} else if (grade === '운영자') {
    authority = '글 읽기, 글 쓰기, 글 삭제';
}

// 3항 연산자 코드

authority = (grade === '손님' ? '글 읽기' : grade === '일반회원' ? '글 읽기, 글 쓰기' : grade === '운영자' ? '글 읽기, 글 쓰기, 글 삭제' : '권한이 없습니다');

console.log(grade + "의 경우 " + authority + " 가 가능합니다.");


// switch 문 코드
var browser = 'Edge';   // 'Chrome', 'Firefox' 등으로 변경해서 테스트

switch (browser) {
    case "Edge":
        console.log("Edge를 사용하고 계시네요!");
        break;
    case "Chrome" || "Firefox" || "Safari" || "Opera":
        console.log('저희 서비스가 지원하는 브라우저를 사용하고 계시네요.');
        break;
    default:
        console.log('현재 페이지가 괜찮아 보이길 바랍니다!');
        break;
}

// while 문 코드
var i = 0;
while (i < 10) {
    console.log('number' + (i+1));
    i++;
}