
var donorsArray=[]
donorsArray=JSON.parse(localStorage.getItem('donorKey'))


// for(i=0;i<donors.length;i++){
//     var instanceFromStorage=donors[i];
//     var instanceFromConsractor=Donar.all[i];

//     instanceFromConsractor.name=instanceFromStorage.name;
//     instanceFromConsractor.bloodType=instanceFromStorage.bloodType;
//     instanceFromConsractor.location=instanceFromStorage.location;
//     instanceFromConsractor.age=instanceFromStorage.age;
//     instanceFromConsractor.mail=instanceFromStorage.mail;
// }

var container=document.getElementById('donorInfo');
function render(event){
    // event.preventDefault();
    for (i=0;i<donorsArray.length;i++){
        
     
        var instanceDonor=donorsArray[i];
        
        var li = document.createElement('li');
        
        container.appendChild(li);
        li.textContent=instanceDonor.name+' '+instanceDonor.bloodType+' '+instanceDonor.location+' '+instanceDonor.age;
        
    }
    
}

var rendClick=document.getElementById('clickId')
console.log('rendClick : ', rendClick);

// rendClick.addEventListener('click',render)

render();



