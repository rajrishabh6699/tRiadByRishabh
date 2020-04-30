


function myfunc(){
  var height = document.getElementById("height").value;
  height=height/100;
  var weight = document.getElementById("weight").value;
  var ans = weight/(height*height);
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var name = fname+" "+ lname;
  $("#show").slideDown();
  document.getElementById("name").innerHTML = name;
  document.getElementById("calcans").innerHTML = ans;
}
