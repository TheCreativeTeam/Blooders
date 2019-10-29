Donar.all = [];

function Donar(name, bloodType, location, age, email) {
    this.name = name,
        this.bloodType = bloodType,
        this.location = location,
        this.age = age,
        this.email = email,
        Donar.all.push(this)
}


var donorsArray = []
donorsArray = JSON.parse(localStorage.getItem('donorKey'))


for (i = 0; i < donorsArray.length; i++) {

    var donorInfo = donorsArray[i];
    new Donar(donorInfo.name, donorInfo.bloodType, donorInfo.location, donorInfo.age, donorInfo.email);


}




Hospital.all = [];
function Hospital(name, location, type, quantity, email) {
    this.name = name,
        this.location = location,
        this.type = type,
        this.quantity = quantity,
        this.email = email,
        Hospital.all.push(this)
}


var demands = [];
demands = JSON.parse(localStorage.getItem('hospitalKey'));


for (var i = 0; i < demands.length; i++) {

    var hospitalInfo = demands[i];
    new Hospital(hospitalInfo.name, hospitalInfo.bloodType, hospitalInfo.location, hospitalInfo.age, hospitalInfo.email);





}



// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: -34.397, lng: 150.644},
//     zoom: 8
//   });
// }


var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: new google.maps.LatLng(32,56.7),
    mapTypeId: 'terrain'
  });

 
}

// Loop through the results array and place a marker for each
// set of coordinates.
window.eqfeed_callback = function(results) {
  for (var i = 0; i < results.features.length; i++) {
    var coords = results.features[i].geometry.coordinates;
    var latLng = new google.maps.LatLng(coords[1],coords[0]);
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
  }
}


// function hospitalLocation() {
// if()
// }


