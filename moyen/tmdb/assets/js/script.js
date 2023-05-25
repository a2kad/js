let searchInput = document.getElementById('searchInput')
let searchBtn = document.getElementById('searchBtn')
let showFilms = document.getElementById('showFilms')

searchBtn.addEventListener('click', () => {
    console.log(searchInput.value)
    let serchUrl = `https://api.themoviedb.org/3/search/movie?query=${searchInput.value}&include_adult=false&language=fr-FR&page=1`


    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGUzN2Y1YTU4ZTQ3ZGIwMGY4NTkyODU3OWY5MDBmOCIsInN1YiI6IjY0NmUxNjEzMzNhMzc2MDE1OGRjMDRhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.10TTdpPPusGwjBn81duAdGN3P84qd250flrJJOeCyEs'
        }
    }

    fetch(serchUrl, options)
        .then(response => response.json())
        .then(response => {
            showFilms.innerHTML = ''
            response.results.forEach(element => {
                console.log(element)
                showFilms.innerHTML += `
                <div class="col">
                <div class="card m-1" style="width: 18rem;">
                    <img src="https://image.tmdb.org/t/p/original/${element.poster_path}" class="card-img-top"
                        alt="${element.original_title}">
                    <div class="card-body">
                        <h5>${element.original_title}</h5>
                        <p class="card-text">${element.release_date.slice(0, 4)}</p>
                        <p class="card-text">Popularité :</p>
                        <div class="progress" role="progressbar">
                            <div class="progress-bar" style="width: ${Math.round(element.popularity)}%"></div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="ratings">
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <p class="card-text">${Math.round(element.popularity)}/100</p>
                    </div>
                        
                    </div>
                </div>
            </div>
                `
            });
            console.log(response)
        })

        .catch(err => console.error(err))

    function rating(score) {
        let result = 0
        if (score > 0 && score <= 100) {
            result = score / 100
        } else if (score > 100 && score <= 1000) {
            result = score / 1000
        } else if (score > 1000 && score <= 10000) {
            result = score / 10000
        } else {
            result = 0
        }
        // if (result >= 0 && result<= 0.25) {
        //     return 
        // }
    }
})


