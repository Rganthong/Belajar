// Mengunakan jquery

// $(".search-button").on("click", function () {
//   $.ajax({
//     url: "http://www.omdbapi.com/?apikey=eab92005&s=harry potter",
//     success: (result) => {
//       const movies = result.Search;
//       let cards = "";
//       movies.forEach((m) => {
//         cards += showCards(m);
//       });
//       $(".movies-container").html(cards);
//       // ketika tombol details diklik
//       $(".modal-detail-button").on("click", function () {
//         $.ajax({
//           url:
//             "http://www.omdbapi.com/?&apikey=eab92005&i=" +
//             $(this).data("imdbid"),
//           success: (m) => {
//             const moviesDetails = showMoviesDetails(m);
//             $(".modal-body").html(moviesDetails);
//           },
//           error: (e) => {
//             console.log(e.responseText);
//           },
//         });
//       });
//     },
//     error: (e) => {
//       console.log(e.responseText);
//     },
//   });
// });
/*





*/
// Menggunakan Fetch
// adalah sebuah method API javascript untuk mengambil resource dari jaringan, dan mengembalikan promise yang selesai (fulfilled) ketika ada response yang tersedia.
// penulisan fetch(resource(url atau object request), init(konfigurasi optional))

// const searchButton = document.querySelector(".search-button");
// searchButton.addEventListener("click", function () {
//   const inputKeyword = document.querySelector(".input-keyword");
//   fetch("http://www.omdbapi.com/?&apikey=eab92005&s=" + inputKeyword.value)
//     .then((response) => response.json())
//     .then((response) => {
//       const movies = response.Search;
//       let cards = "";
//       movies.forEach((m) => (cards += showCards(m)));
//       const moviesContainer = document.querySelector(".movies-container");
//       moviesContainer.innerHTML = cards;

//       // Ketika tombol details diklik
//       const modalDetailButton = document.querySelectorAll(
//         ".modal-detail-button"
//       );
//       modalDetailButton.forEach((btn) => {
//         btn.addEventListener("click", function () {
//           const imdbid = this.dataset.imdbid;
//           fetch("http://www.omdbapi.com/?&apikey=eab92005&i=" + imdbid)
//             .then((response) => response.json())
//             .then((m) => {
//               const moviesDetails = showMoviesDetails(m);
//               const modalBody = document.querySelector(".modal-body");
//               modalBody.innerHTML = moviesDetails;
//             });
//         });
//       });
//     });
// });
/*





*/
// Async and Await
// sebuah async function dapat memiliki keyword await di dalamnya untuk memberhentikan sementara eksekusi fungsinya sambil menunggu promise-nya selesai.

const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", async function () {
  try {
    const inputKeyword = document.querySelector(".input-keyword");
    const movies = await getMovies(inputKeyword.value);
    updateUi(movies);
  } catch (err) {
    alert(err);
  }
});

// event binding
document.addEventListener("click", async function (e) {
  if (e.target.classList.contains("modal-detail-button")) {
    const imdbid = e.target.dataset.imdbid;
    const moviesDetails = await getMoviesDetail(imdbid);
    updateDetailUi(moviesDetails);
    console.log(moviesDetails);
  }
});

function getMovies(keyword) {
  return fetch("http://www.omdbapi.com/?&apikey=eab92005&s=" + keyword)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((response) => {
      if (response.Response === "False") {
        throw new Error(response.Error);
      }
      return response.Search;
    });
}

function updateUi(movies) {
  let cards = "";
  movies.forEach((m) => (cards += showCards(m)));
  const moviesContainer = document.querySelector(".movies-container");
  moviesContainer.innerHTML = cards;
}

function getMoviesDetail(imdbid) {
  return fetch("http://www.omdbapi.com/?&apikey=eab92005&i=" + imdbid)
    .then((response) => response.json())
    .then((m) => m);
}

function updateDetailUi(m) {
  const moviesDetails = showMoviesDetails(m);
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = moviesDetails;
}

function showCards(m) {
  return `<div class="col-md-4 my-3">
  <div class="card">
    <img src="${m.Poster}" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">${m.Title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
      <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal"
      data-target="#moviesDetails" data-imdbid="${m.imdbID}">Show Details</a>
    </div>
  </div>
</div>`;
}

function showMoviesDetails(m) {
  return `<div class="container-fluid">
  <div class="row">
    <div class="col-md-3">
      <img src="${m.Poster}" class="img-fluid" />
    </div>
    <div class="col-md">
      <ul class="list-group">
        <li class="list-group-item">
          <h4>${m.Title} (${m.Year})</h4>
        </li>
        <li class="list-group-item">
          <strong>Director : </strong>${m.Director}
        </li>
        <li class="list-group-item"><strong>Actor : </strong>${m.Actors}</li>
        <li class="list-group-item"><strong>Writer : </strong>${m.Writer}</li>
        <li class="list-group-item"><strong>Plot : </strong>${m.Plot}</li>
      </ul>
    </div>
  </div>
</div>`;
}
