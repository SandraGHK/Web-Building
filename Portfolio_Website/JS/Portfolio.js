function validateForm() {
    let x = document.forms["Contact_Form"]["Name"].value;
    if (x === "") {
        alert("All fields must be filled out");
        return false;
    }
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}