class Student {
    
    constructor(name) {
        this.group = 1;
        this.name = name;
    }

    introduce() {
        console.log(`안녕하세요 저는 ${this.group}반 학생 ${this.name} 입니다.`);
    }
}


let student = new Student("유재석");
student.introduce();