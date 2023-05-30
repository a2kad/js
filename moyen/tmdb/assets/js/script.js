let searchInput = document.getElementById('searchInput')
let searchBtn = document.getElementById('searchBtn')
let showFilms = document.getElementById('showFilms')

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGUzN2Y1YTU4ZTQ3ZGIwMGY4NTkyODU3OWY5MDBmOCIsInN1YiI6IjY0NmUxNjEzMzNhMzc2MDE1OGRjMDRhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.10TTdpPPusGwjBn81duAdGN3P84qd250flrJJOeCyEs'
    }
}

fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {
        showFilms.innerHTML = `<div class="alert alert-light" role="alert">
        Nouveaux Films
        </div>`
        response.results.forEach(element => {
            console.log(element)
            showFilms.innerHTML += `
                <div class="col text-center">
                <div class="card mx-auto my-1" style="width: 18rem;">
                ${testPoster(element.poster_path)}
                    <div class="card-body">
                        <h5>${element.original_title}</h5>
                        <p class="card-text">${element.release_date.slice(0, 4)}</p>
                        <p class="card-text">Popularité :</p>
                        
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="ratings">
                            ${rating(element.vote_average)}
                        </div>
                        <p class="card-text">
                        
                        ${element.vote_average}
                        </p>
                    </div>
                        
                    </div>
                </div>
            </div>`
        })

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
                    showFilms.innerHTML = `<div class="alert alert-light" role="alert">
                                            Résultats de la recherche "${searchInput.value}"
                                            </div>`
                    response.results.forEach(element => {
                        console.log(element)
                        showFilms.innerHTML += `
                <div class="col text-center">
                <div class="card mx-auto my-1" style="width: 18rem;">
                    ${testPoster(element.poster_path)}
                    <div class="card-body">
                        <h5>${element.original_title}</h5>
                        <p class="card-text">${element.release_date.slice(0, 4)}</p>
                        <p class="card-text">Popularité :</p>
                        
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="ratings">
                            ${rating(element.vote_average)}
                        </div>
                        <p class="card-text">${element.vote_average}</p>
                    </div>
                        
                    </div>
                </div>
            </div>`
                    });
                    console.log(response)
                })
                .catch(err => console.error(err))
        })

        function rating(score) {
            if (score >= 0 && score <= 2) {
                return `
            <i class="fa fa-star rating-color"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>`
            } else if (score > 2 && score <= 4) {
                return `
            <i class="fa fa-star rating-color"></i>
            <i class="fa fa-star rating-color"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>`
            } else if (score > 4 && score <= 6) {
                return `
            <i class="fa fa-star rating-color"></i>
            <i class="fa fa-star rating-color"></i>
            <i class="fa fa-star rating-color"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>`
            } else if (score > 6 && score <= 8) {
                return `
            <i class="fa fa-star rating-color"></i>
            <i class="fa fa-star rating-color"></i>
            <i class="fa fa-star rating-color"></i>
            <i class="fa fa-star rating-color"></i>
            <i class="fa fa-star"></i>`
            } else if (score > 8 && score <= 10) {
                return `
            <i class="fa fa-star rating-color"></i>
            <i class="fa fa-star rating-color"></i>
            <i class="fa fa-star rating-color"></i>
            <i class="fa fa-star rating-color"></i>
            <i class="fa fa-star rating-color"></i>`
            }
        }
    },)

    function testPoster(poster){
        if (poster == null){
            return `<img src="assets/img/no-poster.jpg" class="card-img-top">`
        }else{
            return `<img src="https://image.tmdb.org/t/p/original/${poster}" class="card-img-top">`
        }
    }