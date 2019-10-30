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

// function Maps(lat,lng) {
//     this.lat=lat,
//     this.lng=lng,
//     Maps.all.push(this)
// }
// Maps.all=[];

// new Maps(32,35.8)
var choosenLocation = Donar.all[Donar.all.length - 1].location;
console.log('loo : ', choosenLocation);

var firstC = {
    // lat:32., lng: 35.8
};

var secondC = {

};


if (choosenLocation == 'Amman') {
    firstC = {
        lat: 32.016879, lng: 35.865915
    };
    secondC = {lat: 32.007552, lng: 35.874755

    }
}

if (choosenLocation == 'Irbed') {
    firstC = {
        lat: 32.501506, lng:35.994234
    };
    secondC = {lat: 32.551559, lng: 35.851633

    }
} if (choosenLocation == 'Ajloon') {
    firstC = {
        lat: 32.334291, lng: 35.766939
    };
    secondC = {lat: 32.327621, lng: 35.750320

    }
} if (choosenLocation == 'Jarash') {
    firstC = {
        lat: 32.277037, lng: 35.904311
    };
    secondC = {lat: 32.283825, lng: 35.897219

    }
} if (choosenLocation == "Zarqa'a") {
    firstC = {
        lat: 32.351516, lng: 36.180467
    };
    secondC = {lat: 32.066817, lng: 36.097182

    }
} if (choosenLocation == 'Assalt') {
    firstC = {
        lat: 32.035802, lng: 35.734541
    };
    secondC = {lat: 32.047059, lng: 35.720207

    }
} if (choosenLocation == 'AlKarak') {
    firstC = {
        lat: 31.186639, lng: 35.701639
    };
    secondC = {lat: 31.187392, lng: 35.704627

    }
} if (choosenLocation == 'Tafilah') {
    firstC = {
        lat: 30.825769, lng: 35.587891
    };
    secondC = {lat: 30.834637, lng: 35.613056

    }
} if (choosenLocation == "Ma'an") {
    firstC = {
        lat: 30.189902, lng: 35.707246
    };
    secondC = {lat: 30.197758, lng: 35.737613

    }
} if (choosenLocation == 'Aaba') {
    firstC = {
        lat: 29.557083, lng: 35.002566
    };
    secondC = {lat: 29.572039, lng: 35.018014

    }
} if (choosenLocation == 'AlMafraq') {
    firstC = {
        lat: 32.344013, lng: 36.197896
    };
    secondC = {lat: 32.351516, lng: 36.180467

    }
}


