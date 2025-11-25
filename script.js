function searchJobs() {
    let input = document.getElementById("search").value.toUpperCase();
    let jobs = document.getElementById("jobList").getElementsByTagName("li");

    for (let i = 0; i < jobs.length; i++) {
        let text = jobs[i].textContent || jobs[i].innerText;
        jobs[i].style.display = text.toUpperCase().includes(input) ? "" : "none";
    }
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let position = document.getElementById("position").value;
    let resume = document.getElementById("resume").value;

    if (name === "" || email === "" || phone === "" || position === "" || resume === "") {
        alert("All fields are required!");
        return false;
    }

    if (!email.includes("@")) {
        alert("Invalid email format!");
        return false;
    }

    if (phone.length !== 10) {
        alert("Phone number must be 10 digits!");
        return false;
    }

    document.getElementById("successMsg").innerHTML = 
        "Application submitted successfully!";

    return false; 
}
