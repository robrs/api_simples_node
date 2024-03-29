const express = require('express');
const routes = express.Router();

const ProductController = require("./controllers/ProductController");

routes.get('/products',ProductController.index);
routes.get('/products/:id',ProductController.show);
routes.post('/products',ProductController.store);
routes.put('/products/:id',ProductController.update);
routes.delete('/products/:id',ProductController.destroy);


const NoteController = require("./controllers/NoteController");

routes.get('/notes',NoteController.index);
routes.get('/notes/:id',NoteController.show);
routes.post('/notes',NoteController.store);
routes.put('/notes/:id',NoteController.update);
routes.delete('/notes/:id',NoteController.destroy);

module.exports = routes;