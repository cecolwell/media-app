const PORT = 8000;
const { default: axios } = require("axios");
const cors = require("cors");
const express = require("express");
require("dotenv").config();

const app = express();

app.use(cors());

const API_KEY = process.env.API_KEY;

app.get("/allMovies", async (req, res) => {
  axios
    .request(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.get("/similarMovies", async (req, res) => {
  const movie_id = req.query.id;
  axios
    .request(
      `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.get("/movie", async (req, res) => {
  const movie_id = req.query.id;
  axios
    .request(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}`
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.get("/allTvShows", async (req, res) => {
  axios
    .request(
      `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.get("/tvShow", async (req, res) => {
  const tvShow_id = req.query.id;
  axios
    .request(`https://api.themoviedb.org/3/tv/${tvShow_id}?api_key=${API_KEY}`)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.get("/similarTvShows", async (req, res) => {
  const tvShow_id = req.query.id;
  axios
    .request(
      `https://api.themoviedb.org/3/movie/${tvShow_id}/similar?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.listen(8000, () => console.log(`Server is running on port ${PORT}`));
