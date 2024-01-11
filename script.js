document.addEventListener("DOMContentLoaded", function () {
    // Populate day dropdown
    var dayDropdown = document.getElementById("day");
    for (var i = 1; i <= 31; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.text = i;
        dayDropdown.add(option);
    }

    // Populate month dropdown
    var monthDropdown = document.getElementById("month");
    var months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    for (var i = 0; i < months.length; i++) {
        var option = document.createElement("option");
        option.value = i + 1;
        option.text = months[i];
        monthDropdown.add(option);
    }

    // Populate year dropdown (adjust the range as needed)
    var yearDropdown = document.getElementById("year");
    var currentYear = new Date().getFullYear();
    for (var i = currentYear; i >= 1900; i--) {
        var option = document.createElement("option");
        option.value = i;
        option.text = i;
        yearDropdown.add(option);
    }
});

function calculateAge() {
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;

    // Validate input
    if (!day || !month || !year) {
        alert("Please select a valid Date of Birth.");
        return;
    }

    // Create a Date object from the input
    var birthDate = new Date(year, month - 1, day);
    var currentDate = new Date();

    // Calculate age
    var age = currentDate.getFullYear() - birthDate.getFullYear();

    // Adjust age if birthday hasn't occurred yet this year
    if (currentDate.getMonth() < birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }

    // Display the result
    document.getElementById("result").innerHTML = "Your age is: " + age + " years";
}
