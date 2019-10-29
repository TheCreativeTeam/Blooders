'use strict'

var donar1 = new Donar('ahmad', 'O+', 'Amman', 36, 'ahmad_lkki@gmail.com')
var form = document.getElementById("donor");
console.log('form : ', form);

// console.log('container : ', container);
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

    var donorBlood = event.target.type.value;

    var donorLocation = event.target.location.value;

    var donorAge = event.target.age.value;
    var donorEmail = event.target.email.value;


    if (donorAge < 18) {
        alert('You are under 18')
    }
    else {

        var newDonor = new Donar(donorName, donorBlood, donorLocation, donorAge, donorEmail);
        // Donar.all.push(newDonor);

        localStorage.setItem('donorKey', JSON.stringify(Donar.all));

        // returnDate();

    }
}





form.addEventListener('submit', submitHandler);








