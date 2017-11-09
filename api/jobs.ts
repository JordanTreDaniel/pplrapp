let express = require("express");
let router = express.Router();
let axios = require('axios');

router.get("/jobs/:queryStr", (req, res, next) => {
    console.log("Search route hit",req.params);
    let params = req.params.queryStr;
    axios.get("http://api.indeed.com/ads/apisearch?publisher=7248052928136281&format=json&v=2&q=" + params +'&sort=date&radius=25&st=&jt=&start=&limit=15&fromage=30&filter=&latlong=1&co=us&chnl=FJR&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29')
        .then(function(response){
            console.log("Api called");
            console.log(response);
            console.log(response.data.results); // ex.: { user: 'Your User'}
            console.log(response.status); // ex.: 200
            res.json(response.data.results);
        }).catch((err) => {
            console.dir(err);
        });
});

export = router;