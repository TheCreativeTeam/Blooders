

    var demands=[]
    demands=JSON.parse(localStorage.getItem('hospitalKey'))
    
    console.log('demands : ', demands);
    
    
    var container2=document.getElementById('hos');
    console.log('container : ', container2);
    function render2(event){
        // event.preventDefault();
        for (var i=0 ; i<demands.length ;i++){
            
         
            var instanceDemands=demands[i];
            
            var li = document.createElement('li');
            
            container2.appendChild(li);
            li.textContent=instanceDemands.name+' '+instanceDemands.bloodType+' '+instanceDemands.location+' '+instanceDemands.age;
       
        }
        
    }
    
    var rendClick=document.getElementById('clickId')
    console.log('rendClick : ', rendClick);
    
    // rendClick.addEventListener('click',render)
    
    render2();
    


