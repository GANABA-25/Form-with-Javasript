const myForm = document.querySelector("#my-form");
const FirstNameinpute = document.querySelector("#firstname");
const LastNameinpute  = document.querySelector("#lastname");
const Emailinpute = document.querySelector("#email");
const Ageinpute  = document.querySelector("#age");
const dateinpute  = document.querySelector("#date");
const Phonenumberinpute  = document.querySelector("#number");
const msg = document.querySelector("#msg");
const UserDetail = document.querySelector("#user-detail");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(FirstNameinpute.value === "" || LastNameinpute.value === "" || Emailinpute.value === "" ||  Ageinpute.value === "" || dateinpute.value === "" || Phonenumberinpute.value === ""){
        msg.classList.add("error");
        msg.innerHTML = "Please enter all fields"

        setTimeout(() => msg.remove(), 3000 );
    }else {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`${FirstNameinpute.value} : ${LastNameinpute.value} : ${Emailinpute.value} : ${Ageinpute.value} : ${dateinpute.value } : ${Phonenumberinpute.value }`));

        UserDetail.appendChild(li);

        //CLEAR FIRLDS 
        FirstNameinpute = "";
        LastNameinpute  = "";
        Emailinpute = "";
        Ageinpute  = "";
        dateinpute  = "";
    }
}