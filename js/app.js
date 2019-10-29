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



var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }


      //creating a chart
   var demandData = Hospital.all.length;
   var donorsData = Donar.all.length;
    
    
   var ctx = document.getElementById('chart').getContext('2d');
   var myChart = new Chart(ctx, {
     
      type: 'bar',
      data: {
          labels: ['Donars & Demands'],
          datasets: [{
            
              label: '# of Donors',
              data: [donorsData],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  
              ],
              borderWidth: 2
          },
          {
            label: '# of Demands',
            data: [demandData],
            backgroundColor: [
              'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                
            ],
            borderWidth: 1
        }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
   });
