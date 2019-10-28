'use strict'
Donar.all=[];

function Donar(name,bloodType,location,age,mail) {
    this.name = name,
    this.bloodType=bloodType,
    this.location=location,
    this.age=age,
    this.mail=mail,
    Donar.all.push(this)
}

var donar1=new Donar('ahmad','O+','Amman',36,'ahmad_lkki@gmail.com')
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


    




        function submitHandler(event){
            event.preventDefault();


            var donorName=event.target.name.value;

            var donorBlood=event.target.type.value;

            var donorLocation=event.target.location.value;

            var donorAge=event.target.age.value;
            
            
            
            if (donorAge<18){
                alert('You are under 18')
            }
            else{
                
                var newDonor= new Donar(donorName,donorBlood,donorLocation,donorAge);
                // Donar.all.push(newDonor);
                
                 localStorage.setItem('donorKey',JSON.stringify(Donar.all));
                // renderToHospital ();
                // returnDate();

            }
        }



    

    form.addEventListener('submit', submitHandler);

 
    
    

    function renderToHospital(){

for(var i=0;i<Donar.all.length;i++){

        var donarInstance=Donar.all[i];
        var li = document.createElement('li');
        
        container.appendChild(li);
        li.textContent=donarInstance.name+' '+donarInstance.bloodType+' '+donarInstance.location+' '+donarInstance.age;
}
    }

// function returnDate(){    
//  var donorsArray =JSON.parse(localStorage.getItem('donorKey'));
//  if(donorsArray){
// for(var i=0;i<donorsArray.length;i++){

//     var instanceFromStorage=donorsArray[i];
//     var instanceFromConsractor=Donar.all[i];

//     // instanceFromConsractor.push(instanceFromStorage);
//     instanceFromConsractor.name=instanceFromStorage.name;
//     instanceFromConsractor.bloodType=instanceFromStorage.bloodType;
//     instanceFromConsractor.location=instanceFromStorage.location;
//     instanceFromConsractor.age=instanceFromStorage.age;
//     instanceFromConsractor.mail=instanceFromStorage.mail;
// }
// }
// }