function deleteData() {

    var id = document.getElementById("Id").value;

    fetch("https://timoschessl-restapi-mongodb.herokuapp.com/delete/" + id,{
        method: "DELETE"
    })
        .then(result => {
            console.log(result)
            result.text().then(text => { document.getElementById("showData").value = text })
        }
        )

}