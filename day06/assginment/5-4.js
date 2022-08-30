let arr = ["1080px", "$100", "+200", "60kg", "6m", "-15"];
console.log(removeChar(arr));

function removeChar(arr){
    const result = arr;

    /**
     * 1. 맨 앞자리는 + , - , [1-9] 까지의 숫자만 올 수 있다.
     * 2. 그 이외에는 [0-9] 까지의 숫자만 올 수 있다.
    */
    const regex = /^[^0]\d*/;
    for (let i = 0; i < result.length; i++) {
        result[i] = result[i].replace(regex, "");
    }

    return result;
}
