

var container = document.getElementById('donorInfo');
function render(event) {
    // event.preventDefault();
    for (i = 0; i < donorsArray.length; i++) {


        var instanceDonor = donorsArray[i];

        var li = document.createElement('li');

        container.appendChild(li);
        li.textContent = instanceDonor.name + ",s blood type is " + instanceDonor.bloodType + ', and he/she lives in ' + instanceDonor.location+',  his/here email addres is '+instanceDonor.email + " for contacting.";
        // + ", "+ instanceDonor.email + " for contacting" ;

    }

}

var rendClick = document.getElementById('clickId')
console.log('rendClick : ', rendClick);

// rendClick.addEventListener('click',render)

render();



