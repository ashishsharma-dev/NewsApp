let API_KEY = "745314297e5042d1a8bf4fd0d68b124e"
let searchBox = document.querySelector(".searchBox")
let searchForm = document.querySelector(".searchForm")
let searchBtn = document.querySelector(".searchBtn")
let query = "";
let newsContainer = document.querySelector(".newsCards")


let API_URL_SPORTS = `https://newsapi.org/v2/everything?q=sports&apiKey=${API_KEY}`
let API_URL_FASHION = `https://newsapi.org/v2/everything?q=fashion&apiKey=${API_KEY}`
let API_URL_TECHNOLOGY = `https://newsapi.org/v2/everything?q=technology&apiKey=${API_KEY}`
let API_URL_HEALTH = `https://newsapi.org/v2/everything?q=health&apiKey=${API_KEY}`
let API_URL_GAMES = `https://newsapi.org/v2/everything?q=games&apiKey=${API_KEY}`


let home = document.getElementById("home")
let sports = document.getElementById("sports")
let fashion = document.getElementById("fashion")
let technology = document.getElementById("technology")
let health = document.getElementById("health")
let games = document.getElementById("games")

const fetchNews = async (query, API_URL) => {
    let res = await fetch(API_URL)
    let data = await res.json()
    let searchResultHeader = document.querySelector(".searchResultHeader")
    searchResultHeader.innerHTML = `${query} : Freenewz : ${data.totalResults} results`

    // Defining total pages
    let articlesPerPage = 18
    let totalPages = Math.ceil(data.totalResults / articlesPerPage)
    let startPoint = 0
    let endPoint = data.totalResults.length - 1;
    let newsStr = ""

    let prev = document.querySelector("#prev")
    let next = document.querySelector("#next")

    for (let i = startPoint; i < articlesPerPage; i++) {
        let newsCardHTML = `
        <div class="card m-2" style="width: 18rem;">
        <img src="${data.articles[i].urlToImage == null ? "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png" : data.articles[i].urlToImage}" class="card-img-top" alt="${data.articles[i].title} image">
        <div class="card-body">
        <h5 class="card-title">${data.articles[i].title}</h5>
        <p class="card-text">${data.articles[i].description}</p>
        <a href="${data.articles[i].url}" class="btn btn-primary">Read More...</a>
        </div>
        </div>
        `
        newsStr = newsStr + newsCardHTML
        newsContainer.innerHTML = newsStr
    }
}

        function homeFunc(e){
            sports.classList.remove("active")
            fashion.classList.remove("active")
            technology.classList.remove("active")
            health.classList.remove("active")
            games.classList.remove("active")
            e.target.classList.add("active")

            fetchNews("all", `https://newsapi.org/v2/everything?q=all&apiKey=${API_KEY}`)

        }

        function sportsFunc(e){
            home.classList.remove("active")
            fashion.classList.remove("active")
            technology.classList.remove("active")
            health.classList.remove("active")
            games.classList.remove("active")
            e.target.classList.add("active")

            fetchNews("sports", `https://newsapi.org/v2/everything?q=sports&apiKey=${API_KEY}`)
        }

        function fashionFunc(e){
            home.classList.remove("active")
            sports.classList.remove("active")
            technology.classList.remove("active")
            health.classList.remove("active")
            games.classList.remove("active")
            e.target.classList.add("active")

            fetchNews("fashion", `https://newsapi.org/v2/everything?q=fashion&apiKey=${API_KEY}`)

        }

        function technologyFunc(e){
            home.classList.remove("active")
            sports.classList.remove("active")
            fashion.classList.remove("active")
            health.classList.remove("active")
            games.classList.remove("active")
            e.target.classList.add("active")

            fetchNews("technology", `https://newsapi.org/v2/everything?q=technology&apiKey=${API_KEY}`)
        }

        function healthFunc(e){
            home.classList.remove("active")
            sports.classList.remove("active")
            technology.classList.remove("active")
            technology.classList.remove("active")
            games.classList.remove("active")
            e.target.classList.add("active")

            fetchNews("health", `https://newsapi.org/v2/everything?q=health&apiKey=${API_KEY}`)
        }

        function gamesFunc(e){
            home.classList.remove("active")
            sports.classList.remove("active")
            technology.classList.remove("active")
            health.classList.remove("active")
            fashion.classList.remove("active")
            e.target.classList.add("active")

            fetchNews("games", `https://newsapi.org/v2/everything?q=games&apiKey=${API_KEY}`)
        }

        home.addEventListener("click", homeFunc)
        sports.addEventListener("click", sportsFunc)
        fashion.addEventListener("click", fashionFunc)
        technology.addEventListener("click", technologyFunc)
        health.addEventListener("click", healthFunc)
        games.addEventListener("click", gamesFunc)

        searchForm.addEventListener("submit", (e) => {
            e.preventDefault()
            query = searchBox.value

            let API_URL = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`

            let newsContainer = document.querySelector(".newsCards")



            const fetchNews = async (query, API_URL) => {
                let res = await fetch(API_URL)
                let data = await res.json()
                let searchResultHeader = document.querySelector(".searchResultHeader")
                searchResultHeader.innerHTML = `${query} : Freenewz : ${data.totalResults} results`

                // Defining total pages
                let articlesPerPage = 18
                let totalPages = Math.ceil(data.totalResults / articlesPerPage)
                let startPoint = 0
                let endPoint = data.totalResults.length - 1;
                let newsStr = ""

                let prev = document.querySelector("#prev")
                let next = document.querySelector("#next")

                for (let i = startPoint; i < articlesPerPage; i++) {
                    let newsCardHTML = `
                    <div class="card m-2" style="width: 18rem;">
                    <img src="${data.articles[i].urlToImage == null ? "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png" : data.articles[i].urlToImage}" class="card-img-top" alt="${data.articles[i].title} image">
                    <div class="card-body">
                    <h5 class="card-title">${data.articles[i].title}</h5>
                    <p class="card-text">${data.articles[i].description}</p>
                    <a href="${data.articles[i].url}" class="btn btn-primary">Read More...</a>
                    </div>
                    </div>
                    `
                    newsStr = newsStr + newsCardHTML
                    newsContainer.innerHTML = newsStr
                }
            }
            console.log(query)

            fetchNews(query, `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`)
        })