(function () {

    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText = '';
    const responseContainer = document.querySelector('#response-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;

        $.ajax({
        	url: `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`,
        	headers: {'Authorization': 
        		'Client-ID c9c7834c3c62289626fe85278787c56b16cd81d2c38a2c0675e234290ac0a8c2'}

        	}).done(addImage);



        });

        // const unsplashRequest = new XMLHttpRequest();
        // unsplashRequest.open('GET', `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`);
        // unsplashRequest.setRequestHeader('Authorization', 'Client-ID c9c7834c3c62289626fe85278787c56b16cd81d2c38a2c0675e234290ac0a8c2');

        // unsplashRequest.onload = addImage;
        // unsplashRequest.send();

    function addImage(data) {
        let htmlContent = '';

        if (data && data.results && data.results[0]) {
            const firstImage = data.results[0];
            htmlContent = `<figure>
        	<img src="${firstImage.urls.regular}" alt="${searchedForText}">
        	<figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
        	</figure>`;
        } else {
            htmlContent = '<div class="error-no-image">No images available</div>';
        }

        responseContainer.insertAdjacentHTML('afterbegin', htmlContent);
    }

})();
