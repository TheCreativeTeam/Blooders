'use strict'
var mapArray = [];

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

var locationDonor

function submitHandler(event) {
    event.preventDefault();


    var donorName = event.target.name.value;

    var donorBlood = event.target.type.value;

    var donorLocation = event.target.location.value;

    var donorAge = event.target.age.value;
    var donorEmail = event.target.email.value;

    locationDonor = donorLocation;

    if (donorAge < 18) {
        alert('You are under 18')
    }
    else {

        var newDonor = new Donar(donorName, donorBlood, donorLocation, donorAge, donorEmail);
        // Donar.all.push(newDonor);

        localStorage.setItem('donorKey', JSON.stringify(Donar.all));

        if (locationDonor == 'Amman') {


        }
    }
    return locationDonor;
}


form.addEventListener('submit', submitHandler);

var ll = Donar.all[Donar.all.length - 1].location



var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: firstC,
        zoom: 10
    }


    );
    var marker = new google.maps.Marker({ position: firstC, map: map });
    var marker = new google.maps.Marker({ position: secondC, map: map });

}

