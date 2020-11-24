const express = require('express');
const router = express.Router();
const Animal = require('../models/animal');

router.get('/', (req, res)=>{
    Animal.find({}, (err, foundAnimal)=>{
        res.json(foundAnimal);
    });
});

router.delete('/:id', (req, res)=>{
    Animal.findByIdAndRemove(req.params.id, (err, deletedAnimal)=>{
        res.json(deletedAnimal);
    });
});

router.put('/:id', (req, res)=>{
    Animal.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedAnimal)=>{
        res.json(updatedAnimal);
    });
});

//...farther down the page
router.post('/', (req, res)=>{
    Animal.create(req.body, (err, createdAnimal)=>{
        res.json(createdAnimal); //.json() will send proper headers in response so client knows it's json coming back
    });
});

module.exports = router;