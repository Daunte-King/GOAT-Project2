const Artist = require('../models/artist');

module.exports = {
    index,
    show,
    new: newArtist,
    create,
    delete: deleteArtist
}

function deleteArtist(req, res) {
    Todo.deleteOne(req.params.id);
    res.redirect('/artists');
  }

  function create(req, res) {
    console.log(req.body);
    req.body.done = false;
    Todo.create(req.body);
    res.redirect('/artists');
  }

  function newArtist(req, res) {
    res.render('todos/new');
  }

  function index(req, res) {
    res.render('todos/index', {
      todos: Todo.getAll(),
      time: req.time
    });
  }

  function show(req, res) {
    res.render('todos/show', {
      todo: Todo.getOne(req.params.id),
      // Would like to display the number of the todo within the list
      todoNum: Todo.getAll().findIndex(todo => todo.id === parseInt(req.params.id)) + 1
    });
  }
