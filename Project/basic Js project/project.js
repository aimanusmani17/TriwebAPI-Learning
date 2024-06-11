let my_user = null;

const block_one = document.getElementById("block_one");
const block_two = document.getElementById("block_two");
const block_three = document.getElementById("block_three");
const block_four = document.getElementById("block_four");

const pro_user = document.getElementById("pro_user");

const btn_add_user = document.getElementById("btn_add_user");
const btn_delete_user = document.getElementById("btn_delete_user");

const btn_move_to_one = document.getElementById("btn_move_to_one");
const btn_move_to_two = document.getElementById("btn_delete_two");
const btn_move_three = document.getElementById("btn_delete_three");
const btn_move_four = document.getElementById("btn_move_four");

const btnMoveToOne = document.getElementById("btn_move_to_one");
const btnMoveToTwo = document.getElementById("btn_move_to_two");
const btnMoveThree = document.getElementById("btn_move_to_three");
const btnMoveFour = document.getElementById("btn_move_to_four");

function addUserToProject() {
  if (my_user == null) {
    my_user = document.createElement("div");

    // add some class for styling
    my_user.className = "my_user";

    //  /add id for good control from anywhere
    my_user.setAttribute("id", "my_user");

    //value from input box
    my_user.innerHTML = pro_user.value;

    pro_user.disabled = true;
    btn_add_user.disabled = true;
    btn_delete_user.disabled = false;

    block_one.append(my_user);
  }
}

function deleteUserFromProject() {
  if (my_user != null) {
    my_user.remove();

    pro_user.disabled = false;
    btn_add_user.disabled = false;
    btn_delete_user.disabled = true;
    pro_user.value = "";
    my_user = null;
  }
}

function moveToOne() {
  alert("hello");
  if (my_user != null) {
    block_one.append(my_user);
  }
}

function moveToTwo() {
  if (my_user != null) {
    block_two.append(my_user);
  }
}

function moveToThree() {
  if (my_user != null) {
    block_three.append(my_user);
  }
}

function moveToFour() {
  if (my_user != null) {
    block_four.append(my_user);
  }
}

btn_add_user.addEventListener("click", addUserToProject);
btn_delete_user.addEventListener("click", deleteUserFromProject);

btnMoveToOne.addEventListener("click", moveToOne);
btnMoveToTwo.addEventListener("click", moveToTwo);
btnMoveThree.addEventListener("click", moveToThree);
btnMoveFour.addEventListener("click", moveToFour);
