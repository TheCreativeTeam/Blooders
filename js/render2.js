

var container2 = document.getElementById('hos');
function render2(event) {



    for (var i = 0; i < demands.length; i++) {


        var instanceDemands = demands[i];

        var li = document.createElement('li');

        container2.appendChild(li);
        li.textContent = "There are patient(s) in " + instanceDemands.name + ' hospital ' + " in " + instanceDemands.location + " need " + instanceDemands.quantity + ' unit(s) of  ' + instanceDemands.type + "  blood type ";

    }

}

var rendClick = document.getElementById('clickId')


render2();



