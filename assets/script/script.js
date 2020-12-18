// getting all the required elements

const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".toDoList");

inputBox.onkeyup =()=>{
    let userData = inputBox.value; //getting user entered value
    if (userData.trim()  != 0){ 
        addBtn.classList.add("active"); // active the add button

    }else{
        addBtn.classList.remove("active"); //unactive the add button
    }
}


showTasks(); //calling showTask

// if user click on the add button

addBtn.onclick =()=>{
    let userData = inputBox.value; //getting user entered value
    let getLocalStorage = localStorage.getItem; //getting localstorage
    if (getLocalStorage == null){ // if localStorage is null
        listArr=[]; // Creating blank array

    }else{
        listArr = JSON.parse(getLocalStorage); //transforming json string into a js object

    }

    listArr.push(userData); //pushing or adding user data
    localStorage.setItem("New Todo", JSON.stringinfy(listArr)); //transforming js object into JSON string
    showTasks(); //calling showTask

}

function showTasks(){
    let getLocalStorage = localStorage.getItem; //getting localstorage
    if (getLocalStorage == null){ // if localStorage is null
        listArr=[]; // Creating blank array

    }else{
        listArr = JSON.parse(getLocalStorage); //transforming json string into a js object

    }
    let newLiTag ="";listArr.forEach((element, index) => {
newLiTag = '<li> ${element} <span><i class=" bx bx-trash"></i></span>
       </li>';
    });
    todoList.innerHTML=newLiTag;; //adding new li tag inside ul tag
     
}