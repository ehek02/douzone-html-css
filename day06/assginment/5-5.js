const list = ['기러기', '토마토', '스위스', '인도인', '별똥별', '유재석'];

list.forEach(item => console.log(palindrom(item)));

function palindrom(str) {
    return str.charAt(0) === str.charAt(str.length - 1);
}