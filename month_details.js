


window.onload = () =>{
  loadTableDataJAN(January);
  loadTableDataFEB(February);
  loadTableDataMAR(March);
}

let sortDirection = false;

//===========================                       January
let January = [
  { serial:1, name:"Saruj Datta",amount:100, number:"01516******", date:"5/5/2020"},
  { serial:2, name:"Abid Datta",amount:100, number:"01516******", date:"5/5/2020"},
  { serial:3, name:"Roky Datta",amount:100, number:"01516******", date:"5/5/2020"},
  { serial:4, name:"Absar Datta",amount:100, number:"01516******", date:"5/5/2020"},
  { serial:5, name:"Siplob Data",amount:100, number:"01516******", date:"5/5/2020"}
];
function loadTableDataJAN(January){
    const tableBodyJAN = document.getElementById("tableBodyJAN");
    let dataJAN = "";

    for(let jan of January){
      dataJAN += `<tr><td>${jan.serial}</td><td>${jan.name}</td><td>${jan.amount}</td><td>${jan.number}</td><td>${jan.date}</td></tr>`
    }
    console.log(dataJAN);

    tableBodyJAN.innerHTML = dataJAN ;

}

// =================              February
let February = [
  { serial:1, name:"Saruj Datta",amount:100, number:"01516******", date:"5/5/2020"},
  { serial:2, name:"Nayon Datta",amount:100, number:"01516******", date:"5/5/2020"},
  { serial:3, name:"Durjoy Datta",amount:100, number:"01516******", date:"5/5/2020"},
  { serial:4, name:"Nishan Datta",amount:100, number:"01516******", date:"5/5/2020"},
  { serial:5, name:"Abir Data",amount:100, number:"01516******", date:"5/5/2020"}
];
function loadTableDataFEB(February){
    const tableBodyFEB = document.getElementById("tableBodyFEB");
    let dataFEB = "";

    for(let feb of February){
      dataFEB += `<tr><td>${feb.serial}</td><td>${feb.name}</td><td>${feb.amount}</td><td>${feb.number}</td><td>${feb.date}</td></tr>`
    }
    console.log(dataFEB);

    tableBodyFEB.innerHTML = dataFEB ;

}

// =================              March
let March = [
  { serial:1, name:"Saruj Datta",amount:100, number:"01516******", date:"5/5/2020"},
  { serial:2, name:"Nayon Datta",amount:100, number:"01516******", date:"5/5/2020"},
  { serial:3, name:"Durjoy Datta",amount:100, number:"01516******", date:"5/5/2020"},
  { serial:4, name:"Nishan Datta",amount:100, number:"01516******", date:"5/5/2020"},
  { serial:5, name:"Abir Data",amount:100, number:"01516******", date:"5/5/2020"}
];
function loadTableDataMAR(March){
    const tableBodyMAR = document.getElementById("tableBodyMAR");
    let dataMAR = "";

    for(let mar of March){
      dataMAR += `<tr><td>${mar.serial}</td><td>${mar.name}</td><td>${mar.amount}</td><td>${mar.number}</td><td>${mar.date}</td></tr>`
    }
    console.log(dataMAR);

    tableBodyMAR.innerHTML = dataMAR ;

}
