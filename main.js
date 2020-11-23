  const latest =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=cab7a7b29e406baef458a6f3d6b1c150&language=en-US&page=1";

fetch(latest)
  .then((response) => response.json())
  .then((mal) => {
    const scrollmenu_latest = document.querySelector("#scroll_latest");
    mal.results.forEach((film) => {
      console.log(film);
      const card = `
      <div class="card text-left mr-1 ml-1">
      <a href="/view.html?${film.id}"><img class="card-img-top" src="https://image.tmdb.org/t/p/w500${film.poster_path}" alt=""></a>
           <div class="card-body" style="padding:0px;">
             <h6 class="card-title ">${film.original_title}</h6>
             <p class="card-text">${film.release_date}</p>
           </div>
         </div>
      `;
        scrollmenu_latest.innerHTML+=card;
    });
  });  
  const trend =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=cab7a7b29e406baef458a6f3d6b1c150&language=en-US&page=1";

fetch(trend)
  .then((response) => response.json())
  .then((mal) => {
    const scrollmenu_trend = document.querySelector("#scroll_trend");
    mal.results.forEach((film) => {
      const card = `
      <div class="card text-left mr-1 ml-1">
      <a href="/view.html?${film.id}"><img class="card-img-top" src="https://image.tmdb.org/t/p/w500${film.poster_path}" alt=""></a>
           <div class="card-body" style="padding:0px;">
             <h6 class="card-title " >${film.original_title}</h6>
             <p class="card-text">${film.release_date}</p>
           </div>
         </div>
      `;
        scrollmenu_trend.innerHTML+=card;
    });
  });
const popular =
  "https://api.themoviedb.org/3/movie/popular?api_key=f9a5c6b0c9b3f97d054414ec3439b63f&language=en-US&page=1";

fetch(popular)
  .then((response) => response.json())
  .then((data) => {
    const scrollmenu = document.querySelector(".scrollmenu");
    data.results.map((item) => {
      const card = `
     <div class="card text-left m-1">
     <a href="/view.html?${item.id}"><img class="card-img-top" src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt=""></a>
         <div class="card-body" style="padding:0px;">
           <h6 class="card-title ">${item.original_title}</h6>
           <p class="card-text">${item.release_date}</p>
         </div>
       </div>
      `;
        scrollmenu.innerHTML+=card;
    });
  });

function getDetails(id) {
  let detailsUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=f9a5c6b0c9b3f97d054414ec3439b63f&language=en-US`;
  fetch(detailsUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
function formHandler(event) {
  event.preventDefault();
  const input = document.querySelector("#search_input").value;
  const link = document.querySelector("#linkToSearch");
  searchValue = input;
  localStorage.setItem("value", input);
  link.click();
  console.log(input);
}

console.log("value", localStorage.getItem("value"));
function searchf(value) {
  let searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=f9a5c6b0c9b3f97d054414ec3439b63f&language=en-US&query=${value}&page=1&include_adult=false`;

  fetch(searchUrl)
    .then((res) => res.json())
    .then((data) => {
      const search_card=document.querySelector('#search_card');
      data.results.forEach(item=>{
          const card=`
          <div class="longcard d-flex p-2 m-2" style="min-height:160px;">
          <div class="card-image" style="min-width: 200px;min-height:350px;">
              <img src="https://image.tmdb.org/t/p/w500${item.poster_path}"   alt="">
          </div>
          <div class="card-body" style="padding-top:0px;">
              <h5 style="padding:0;">${item.original_title}</h5>
              <p>${item.release_date}</p>
              <p style="width:100%;height:75px;overflow:auto;">${item.overview}</p>
          </div>
      </div>
          `;
          search_card.innerHTML+=card;
      })
    });
}

searchf(localStorage.getItem("value"));
$key = window.location.search.substr(1);
$json_url= "https://api.themoviedb.org/3/movie/"+$key+"?api_key=f9a5c6b0c9b3f97d054414ec3439b63f&language=en-US";
fetch($json_url)
.then(res=>res.json())
.then(data =>{
    console.log(data);
    const img_view=document.querySelector('#img_view');
    const card=`
    <div class="container_view"  style="background-image:url(https://image.tmdb.org/t/p/w500${data.backdrop_path});background-size: cover;>
    <div class="container"  >
    <div class="row d-flex justify-content-between">
    <div class="col-md-2" >
        <div class="card text-left ml-5" >
            <img class="card-img-top" src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="">
                 <div class="card-body">
                   <h6 class="card-title "></h6>
                   <p class="card-text"></p>
                 </div>
               </div>
    </div>
    <div class="col-md-8 offset-md-2 text-light" id="title_view">
        
            <div class="col-md-11 offset-md-1 p-2">${data.title}</div>
            <div class="col-md-11 offset-md-1 p-2">${data.overview}</div>
            <div class="col-md-11 offset-md-1 p-2"></div>
            <div class="col-md-11 offset-md-1 p-2">1</div>

    </div>
</div>
</div></div>
    `;
    img_view.innerHTML+=card;
})

function myFunc(){
  var active=document.querySelector('.active');
  var noactive=document.querySelector('.noactive');
  noactive.classList.replace('noactive','active');
  active.classList.replace('active','noactive');
}  

