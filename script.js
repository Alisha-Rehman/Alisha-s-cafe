var form = document.getElementById("contact-form");
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var birthYearInput = document.getElementById("birth-year");
var formMessage = document.getElementById("form-message");
var specialNotes = document.getElementById("special-notes");
var characterCount = document.getElementById("character-count");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    var name = nameInput.value.trim();
    var email = emailInput.value.trim();


    formMessage.textContent = "Thank you for visiting, " + name + "! We will contact you at " + email + ".";

    if (birthYearInput.value.trim() !== "") {

        var birthYear = parseInt(birthYearInput.value);
        var age = 2026 - birthYear;

        if (isNaN(birthYear) || birthYear > 2026 || birthYear < 1900) {
            formMessage.textContent = "Please enter a valid birth year.";
            return;
        }

        if (age <= 25) {
            formMessage.textContent += " You qualify for a student discount.";
        } else if (age >= 60) {
            formMessage.textContent += " You qualify for a senior discount.";
        }
    }
});


var rows = document.querySelectorAll("#menu-table tr[data-category]");

rows.forEach(function(row) {

    row.addEventListener("mouseover", function() {
        row.style.backgroundColor = "#e8d5c4";
    });

    row.addEventListener("mouseout", function() {
        row.style.backgroundColor = "";
    });

});


var themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});


var menuItems = document.querySelectorAll(".menu-item");
var total = document.getElementById("total");

menuItems.forEach(function(item) {

    item.addEventListener("change", function() {

        var sum = 0;

        menuItems.forEach(function(item) {

            if (item.checked) {
                sum += parseFloat(item.getAttribute("data-price"));
            }

        });

        total.textContent = "Total: $" + sum;
    });

});


var readMoreButton = document.getElementById("read-more-button");
var extraText = document.getElementById("extra-text");

readMoreButton.addEventListener("click", function() {

    if (extraText.style.display === "none") {

        extraText.style.display = "block";
        readMoreButton.textContent = "Read Less";

    } else {

        extraText.style.display = "none";
        readMoreButton.textContent = "Read More";

    }

});


var filterButtons = document.querySelectorAll(".filter-button");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        var category = button.getAttribute("data-category");

        rows.forEach(function(row) {

            if (category === "all" || row.getAttribute("data-category") === category) {
                row.style.display = "table-row";
            } else {
                row.style.display = "none";
            }

        });

    });

});


var openingStatus = document.getElementById("opening-status");
var currentHour = new Date().getHours();

if (currentHour >= 8 && currentHour < 20) {

    openingStatus.textContent = "We are Open!";
    openingStatus.style.color = "green";

} else {

    openingStatus.textContent = "Closed - Open at 8 AM";
    openingStatus.style.color = "red";

}


specialNotes.addEventListener("input", function() {

    var remaining = 100 - specialNotes.value.length;

    characterCount.textContent = remaining + " characters remaining";

});