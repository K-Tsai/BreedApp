function getDogImage(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson, breed))
    .catch(error => ('Something went wrong, please try again later.'));
}

function displayResults(responseJson, breed) {
    console.log(responseJson.message);
    
    if (responseJson.message === "Breed not found") {
        $(".results").append(`<p>Breed is not found, please try again.<\p>`);
    } else {
        $(".results").append(`<img src = "${responseJson.message}" class = results-img>`);
    }

    $('.results').removeClass('hidden');
      
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        const breed = $('.breedInput').val();
        $(".results").empty();
        getDogImage(breed);
    });
}

function logResponse() {
    watchForm();
}

$(logResponse);