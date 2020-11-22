const express = require("express");
const router = express.Router();
const Website = require("../models/website");

router.get("/", (req, res) => {
  Website.find({}, (err, foundBookmark) => {
    res.json(foundBookmark);
  });
});

router.delete("/:id", (req, res) => {
  Website.findByIdAndRemove(req.params.id, (err, deletedBookmark) => {
    res.json(deletedBookmark);
  });
});

router.put('/:id', (req, res)=>{
  Website.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedTodo)=>{
      res.json(updatedTodo);
  });
});

router.post("/", (req, res) => {
  Website.create(req.body, (err, createdBookmark) => {
    res.json(createdBookmark);
  });
});

module.exports = router;
