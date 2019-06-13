// CODE here for your Lambda Classes

class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location} `;
    }
}


class Instructor extends Person {
    constructor(instructorAttributes) {
    super(instructorAttributes)
    this.specialty = instructorAttributes.specialty;
    this.favLanguage = instructorAttributes.favLanguage;
    this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}` 
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }

}

 class Student extends Person {
    constructor(studentAttributes) {
    super(studentAttributes)
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
     }
     listsSubjects() {
        return `${this.name}'s favorite subjects are ${suparada.favSubjects}`
     }
     PRAssignment(subject) {
         return `${this.name} has submitted a PR for ${subject}`
     }
     sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
     }
 }

  class ProjectManager extends Instructor {
    constructor(pmAttributes) {
    super(pmAttributes)
    this.gradClassName = pmAttributes.gradClassName;
    this.favInstructor = pmAttributes.favInstructor;
      }
      standUp(channel) {
          return `${this.name} announces to ${channel}, @channel standy times!​​​​​`
      }
      debugsCode(student, subject ) {
          return `${this.name} debugs ${student.name}'s code on ${subject}`
      }
  }

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    subject: 'JavaScript'
  });

  const suparada = new Student({
    name: 'Suparada',
    location: 'Tulsa, OK',
    age: 27,
    previousBackground: 'Education',
    favSubjects: ['Html', 'CSS', 'JavaScript']
    
  });

  const brock = new ProjectManager({
    name: 'Brock',
    gradClassName: 'CS1',
    favInstructor: 'Sean',
    channel: 'Slack'
    
  });


  console.log(fred.speak())
  console.log(fred.demo("JavaScript"))
  console.log(fred.grade(suparada, "JavaScript"))
  console.log(suparada.listsSubjects())
  console.log(suparada.PRAssignment("CSS"))
  console.log(suparada.sprintChallenge("JavaScript"))
  console.log(brock.standUp("Slack"))
  console.log(brock.debugsCode(suparada, "JavaScript"))

