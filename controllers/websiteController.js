const Website = require("../models/website");

module.exports = {
  showLandingPage(req, res) {
    Website.find({}, (err, foundBookmark) => {
      res.json(foundBookmark);
    });
  },
  removeItem(req, res) {
    Website.findByIdAndRemove(req.params.id, (err, deletedBookmark) => {
      res.json(deletedBookmark);
    });
  },
  updateItem(req, res) {
    Website.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedTodo)=>{
      res.json(updatedTodo);
    });
  },
  createItem(req, res) {
    Website.create(req.body, (err, createdBookmark) => {
      res.json(createdBookmark);
    });
  },
  showMainPage(req, res) {
    
  }
}