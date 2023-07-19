let yearsIsValid = false
let monthIsValid = false
let daysIsValid = false


let form = document.querySelector(".form-calc")
form.addEventListener("submit", function(event){
    event.preventDefault()

    let dayInput = document.getElementById("day")
    let days =dayInput.value
    let mounthInput = document.getElementById("month")
    let mounth =mounthInput.value
    let yearInput = document.getElementById("year")
    let years =yearInput.value


    const currentDate = new Date()
    let  inputDate = new Date(years, mounth -1, days);

    let resultMiliseconds = currentDate - inputDate
    let resultDate = new Date(resultMiliseconds);
    let resultYears = Math.floor((resultMiliseconds) / 1000/60/60/24/365)


    if (isNaN(inputDate.valueOf())){
        yearInput.classList.add("error")
        mounthInput.classList.add("error")
        dayInput.classList.add("error");
      
}
else{yearInput.classList.remove("error")
mounthInput.classList.remove("error")
dayInput.classList.remove("error");}


    let resultMounth = resultDate.getMonth();
    let resultDays = resultDate.getDate();

    let pErrorYear = document.getElementById("p-error_year")
    let textErrorYear = document.getElementById("error-year")

    if(!yearInput.value){
        yearInput.classList.add("error")
        pErrorYear.classList.add("error-label")
        textErrorYear.hidden = false;
        textErrorYear.innerHTML = "This field is required"
        yearsIsValid = false
    }
    else if (inputDate.getFullYear() > currentDate.getFullYear()){
        yearInput.classList.add("error")
        pErrorYear.classList.add("error-label")
        textErrorYear.hidden = false
        textErrorYear.innerHTML = "Must be in the past"
        yearsIsValid = false
    }
    else {
        yearInput.classList.remove("error");
        pErrorYear.classList.remove("error-label");
        textErrorYear.hidden = true;
        yearsIsValid = true
    }
// ---------------------------
    let pErrorMonth = document.getElementById("p-error_month")
    let textErrorMonth = document.getElementById("error-month")

    if(!mounthInput.value){
        mounthInput.classList.add("error")
        pErrorMonth.classList.add("error-label")
      
        textErrorMonth.hidden = false
        textErrorMonth.innerHTML = "This field is required"
        monthIsValid = false
    }
    else if (mounth > 12){
        mounthInput.classList.add("error")
        pErrorMonth.classList.add("error-label")
        textErrorMonth.innerHTML = "Must be a valid month"
        textErrorMonth.hidden = false
        monthIsValid = false
    }
    else {
        mounthInput.classList.remove("error");
        pErrorMonth.classList.remove("error-label");
        textErrorMonth.hidden = true;
        monthIsValid = true
    }
// ---------------------------
    let pErrorDay = document.getElementById("p-error_day")
    let textErrorDay = document.getElementById("error-day")
    if(!dayInput.value){
        dayInput.classList.add("error")
        pErrorDay.classList.add("error-label")
        textErrorDay.hidden = false
        textErrorDay.innerHTML = "This field is required"
        daysIsValid = false
    }
   else if ((days > 31)
   || ( days >30 && mounthInput.value != 1 && mounthInput.value != 3 && mounthInput.value != 5 && mounthInput.value != 7 && mounthInput.value != 8 && mounthInput.value != 10 && mounthInput.value != 12)
   || (days >29 && mounthInput.value == 2)) {
        dayInput.classList.add("error")
        pErrorDay.classList.add("error-label")
        textErrorDay.hidden = false 
        textErrorDay.innerHTML = "Must be a valid day"

        daysIsValid = false   
    } else {
        dayInput.classList.remove("error");
        pErrorDay.classList.remove("error-label");
        textErrorDay.hidden = true;
        daysIsValid = true
    }
   
    let outYears = document.getElementById("out-years")
    let outMounth = document.getElementById("out-month")
    let outDays = document.getElementById("out-days")
    
        if (yearsIsValid && monthIsValid && daysIsValid){
        outYears.innerHTML = resultYears
        outMounth.innerHTML = resultMounth
        outDays.innerHTML = resultDays
    }
    else {
        outYears.innerHTML = "--"
        outMounth.innerHTML = "--"
        outDays.innerHTML = "--"
    }


});
