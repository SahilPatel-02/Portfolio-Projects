// Pagination for NCR Table
document.addEventListener('DOMContentLoaded', function () {
    const itemsPerPage = 15; // Number of items to display per page

    // function to create pagination for each table
    function setupPagination(tableContent) {
        const itemsArray = Array.from(tableContent.getElementsByTagName('tr')).slice(1); // Exclude header
        const totalPages = Math.ceil(itemsArray.length / itemsPerPage);
        let currentPage = 0; // Current page starts at 0
        let pageNum; // Declare pageNum for page count display

        // function to show each page
        function showPage(page) {
            const startIndex = page * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            itemsArray.forEach((item, index) => {
                item.classList.toggle('hidden', index < startIndex || index >= endIndex);
            });
            updatePageCounter(); // update page counter display
        }

        // function to update page counter
        function updatePageCounter() {
            if (pageNum) {
                pageNum.textContent = `Page ${currentPage + 1} out of ${totalPages} pages`;
            }
        }

        // function to create pagination buttons and total page display 
        function createPageButtons() {
            const ncrTable = document.querySelectorAll('.table-content');
            const paginationContainer = document.createElement('div');
            paginationContainer.classList.add('pagination');
            tableContent.appendChild(paginationContainer); // Append to the parent of the tableContent

            // create page counter display
            pageNum = document.createElement("p");
            pageNum.classList.add('pageCount');
            paginationContainer.appendChild(pageNum); // Append to pagination container

            // Create Previous button
            const btnPrevious = document.createElement('button');
            btnPrevious.classList.add('pageButtons');
            btnPrevious.textContent = '<';
            btnPrevious.addEventListener('click', () => {
                if (currentPage > 0) {
                    currentPage--;
                    showPage(currentPage);
                }
            });
            paginationContainer.appendChild(btnPrevious);

            // Create Next button
            const btnNext = document.createElement('button');
            btnNext.classList.add('pageButtons');
            btnNext.textContent = '>';
            btnNext.addEventListener('click', () => {
                if (currentPage < totalPages - 1) {
                    currentPage++;
                    showPage(currentPage);
                }
            });
            paginationContainer.appendChild(btnNext);

            // Initial page display and update counter
            showPage(currentPage);
        }

        createPageButtons(); // Call the function to create pagination buttons
    }

    // Find all tables with class 'table-content' and set up pagination for each
    const tables = document.querySelectorAll('#table-ncr');
    tables.forEach(tableContent => {
        setupPagination(tableContent);
    });
});

// roles js
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
  
  
//   document.getElementById("roleInput").addEventListener("change", saveRole);



// login js script
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
        window.location.href = "index copy.html";
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


