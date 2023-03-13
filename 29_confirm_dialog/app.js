function deleteData() {
    let result = confirm("Are you sure to delete this data?");
    if (result) {
        console.log("Data has beed deleted");
    }
    else {
        console.log("Cancel delete")
    }
}