function getData() {

    var id = document.getElementById("Id").value;
    if(id.length==0)
    {
        alert("Get request not successful.")
    }
    else{

    try{
    fetch("http://localhost:2000/get/" + id)
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

    fetch("http://localhost:2000/get")
    .then(result => {
        console.log(result)
        result.text().then(text => {document.getElementById("showData").value=text})
    })

}