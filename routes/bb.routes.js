const router = require("express").Router();
const BBModel = require('../models/BB.model')

/* GET home page */
router.get("/characters", (req, res, next) => {
    // BBModel.find( {} , {img: 1, _id:0, nickname: 1}).limit(10).skip(5)
    // OR
    
    BBModel.find( {} , 'img nickname -_id').limit(10).skip(5)
        .then((characters) => {
            console.log(characters)
            res.render('characters.hbs' ,  {characters})
        }) 
        .catch(() => {
            next('Charcaters fecth failed')
        })
});

module.exports = router;
