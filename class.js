class Student {
  constructor(sId, sName){
    this.id = sId;
    this.name = sName;
    this.school = 'tt';

  }
}


const student1 = new Student(12, 'kh');
const student2 = new Student(45, 'mm');
console.log(student1, student2);