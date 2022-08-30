const createUser = (id, name) => ({id, name});
console.log(createUser(1,'이효라'));


let theater = {
    store: '건대점',
    titles: ['어벤져스', '겨울왕국', '스파이더맨', '라이온킹', '알라딘'],

    showMoveList() {
        this.titles.forEach(
            title => console.log(this.store + ' : ' + title)
        );
    }
}

theater.showMoveList();

