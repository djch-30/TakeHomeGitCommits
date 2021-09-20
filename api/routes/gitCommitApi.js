var express = require('express');
var router = express.Router();

var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
    var config = {
        method: 'get',
        url: 'https://api.github.com/repos/djch-30/TakeHomeGitCommits/commits',
        headers: { 
          'Content-Type': 'application/json'
        }
      };

    axios.get(config)
    .then((data) => {
        res.json(JSON.stringify(data, null, 2))
    })
    .catch((err) => {
        console.log(err);
    });
});

module.exports = router;