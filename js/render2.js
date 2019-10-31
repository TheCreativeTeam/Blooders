

var container2 = document.getElementById('hos');
console.log('container : ', container2);
function render2(event) {
    // event.preventDefault();



    for (var i = 0; i < demands.length; i++) {


        var instanceDemands = demands[i];

        var li = document.createElement('li');

        container2.appendChild(li);
        li.textContent = "There are patient(s) in " + instanceDemands.name + ' hospital ' + " in " + instanceDemands.location + " need " + instanceDemands.quantity + ' unit(s) of  ' + instanceDemands.type + "  blood type ";

    }

}

var rendClick = document.getElementById('clickId')
console.log('rendClick : ', rendClick);

// rendClick.addEventListener('click',render)

render2();



