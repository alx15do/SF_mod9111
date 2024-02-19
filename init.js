
window.onload = function()
{
    let initPerson = personGenerator.getPerson();
    //const persGender = initPerson.gender;
    //console.log("init person: "+persGender);
    //let initPersonFatherName = personGeneratorFatherName.getGender(persGender);
    //initPersonFatherName = personGeneratorFatherName.getPersonFatherName();

    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.lastName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    //document.getElementById('birthYearOutput').innerText = initPerson.year;
    document.getElementById('birthYearOutput').innerText = initPerson.birthDay;
    document.getElementById('fatherNameOutput').innerText = initPerson.fatherName;
    document.getElementById('profOutput').innerText = initPerson.prof;
    
    
    console.log(initPerson);
    //console.log(initPersonFatherName);

    document.getElementById('btnClear').addEventListener('click', function () {
        document.getElementById('firstNameOutput').innerText = "";
        document.getElementById('surnameOutput').innerText = "";
        document.getElementById('genderOutput').innerText = "";
        document.querySelector("#genderOutput+span").innerText = "";
        document.getElementById('birthYearOutput').innerText = "";
        document.getElementById('fatherNameOutput').innerText = "";
        document.getElementById('profOutput').innerText = "";

    });
    document.getElementById('btnRetry').addEventListener('click', function () {
        let  newPers = Object.create(personGenerator);
        initPerson = newPers.getPerson();

        //new personGenerator.getPerson();
        document.getElementById('firstNameOutput').innerText = initPerson.firstName;
        document.getElementById('surnameOutput').innerText = initPerson.lastName;
        document.getElementById('genderOutput').innerText = initPerson.gender;
        //document.getElementById('birthYearOutput').innerText = initPerson.year;
        document.getElementById('birthYearOutput').innerText = initPerson.birthDay;
        document.getElementById('fatherNameOutput').innerText = initPerson.fatherName;
        document.getElementById('profOutput').innerText = initPerson.prof;

    });    
};

