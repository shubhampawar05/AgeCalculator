let subBtn = document.getElementById("calbtn");
let input = document.getElementById("input");
let yearchange = document.getElementById("yearchange");



subBtn.addEventListener("click",(e)=>{
    if (!input.value){
        alert("Plese Enter Your Birth-Date...");
        return;
    }
    let bday = new Date(input.value);
    let bdayMili = bday.getTime();
    let today = new Date().getTime();

    console.log(bday.getTime());
    console.log(today);
    let differece  = today-bdayMili;
    console.log(differece);
    let yearMilisecond = 365*24*60*60*1000
    let year = Math.floor(differece/yearMilisecond);
    console.log(year);
yearchange.innerText =`${year} `
})