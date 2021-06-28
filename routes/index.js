const router = require("express").Router();

const PostModel = require('../models/Post.model')

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/posts", (req, res, next) => {
      // Fetch all the posts from the DB and show it here
      // Use res.send , avoid creating a hbs file just for now

      // PostModel.find()
      //     .then((posts) => {
      //         res.send(posts)
      //     })
      //     .catch((err) => {
      //         next(err)
      //     })


       // your output will look like this
       
       /*
           {
              "_id": "60d9d059adc336055cd5db36",
              "msgBody": "Hello Pablo and Yanis",
              "userId": "60d9cc916205ee3388ff99ca",
              "__v": 0
            },
  
      */
        
     // -------------------------------------------------
     //           WITH POPULATE
    // --------------------------------------------------

    // populate() takes a key name that you have referenced in your DB

      PostModel.find()
        .populate('userId')
        .then((posts) => {
            res.send(posts)
        })
        .catch((err) => {
            next(err)
        })

        /*

        {
          "_id": "60d9d059adc336055cd5db36",
          "msgBody": "Hello Pablo and Yanis",
          "userId": {
                "_id": "60d9cc916205ee3388ff99ca",
                "name": "Manish",
                "email": "manish@ironhack.com",
                "phone": "97234123",
                "__v": 0
          },
          "__v": 0
        },
        */

});


module.exports = router;
