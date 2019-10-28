
var donors=[]
donors=JSON.parse(localStorage.getItem('donorKey'))

var container=document.getElementById('donorInfo');
function render(event){
    // event.preventDefault();
    for (i=0;i<donors.length;i++){
        
     
        var instanceDonor=donors[i];
        
        var li = document.createElement('li');
        
        container.appendChild(li);
        li.textContent=instanceDonor.name+' '+instanceDonor.bloodType+' '+instanceDonor.location+' '+instanceDonor.age;
        
    }
    
}

var rendClick=document.getElementById('clickId')
console.log('rendClick : ', rendClick);

// rendClick.addEventListener('click',render)

render();



