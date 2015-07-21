var students = [];

function readCSV(filename) {
  // read CSV data, spit out string
  var fileText = "";
  var file = new XMLHttpRequest();
  file.open('GET', filename, false);
  file.onreadystatechange = function() {
    if (file.readyState === 4) {
      // var reader = new FileReader();
      fileText = file.responseText;
      // fileText = reader.readAsText(file.response);
    }
  };
  file.send(null);
  return fileText;
}

function grabStudents(argument) {
  // body...
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
  // body...
  var student = {};
  student.name = name;
  student.email = email;
  student.github = github;

  return student;
}

function shuffle(students) {
  // body...
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
  var out = [];
  if (array.length % num === 0) {
    for (var i = 0; i < array.length; i += num) {
      out.push(array.slice(i, (i + num)));
    }
  }
  return out;
}
