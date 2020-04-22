function deleteData() {

    var id = document.getElementById("Id").value;

    fetch("http://localhost:2000/delete/" + id)
        .then(result => {
            console.log(result)
        }
        )

}