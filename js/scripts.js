// The page should prompt the user to enter their current age. -->
// If the user is too young to vote, they should see different information than if the user is old enough to legally vote. -->
// Minors should be offered links to websites where they may learn about the voting process and age requirements. -->
// Those old enough to vote should be offered links to websites to register to vote, locate their nearest polling location/ballot dropbox is, or list when upcoming elections will take place. -->

$(document).ready(function() {
  let age = parseInt(prompt("How old are you?"));

  if (age >= 18) {
    $("#vote").show();
  } else {
    $("#under-18").show();
  } 
  
  if (age) {
    $("input#age").val();
  } else {
    alert('Please enter your age.');
  }
  // let age = parseInt(prompt("How old are you?"));
  // }
    event.preventDefault();
  });