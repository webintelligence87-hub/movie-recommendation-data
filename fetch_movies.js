import fs from "fs";
import fetch from "node-fetch";

const apiKey = process.env.TMDB_API_KEY;
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

async function getMovies() {
  const res = await fetch(url);
  const data = await res.json();
  fs.writeFileSync("movies.json", JSON.stringify(data, null, 2));
  console.log("✅ movies.json updated successfully!");
}

getMovies();
