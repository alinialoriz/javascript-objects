console.log("connected");


//create objects using object constructor 

var student = new Object ();

student.name = 'Alinia';
student.gender = 'Female';
student.yearOfBirth = 1996;
student.course = 'MICT';
student.calcAge = function (yearNow) {
    age = yearNow - student.yearOfBirth;
    console.log (age);
};

//create objects usign object literal {}

var hsStudent = {

    name: 'Andrei',
    gender: 'Male',
    yearOfBirth: 1999,
    course: 'Aviation',
    calcAge: function (yearNow) {
        age = yearNow - hsStudent.yearOfBirth;
        console.log (age);
    }
};

//create objects using 'this' template

function aStudent (name, gender, yearOfBirth, course) {
    this.fName = name;
    this.sex = gender;
    this.byear = yearOfBirth;
    this.degree = course;
    this.calcAge = function (yearNow) {
        age = yearNow - this.byear;
        console.log (age);
    }
}

var kayeStudent = new aStudent ('Kaye', 'Female', 1997, 'Interior Design');