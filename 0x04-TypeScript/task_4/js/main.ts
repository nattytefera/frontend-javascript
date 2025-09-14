/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Teacher.ts" />

namespace Subjects {
  // Export a Teacher object with experienceTeachingC = 10
  export const cTeacher: Teacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 10,
  };

  // Create and export constants for each subject
  export const cpp = new Cpp();
  export const java = new Java();
  export const react = new React();
}

// --- Cpp Subject ---
console.log("C++");
Subjects.cpp.setTeacher = Subjects.cTeacher;
console.log(Subjects.cpp.getRequirements());
console.log(Subjects.cpp.getAvailableTeacher());

// --- Java Subject ---
console.log("Java");
// Subjects.java.setTeacher = Subjects.cTeacher;
// console.log(Subjects.java.getRequirements());
// console.log(Subjects.java.getAvailableTeacher());
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// --- React Subject ---
console.log("React");
Subjects.react.setTeacher = Subjects.cTeacher;
console.log(Subjects.react.getRequirements());
console.log(Subjects.react.getAvailableTeacher());
