var express = require('express');
var router = express.Router();

var axios = require('axios');

/* GET home page. */
const ownerGithub ="djch-30";
const repoGithub ="TakeHomeGitCommits";
router.get('/', function(req, res, next) {
    
    axios.get('https://api.github.com/repos/'+ownerGithub+'/'+repoGithub+'/commits')
    .then((result) => {
        res.json(result.data)
    })
    .catch((err) => {
        console.log(err);
    });
});

module.exports = router;