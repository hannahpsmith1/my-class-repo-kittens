// requiring our Student module exported from student.js
var Student = require("./student.js");

// constructor function for creating classroom objects
var Classroom = function(profName, roomNum) {
  // this.students will hold all of our student objects

  

  
  // a method that creates a student using our Student constructor.
  // It then pushes the new student object to this.students and updates this.numStudents
  this.addStudent = function(name, favoriteSub, gpa) {




  };
  // this method will tell you how many students are in the class
  this.studentCount = function() {



  };
};

// exporting our Classroom constructor. We will require it in main.js
module.exports = Classroom;
