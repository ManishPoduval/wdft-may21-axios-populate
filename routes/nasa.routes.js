const router = require("express").Router();
const axios = require('axios')

const NASA_KEY = process.env.NASA_KEY

router.get("/mars", (req, res, next) => {
    
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=10&api_key=${NASA_KEY}`)
      .then((response) => {
          let photos = response.data.photos
 
          res.render('mars.hbs', {photos})
      })
      .catch((err) => {
          next(err)
      })

});

module.exports = router;
