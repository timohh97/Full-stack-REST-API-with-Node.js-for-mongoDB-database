function deleteData() {

    var id = document.getElementById("Id").value;

    fetch("http://localhost:2000/delete/" + id,{
        method: "DELETE"
    })
        .then(result => {
            console.log(result)
            result.text().then(text => { document.getElementById("showData").value = text })
        }
        )

}