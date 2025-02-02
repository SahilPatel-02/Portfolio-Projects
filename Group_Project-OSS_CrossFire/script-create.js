// NCR Create sections
document.addEventListener('DOMContentLoaded', function () {
const ncrSections = document.querySelectorAll('.ncrSection');

ncrSections.forEach(section => {
    const ncrSectionTitle = section.querySelector('.ncrSection-title')
    const ncrSectionForm = section.querySelector('.ncrSection-form')
    
    ncrSectionTitle.addEventListener('click', function() {
        console.log('clicked');
        section.classList.toggle("active");
    })
})
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('print-btn').addEventListener('click', function() {
        const path = "pdf/summary.pdf";
        const printWindow = window.open(path, '_blank');
        printWindow.addEventListener('load', function() {
          printWindow.print();
        });
    });
  })






// For Saving a form.
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelectorAll("#ncr-form");


    form.forEach(element => {
        const saveButton = element.querySelector(".btnSave");

        element.addEventListener("input", function () {
            
            saveButton.style.display = "inline-block"; // Show save button
            });
        });
    });


/*login scripts*/

  function saveRole() {
    const selectedRole = document.getElementById("roleInput").value;
    sessionStorage.setItem('selectedRole', selectedRole);
  }
  
  function loadSelectedRole() {
  
    if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
        sessionStorage.removeItem('selectedRole');
    } 
    else {
        const selectedRole = sessionStorage.getItem('selectedRole');
        const username = sessionStorage.getItem('username');
        if (selectedRole) {
            document.getElementById("roleInput").value = selectedRole;
        }
        if (username) {
            document.getElementById("user").textContent=username }
    }
  }


  
  window.addEventListener("load", loadSelectedRole);


  const loginForm = document.getElementById("login");
const loginButton = document.getElementById("submit");


function validateLogin() {
    const username = loginForm.user.value;
    const password = loginForm.pass.value;

    if(username ==="" && password===""){
        alert("You must input a username and password");
        return;
    }
    else if (username === "Admin" && password === "1234") {
        alert("You have successfully logged in.\nWelcome\n" + username);
        sessionStorage.setItem('selectedRole', 'Administrator');
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('password', password);
        window.location.href = "ncr.html";
    } 
    else if (username !== "Admin") {
        alert("Username is incorrect");
    } 
    else if (password !== "1234") {
        alert("Incorrect Password");
    }
 
};

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    validateLogin();
});


document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault(); 
        validateLogin(); 
    }
});


function logout() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('password');
    sessionStorage.removeItem('selectedRole');
    window.location.href = "login.html"; 
}

