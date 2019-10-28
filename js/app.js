'use strict'

function Donar(name, bloodType, location, age, mail) {
    this.name = name,
        this.bloodType = bloodType,
        this.location = location,
        this.age = age,
        this.mail = mail
    Donar.all.push(this)
}
Donar.all = [];




function addElement(tagName, container, text) {
    var element = document.createElement(tagName);
    container.appendChild(element);
    if (text) {
        element.textContent = text;
    }

    return element;
}







function submitHandler(event) {
    event.preventDefault();


    var donorName = event.target.name.value;

    var donorBlood = event.target.bloodType.value;

    var donorLocation = event.target.location.value;

    var donorAge = event.target.age.value;

    var newDonor = new Donar(donorName, donorBlood, donorLocation, donorAge);
    Donar.all.push(newDonor);


    if (donorAge < 18) {
        alert('You are under 18')
    }
    else {

        localStorage.setItem(JSON.stringify(Donar.all));
        renderToHospital();

    }
}



var form = document.getElementById('donor');

form.addEventListener('submit', submitHandler);



function renderToHospital() {
    var container = document.getElementById('donorInfo');

    for (var i = 0; i < Donar.all.length; i++)
        var donarInstance = Donar.all[i];
    var li = document.createElement('li');

    container.appendChild(li);
    li.textContent = donarInstance.name + ' ' + donarInstance.bloodType + ' ' + donarInstance.location + ' ' + donarInstance.age;
}



////////////////////////////////////////////////////////////////////

