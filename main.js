var students = [];

$(function(){

  //batman array
  genArray();

  $('#btn-go').on('click', function(){

    var $cards = $('.card-student');
    var size = $('#dropd').val();
    var grouped = chunk(shuffle(students), parseInt(size));

    $('#firstRow').empty();
    for (var i = 0; i < grouped.length; i++) {
      var newRow = $('<div class="row well">');
      for (var a = 0; a < grouped[i].length; a++) {
        newRow.append($(createCard(document.getElementsByClassName('container')[0], grouped[i][a])));
      }
      $('.container').append(newRow);
    }


  });

});

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

function createCard(parent, student) {
  //parent is the element to add data to
  var newCard = document.createElement('div');
  var data = linkify(student);
  var pic = $('<img class="img-circle img-card" src="bruce.png">');
  $(newCard).append(pic);
  console.log("linkify: ", data);
  // var name = document.createElement('a');
  // name.innerText = student.name;
  // var email = document.createElement('a');
  // email.innerText = student.email;
  // var github = linkify(student.github);
  for (var i = 0; i < data.length; i++) {
    var wrap = document.createElement('div');
    wrap.appendChild(data[i]);
    console.log(wrap);
    newCard.appendChild(wrap);
  }

  // newCard.appendChild(name);
  // newCard.appendChild(email);
  // newCard.appendChild(github);


  newCard.className = 'col-xs-5 col-xs-offset-1 card-student';

  parent.appendChild(newCard);
}

function linkify(student, el) {
  //prop is a property of student obj
  //!!!only for github right now!!!
  var out = [];
  for (var prop in student) {
    var linkedProp = document.createElement('a');
    linkedProp.innerText = student[prop];
    out.push(linkedProp);
  }
  // var link = document.createElement('a');
  // link.href = "https://github.com/" + prop;
  // link.innerText = prop;
  // return link;
  return out;
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
  // array is the shuffled array of students
  // returns an array of grouped students, each group is an array
  var wrk = array.slice(0);
  var out = [];
  if (wrk.length % num === 0) {
    for (var i = 0; i < wrk.length; i += num) {
      out.push(wrk.slice(i, (i + num)));
    }
  }
  else {
    var numLeft = wrk.length % num;
    var leftovers = wrk.splice(wrk.length - (numLeft + 1), numLeft);
    for (var a = 0; a < wrk.length; a += num) {
      out.push(wrk.slice(a, (a + num)));
    }
    for  (var b = 0; b < numLeft; b++) {
      out.sort(function(a, b){return a.length - b.length;});
      out[0].push(leftovers[b]);
    }
  }
  return out;
}

function genArray() {
  for (var i = 0; i < 29; i++) {
    students.push(createStudent("Bruce Wayne", "not_batman@gmail.com", "thebat"));
  }
}
