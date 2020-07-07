function login(){
    let fname = document.querySelector("#fname").value;
    let lname = document.querySelector("#lname").value;

    document.querySelector("img").style.display="block";
    document.querySelectorAll("span")[0].innerHTML = fname;
    document.querySelectorAll("span")[1].innerHTML = lname;
}