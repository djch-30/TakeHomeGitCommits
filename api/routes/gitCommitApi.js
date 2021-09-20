var express = require('express');
var router = express.Router();

var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
    var config = {
        method: 'GET',
        url: 'https://api.github.com/repos/djch-30/TakeHomeGitCommits/commits',
        headers: { 
          'Content-Type': 'application/json'
        }
      };

    axios.get('https://api.github.com/repos/djch-30/TakeHomeGitCommits/commits')
    .then((result) => {
        res.json(result.data)
    })
    .catch((err) => {
        console.log(err);
    });
});

module.exports = router;