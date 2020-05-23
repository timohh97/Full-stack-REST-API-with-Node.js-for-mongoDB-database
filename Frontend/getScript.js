function getData() {

    var id = document.getElementById("Id").value;
    if(id.length==0)
    {
        alert("Please enter an id!")
    }
    else{

    try{
    fetch("https://timoschessl-restapi-mongodb.herokuapp.com/get/" + id)
        .then(result => {
            console.log(result)
            result.text().then(text => {document.getElementById("showData").value=text})
        })
    }
    catch(error)
    {
        console.log(error)
        alert("Get request not successful.")
    }
    }
}

function getAllData() {

    fetch("https://timoschessl-restapi-mongodb.herokuapp.com/get")
    .then(result => {
        console.log(result)
        result.text().then(text => {document.getElementById("showData").value=text})
    })

}