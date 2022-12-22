import express from "express";

let configViewEngine = (app) => {
  app.use(express.static("./src/public")); //phia client co the truy cap vao public
  app.set("view engine", "ejs");
  app.set("views", "./src/views");
};

module.exports = configViewEngine;
