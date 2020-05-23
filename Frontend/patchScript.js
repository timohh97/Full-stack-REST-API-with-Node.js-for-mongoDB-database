function patchData() {

    var Id = document.getElementById("Id").value;
    var firstNameV = document.getElementById("firstName").value;
    var lastNameV = document.getElementById("lastName").value;
    var ageV = document.getElementById("age").value;
    var birthdayV = document.getElementById("birthday").value;
    var jobV = document.getElementById("job").value;
    var descriptionV = document.getElementById("description").value;


    fetch("https://timoschessl-restapi-mongodb.herokuapp.com/patch/"+Id, {
        method: 'PATCH', 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            
            firstName: firstNameV,
            lastName: lastNameV,
            age:  ageV,
            birthday: birthdayV,
            job: jobV,
            description: descriptionV
        })
        
    })
        .then(result => {
            console.log(result)
            result.text().then(text => { document.getElementById("showData").value = text })
        })


}