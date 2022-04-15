function filterStore() {
    var input, filter, location, locationName, h1, i, txtValue;
    input = document.getElementById("search_Filter");
    filter = input.value.toUpperCase();
    location = document.getElementsByClassName("location");
    locationName = document.getElementsByClassName("location-name");
    for (i = 0; i < location.length; i++) {
        txtValue = locationName[i].textContent || locationName[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            location[i].style.display = "";
        } else {
            location[i].style.display = "none";
        }
    }
}