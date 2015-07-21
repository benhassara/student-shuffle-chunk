var students = [];

function grabStudents(argument) {
  var htmlColl = document.getElementsByTagName("tr");
  var out = [];
  for (var i = 1; i < htmlColl.length; i++) {
    var name = htmlColl[i].children[0].firstChild.innerHTML;
    var email = htmlColl[i].children[2].firstChild.innerHTML;
    // var github = htmlColl[i].children[3].firstChild.innerHTML;
    var github = "githubTest";
    var student = createStudent(name, email, github);
    out.push(student);
  }
  return out;
}

function createStudent(name, email, github) {
  var student = {};
  student.name = name;
  student.email = email;
  student.github = github;

  return student;
}

function shuffle(students) {
  var wrk = students.slice(0);
  var shuffled = [];
  while (wrk.length > 0) {
    if (wrk.length === 1) {
      shuffled.push(wrk[0]);
      break;
    }
    var i = Math.floor(Math.random() * wrk.length);
    shuffled.push(wrk.splice(i, 1)[0]);
  }
  return shuffled;
}

function chunk(array, num) {
  // num is the size of each chunk
  //array is the shuffled array of students
  //returns an array of grouped students, each group is an array
  var out = [];
  if (array.length % num === 0) {
    for (var i = 0; i < array.length; i += num) {
      out.push(array.slice(i, (i + num)));
    }
  }
  return out;
}

function genArray() {
  for (var i = 0; i < 30; i++) {
    students.push(createStudent("Bruce Wayne", "not_batman@gmail.com", "thebat"));
  }
}
