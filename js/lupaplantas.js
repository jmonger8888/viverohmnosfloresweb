function filterPlants() {
    var input, filter, plantContainer, plantCards, plantName, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    plantContainer = document.getElementById('plantContainer');
    plantCards = plantContainer.getElementsByClassName('plant-card');

    for (i = 0; i < plantCards.length; i++) {
        plantName = plantCards[i].getElementsByTagName("h4")[0];
        txtValue = plantName.textContent || plantName.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            plantCards[i].style.display = "";
        } else {
            plantCards[i].style.display = "none";
        }
    }
}