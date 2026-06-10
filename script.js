const studentForm = document.getElementById("studentForm");


const tableBody = document.querySelector("#studentTable tbody");


studentForm.addEventListener("submit", function(event){

    
    event.preventDefault();

    
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;

    
    const gender = document.querySelector(
        'input[name="gender"]:checked'
    ).value;

    
    const newRow = document.createElement("tr");


    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender}</td>
        <td>${state}</td>
        <td>${country}</td>
    `;


    tableBody.appendChild(newRow);

    
    studentForm.reset();
});