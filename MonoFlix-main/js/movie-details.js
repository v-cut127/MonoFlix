 const trailerBtn = document.getElementById("trailer-btn");
if (trailerBtn) {
  trailerBtn.addEventListener("click", () => {
    if (movie.trailer) {
      window.open(movie.trailer, "_blank"); 
    } else {
      alert("Trailer not available");
    }
  });
}
  const trailer1Btn = document.getElementById("image-play");
if (trailer1Btn) {
  trailer1Btn.addEventListener("click", () => {
    if (movie.trailer) {
      window.open(movie.trailer, "_blank"); 
    } else {
      alert("Trailer not available");
    }
  });
}

const params = new URLSearchParams(window.location.search);
const movieId = parseInt(params.get("id"));

const movie = movies.find(m => m.id === movieId);

if (movie) {
  document.querySelector(".detail-title").textContent = movie.title;

  if (document.querySelector(".detail-subtitle")) {
    document.querySelector(".detail-subtitle").textContent = movie.subtitle || "";
  }

  if (document.querySelector(".storyline")) {
    document.querySelector(".storyline").textContent = movie.description;
  }

  const posterImg = document.querySelector(".movie-detail-banner img");
  if (posterImg) {
    posterImg.src = movie.image;
    posterImg.alt = movie.title + " poster";
  }
 
  const badgeFill = document.querySelector(".badge-fill");
  if (badgeFill) badgeFill.textContent = movie.rating;

  const badgeOutline = document.querySelector(".badge-outline");
  if (badgeOutline) badgeOutline.textContent = movie.quality || "HD";

  const yearTime = document.querySelector(".date-time time[datetime]");
  if (yearTime) yearTime.textContent = movie.year;

  const genreWrapper = document.querySelector(".ganre-wrapper");
  if (genreWrapper) {
    genreWrapper.innerHTML = movie.genre.map(g => `<a href="#">${g}</a>`).join(", ");
  }

  const streamingTitle = document.querySelector(".title-wrapper .title");
  if (streamingTitle) streamingTitle.textContent = movie.streaming || "";

  const duration = document.querySelector(".movie-duration");
  if (duration) duration.textContent = movie.duration; 
  const movieDetailSection = document.querySelector(".movie-detail");

if (movie && movieDetailSection) {
  movieDetailSection.style.background = `
    linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,1)),
    url("${movie.background_image}") no-repeat center/cover
  `;
  movieDetailSection.style.backgroundSize = "cover";
  movieDetailSection.style.backgroundPosition = "center";
}

}
