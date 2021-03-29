function directiveDisplay() {
    fetch('https://handlers.education.launchcode.org/static/planets.json').then((response) => {
        response.json().then((json) => {
            const destination = document.getElementById('missionTarget');
            let index = Math.floor(Math.random() * 10);
            while (index >= json.length) {
                index = Math.floor(Math.random() * 10);
            }
            if (destination) {
                let html = `<h2>Mission Destination</h2>
                            <ol>
                                <li>Name: ${json[index].name}</li>
                                <li>Diameter: ${json[index].diameter}</li>
                                <li>Star: ${json[index].star}</li>
                                <li>Distance from Earth: ${json[index].distance}</li>
                                <li>Number of Moons: ${json[index].moons}</li>
                            </ol>
                            <img src="${json[index].image}">`;
                destination.innerHTML = html;
            }
            else {
                console.log('401 me some pizza!');
            }
        });
    });
}
function validateForm(preventMouseEventDefault, inputs) {
    prepRequirements(inputs);
    if (inputs.every((item) => item.value !== "")) {
        preventMouseEventDefault.preventDefault();
    }
    else {
        alert('All fields must be filled.');
        preventMouseEventDefault.preventDefault();
    }
    if (typeof inputs[0].value !== "string" || typeof inputs[1].value !== "string") {
        alert('Invalid entry.  Please enter a name.');
        preventMouseEventDefault.preventDefault();
    }
    if (isNaN(Number(inputs[2].value)) || isNaN(Number(inputs[3].value))) {
        alert('Invalid entry.  Please enter a number.');
        preventMouseEventDefault.preventDefault();
    }
}
function prepRequirements(inputs) {
    const display = document.getElementById('faultyItems');
    const h2Status = document.getElementById('launchStatus');
    const liPilot = document.getElementById('pilotStatus');
    const liCoPilot = document.getElementById('copilotStatus');
    const liFuel = document.getElementById('fuelStatus');
    const liMass = document.getElementById('cargoStatus');
    if (display && h2Status && liPilot && liCoPilot && liFuel && liMass) {
        h2Status.innerHTML = 'Shuttle is ready for launch.';
        h2Status.style.color = 'green';
        display.style.visibility = 'hidden';
        liPilot.innerHTML = `Pilot ${inputs[0].value} is a GO for launch and lunch.`;
        liCoPilot.innerHTML = `Co-pilot ${inputs[1].value} is a GO for launch and lunch.`;
        liFuel.innerHTML = 'Fuel level is at optimum capacity for launch.';
        liMass.innerHTML = 'Cargo mass is at optimum capacity for launch.';
        if (inputs.every((item) => item.value !== "")) {
        }
        else {
            h2Status.innerHTML = 'Shuttle not ready for launch!';
            h2Status.style.color = 'red';
        }
        if (typeof inputs[0].value !== "string" || typeof inputs[1].value !== "string") {
            h2Status.innerHTML = 'Shuttle not ready for launch!';
            h2Status.style.color = 'red';
        }
        if (isNaN(Number(inputs[2].value)) || isNaN(Number(inputs[3].value))) {
            h2Status.innerHTML = 'Shuttle not ready for launch!';
            h2Status.style.color = 'red';
        }
        if (Number(inputs[2].value) < 10000) {
            display.style.visibility = 'visible';
            h2Status.innerHTML = 'Shuttle not ready for launch!';
            h2Status.style.color = 'red';
            liFuel.innerHTML = 'Fuel level low!  Launch failure imminent!';
        }
        if (Number(inputs[3].value) > 10000) {
            display.style.visibility = 'visible';
            h2Status.innerHTML = 'Shuttle not ready for launch!';
            h2Status.style.color = 'red';
            liMass.innerHTML = 'High shuttle mass detected!  Launch failure imminent!';
        }
    }
    else {
        console.log('401 me some pizza!');
    }
}
function onSubmit() {
    const submit = document.getElementById('formSubmit');
    const inputs = Array.from(document.getElementsByTagName('input'));
    if (submit) {
        submit.addEventListener('click', (preventMouseEventDefault) => {
            validateForm(preventMouseEventDefault, inputs);
            prepRequirements(inputs);
        });
    }
    else {
        console.log('401 me some pizza!');
    }
}
function slingSushi() {
    directiveDisplay();
    onSubmit();
}
window.onload = slingSushi;