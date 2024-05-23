//1. creare array di oggetti con film e serie tv
const media = [
    {
      title: "Inception",
      year: 2010,
      genre: ["Sci-Fi", "Action", "Adventure"],
      rating: 8.8,
      type: "movie"
    },
    {
      title: "The Shawshank Redemption",
      year: 1994,
      genre: ["Drama"],
      rating: 9.3,
      type: "movie"
    },
    {
      title: "Breaking Bad",
      year: "2008-2013",
      genre: ["Crime", "Drama", "Thriller"],
      rating: 9.5,
      type: "tv",
      seasons: 5
    },
    {
      title: "Game of Thrones",
      year: "2011-2019",
      genre: ["Action", "Adventure", "Drama"],
      rating: 9.3,
      type: "tv",
      seasons: 8
    },
    {
      title: "The Godfather",
      year: 1972,
      genre: ["Crime", "Drama"],
      rating: 9.2,
      type: "movie"
    },
    {
      title: "Friends",
      year: "1994-2004",
      genre: ["Comedy", "Romance"],
      rating: 8.9,
      type: "tv",
      seasons: 10
    },
    {
      title: "The Dark Knight",
      year: 2008,
      genre: ["Action", "Crime", "Drama"],
      rating: 9.0,
      type: "movie"
    },
    {
      title: "Stranger Things",
      year: "2016-present",
      genre: ["Drama", "Fantasy", "Horror"],
      rating: 8.7,
      type: "tv",
      seasons: 4
    },
    {
      title: "Pulp Fiction",
      year: 1994,
      genre: ["Crime", "Drama"],
      rating: 8.9,
      type: "movie"
    },
    {
      title: "The Office",
      year: "2005-2013",
      genre: ["Comedy"],
      rating: 8.9,
      type: "tv",
      seasons: 9
    }
  ];
  

  // 2. creare la classe Movie che contenga le proprietà dell'array 
  class Movie {
      constructor(title, year, genre, rating){
          this.title = title;
          this.year = year;
          this.genre = genre;
          this.rating = rating;
      }
  
      // toString che ritorna una stringa di dati dei film 
      toString(){
          return `Il film ${this.title} è uscito nel ${this.year}, il genere è ${this.genre.join(", ")} e ha un rating di ${this.rating}.`;
      }
  }
  
  // 3. creo la classe TvSeries che estende Movie 
  class TvSeries extends Movie {
      constructor(title, year, genre, rating, seasons){
          super(title, year ,genre, rating);
          this.seasons = seasons;
      }
  
      toString(){
          return `La serie ${this.title} è uscita nel ${this.year}, il genere è ${this.genre.join(", ")} e ha un rating di ${this.rating}, dura ${this.seasons} stagioni.`;
      }
  }
  
  // 4. creo un nuovo array con le istanze di Movie e TvSeries
  const mediaObjects = media.map((item) => {
      if(item.type === "movie"){
          return new Movie(item.title, item.year, item.genre, item.rating, item.type);
      } else {
          return new TvSeries(item.title, item.year, item.genre, item.rating, item.type, item.seasons);
      }
  });
  

  
  // 5. funzione che fa la media in base al genere
  function getAverageRatingByGenre(mediaObjects, genre){
      const genreMovies = mediaObjects.filter((item) => item.genre.includes(genre));
      const totalRating = genreMovies.reduce((sum, item) => sum + item.rating, 0);
      const averageRating = totalRating / genreMovies.length;
      return averageRating;
  }
  
  // 6. funzione che restituisce i generi unici 
  function getUniqueGenres(mediaObjects){
      const allGenres = mediaObjects.reduce((acc, item) => {
          return acc.concat(item.genre);
      }, []);
      
      // togliere i doppioni
      const uniqueGenres = Array.from(new Set(allGenres));
      return uniqueGenres;
  }

// 7  funzione che filtra i film in base al genere 
function filterMoviesByGenre(mediaObjects, genre) {
    const filteredMovies = mediaObjects.filter((item) => item.genre.includes(genre));
    return filteredMovies.map((item) => item.toString());
}



// 8 stampare tutto in console 
console.log("Media array:", media);
console.log();
  mediaObjects.forEach(item => {
    console.log(item.toString());
});
  console.log();
  console.log("Media dei voti per il genere Azione", getAverageRatingByGenre(mediaObjects, "Action"));
  console.log();
  console.log("Lista di generi unici:", getUniqueGenres(mediaObjects));
  console.log();
  console.log("Film e serie tv nel genere 'Drama':", filterMoviesByGenre(mediaObjects, "Drama"));

//   bonus classe cart
class Cart {
    constructor() {
        this.items = [];
        this.pricePerItem = 3.99;
    }

    addMovie(movie) {
        this.items.push(movie);
    }

    removeMovie(movie) {
        const index = this.items.indexOf(movie);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }

    getTotalCost() {
        return this.items.length * this.pricePerItem;
    }

    printTotalCost() {
        const totalCost = this.getTotalCost();
        console.log(`Il costo totale per noleggiare ${this.items.length} film è €${totalCost.toFixed(2)}`);
    }
}
// Test della classe Cart
const cart = new Cart();
cart.addMovie(mediaObjects[0]); 
cart.addMovie(mediaObjects[1]); 
cart.addMovie(mediaObjects[4]); 
cart.addMovie(mediaObjects[7]); 
cart.removeMovie(mediaObjects[1]); 
cart.printTotalCost(); 
