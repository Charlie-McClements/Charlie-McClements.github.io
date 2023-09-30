var races = ["RACE1", "RACE2", "RACE3", "RACE4", "RACE5"];
var boatNames = ["1", "2"];
var warned = false;
function checkEntry() {
    let psw = document.getElementById("psw");
    let psw2 = document.getElementById("psw-repeat");
    let boatName = document.getElementById("boatName");
    let boatNameExists = false;
    let racesEntered = 0;
    getBoatNames();

    for (let i = 0; i < boatNames; i++) {
        if (boatName.value == boatNames[i].name) {
            boatNameExists = true;
            break;
        }
    }
    for (let i = 0; i < races.length - 1; i++) {
        if (document.getElementById(races[i]).checked) {
            racesEntered++;
        }
    }

    if (psw.value != psw2.value) {
        psw.value = null;
        psw.placeholder = "Passwords Must Be The Same";
        psw2.value = null;
        psw2.placeholder = "Passwords Must Be The Same";
        psw.style.backgroundColor = '#f18a8a6a';
        psw2.style.backgroundColor = '#f18a8a6a';
    }

    else if (boatNameExists == true) {
        boatName.value = null;
        boatName.placeholder = "This Boat Name Has Already Been Entered";
    }

    else if (racesEntered == 0) {
        var div = document.getElementById("raceEntryCheckBoxes");
        if (warned == false) {
            div.innerHTML += "You Must Enter At Least One Race";ss
            warned = true;
        }
    }

    else {
        alert("Entry Successful");
    }
}

function populate() {
    // Get the modal
    var modal = document.getElementById('id01');
    // When the user clicks anywhere outside of the modal, close it

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    for (let i = 0; i < races.length; i++) {
        var div = document.getElementById("raceEntryCheckBoxes");
        var label = document.createElement("label");
        var input = document.createElement("input");
        input.type = 'checkbox';
        input.name = races[i];
        input.id = races[i];
        input.style = 'margin-bottom:15px';
        label.appendChild(input);
        label.innerHTML += races[i] + "</br>";
        div.appendChild(label);
    }
}

function getBoatNames()
{
    const data = fs.readFileSync('./json/data.json');
    const jsonData = JSON.parse(data);
    boatNames = jsonData;
}

window.onload = populate;