'use strict'


var donar1 = new Donar('ahmad', 'O+', 'Amman', 36, 'ahmad_lkki@gmail.com')
var form = document.getElementById("donor");
console.log('form : ', form);

// console.log('container : ', container);



function submitHandler(event) {
    event.preventDefault();


    var donorName = event.target.name.value;

    var donorBlood = event.target.type.value;

    var donorLocation = event.target.location.value;

    var donorAge = event.target.age.value;
    var donorEmail = event.target.email.value;

    

    if (donorAge < 18) {
        alert('You are still young, keep your blood.');
    }
    else {

        var newDonor = new Donar(donorName, donorBlood, donorLocation, donorAge, donorEmail);
        // Donar.all.push(newDonor);

        localStorage.setItem('donorKey', JSON.stringify(Donar.all));

        alert('Thank you for saving a life.')

      
    }
    
}


form.addEventListener('submit', submitHandler);





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

