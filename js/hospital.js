

var hospitalForm = document.getElementById('hospital');



hospitalForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = event.target.name.value;
    var location = event.target.location.value;
    var type = event.target.type.value;
    var quantity = event.target.quantity.value;
    var email = event.target.email.value;
    var newHospital = new Hospital(name, location, type, quantity, email)
    console.log(newHospital);
    // console.log('Hospital.all : ', Hospital.all);
    localStorage.setItem('hospitalKey', JSON.stringify(Hospital.all));
    // newHospital.render();
});

//  var waitingList = document.getElementById('list');


//  Hospital.prototype.render = function () {
//     waitingList.innerHTML=' '
//     for (var i = 0; i < Hospital.all.length; i++) {
//         // console.log('list',waitingList)
//         var instance = Hospital.all[i];
//         // console.log('ins',instance)
//         var headeer = document.createElement('h1');
//         waitingList.appendChild(headeer);
//         headeer.textContent = "There are patients in " + instance.name + " hospital need " + instance.quantity + " units of " + instance.type + " blood type.";
//     }
//  }