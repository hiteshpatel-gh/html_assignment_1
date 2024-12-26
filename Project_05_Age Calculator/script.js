let today = new Date();
let btn = document.getElementById("submit");

function run(){

    let input = document.getElementById("dob").value;
    // we use new date() convert string into date
    let DOB = new Date(input);

    let year = today.getFullYear() - DOB.getFullYear();
    let month = today.getMonth() - DOB.getMonth();
    let date = today.getDate() - DOB.getDate();

    if(month < 0){
        year--;
        month += 12;
    }
    if(date <0 ){
        month--;
        date += 30;
          
    }

    let result = document.getElementById('result');
    result.innerHTML = ` ${year} years , ${month} months , ${date} days`;
    // document.write(` ${year} years , ${month} months , ${date} days `)
}

btn.addEventListener("click" , run);