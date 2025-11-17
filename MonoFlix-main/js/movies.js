const movies = [
  {
    id: 1,
    title: "Avatar: Fire and Ash",
    year: 2025,
    duration: "162 min",
    rating: "NR",
    genre: ["Action", "Adventure", "Fantasy"],
    image: "/images/1.jpg",
    description:
      "Jake Sully and Neytiri face a new threat as Pandora's balance is once again endangered by human greed and vengeance.",
    trailer:"https://youtu.be/nb_fFj_0rq8?si=PSoURyMgZPYP12WT"
  },
  {
    id: 2,
    title: "Perfect Days",
    year: 2023,
    duration: "124 min",
    rating: "8.0",
    genre: ["Drama"],
    image: "/images/7.jpg",
    description:
      "A Tokyo toilet cleaner finds beauty and peace in his daily routines while quietly reflecting on his past.",
    trailer:"https://www.youtube.com/watch?v=QzZBbX5A1FA&t=2s"
  },
  {
    id: 3,
    title: "Past Lives",
    year: 2023,
    duration: "106 min",
    rating: "8.3",
    genre: ["Drama", "Romance"],
    image: "/images/6.jpg",
    description:
      "Two childhood friends are separated when one moves from South Korea to the U.S., reuniting decades later to confront destiny and lost love.",
    trailer:"https://www.youtube.com/watch?v=kA244xewjcI"
  },
  {
    id: 4,
    title: "La La Land",
    year: 2016,
    duration: "128 min",
    rating: "8.0",
    genre: ["Comedy", "Drama", "Music", "Romance"],
    image: "/images/9.jpeg",
    description:
      "A jazz musician and an aspiring actress fall in love while struggling to make it in Los Angeles.",
    trailer:"https://www.youtube.com/watch?v=76ULWmMfHcU"
  },
  {
    id: 5,
    title: "Cure",
    year: 1997,
    duration: "111 min",
    rating: "7.9",
    genre: ["Mystery", "Thriller", "Horror"],
    image: "/images/8.jpg",
    description:
      "A detective investigates a series of murders linked by a mysterious hypnotist manipulating ordinary people into killing.",
    trailer:"https://www.youtube.com/watch?v=Kr0LzE4VRkQ"
  },
  {
    id: 6,
    title: "Scarface",
    year: 1983,
    duration: "170 min",
    rating: "8.3",
    genre: ["Crime", "Drama"],
    image: "/images/10.jpg",
    description:
      "Tony Montana rises from Cuban refugee to Miami drug kingpin, consumed by greed and paranoia.",
    trailer:"https://www.youtube.com/watch?v=lZMIrD36MG8"
  },
  {
    id: 7,
    title: "Whiplash",
    year: 2014,
    duration: "107 min",
    rating: "8.5",
    genre: ["Drama", "Music"],
    image: "/images/11.webp",
    description:
      "A young drummer enrolls at a cutthroat music conservatory, where his perfectionist instructor pushes him beyond limits.",
    trailer:"https://www.youtube.com/watch?v=Q7kZy3T6vRM"
  },
  {
    id: 8,
    title: "Parasite",
    year: 2019,
    duration: "132 min",
    rating: "8.6",
    genre: ["Comedy", "Drama", "Thriller"],
    image: "/images/5.jpg",
    description:
      "A poor family infiltrates a wealthy household, leading to an unexpected chain of deception and chaos.",
    trailer:"https://www.youtube.com/watch?v=PhPROyE0OaM"
  },
  {
    id: 9,
    title: "Shutter Island",
    year: 2010,
    duration: "138 min",
    rating: "8.2",
    genre: ["Mystery", "Thriller"],
    image: "/images/12.jpg",
    description:
      "A U.S. Marshal investigates a psychiatric facility on Shutter Island, uncovering dark secrets about himself and the institution.",
    trailer:"https://www.youtube.com/watch?v=v8yrZSkKxTA"
  },
  {
    id: 10,
    title: "Predator: Badlands",
    year: 2025,
    duration: "119 min",
    rating: "NR",
    genre: ["Action", "Science Fiction", "Thriller"],
    image: "/images/2.jpg",
    description:
      "A group of mercenaries must survive the ultimate hunt in the scorching deserts of the Badlands as a new Predator emerges.",
    trailer:"https://www.youtube.com/watch?v=43R9l7EkJwE"
  },
  {
    id: 11,
    title: "The Running Man",
    year: 2025,
    duration: "101 min",
    rating: "NR",
    genre: ["Action", "Sci-Fi", "Thriller"],
    image: "/images/3.jpg",
    description:
      "A man joins a game show in which contestants, allowed to go anywhere in the world, are pursued by hunters hired to kill them.",
    trailer:"https://www.youtube.com/watch?v=ByXAgJU_X2M"
  },
  {
    id: 12,
    title: "Zootopia 2",
    year: 2025,
    duration: "115 min",
    rating: "NR",
    genre: ["Animation", "Adventure", "Comedy", "Family"],
    image: "/images/4.jpg",
    description:
      "Judy Hopps and Nick Wilde reunite to solve a new case that threatens the harmony between predators and prey in Zootopia.",
    trailer:"https://www.youtube.com/watch?v=BjkIOU5PhyQ"
  }
];

  const upcomingMoviesList = document.getElementById("upcoming-movies-list");
  const topRatedMoviesList = document.getElementById("top-rated-movies-list");

  const upcomingMovies = movies.filter(movie => [1, 10, 11, 12].includes(movie.id));
  const topRatedMovies = movies.filter(movie => ![1, 10, 11, 12].includes(movie.id));

  function createMovieCard(movie) {
    const li = document.createElement("li");

    const durationMinutes = parseInt(movie.duration); 

    li.innerHTML = `
      <div class="movie-card">
        <a href="/assets/movie-details.html?id=${movie.id}">
          <figure class="card-banner">
            <img src="${movie.image}" alt="${movie.title} poster">
          </figure>
        </a>
        <div class="title-wrapper">
          <a href="/assets/movie-details.html?id=${movie.id}">
            <h3 class="card-title">${movie.title}</h3>
          </a>
          <time datetime="${movie.year}">${movie.year}</time>
        </div>
        <div class="card-meta">
          <div class="badge badge-outline">${movie.rating}</div>
          <div class="duration">
            <ion-icon name="time-outline"></ion-icon>
            <time datetime="PT${durationMinutes}M">${movie.duration}</time>
          </div>
        </div>
      </div>
    `;
    return li;
  }

  upcomingMovies.forEach(movie => upcomingMoviesList.appendChild(createMovieCard(movie)));
  topRatedMovies.forEach(movie => topRatedMoviesList.appendChild(createMovieCard(movie)));


  
