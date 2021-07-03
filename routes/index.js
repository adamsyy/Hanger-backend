var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   let products=[
     {
       name:'Ifone',
       category:'mobile',
       description:'poli sanm',
       image:'https://imgr.search.brave.com/hq8Gj5li7n9K-EYzE3VcCDeme9YiHxOI6UThOkKggxo/fit/905/225/no/1/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5x/UktzWlVnZFRDSy1f/UkJUMjZqQ0Z3SGFE/NCZwaWQ9QXBp',
     },
     {
      name:'mac',
      category:'laptop',
      description:'nice sanm',
      image:'https://imgr.search.brave.com/pgFFiluNlkyJjIvQ63bVP6GyWj8Bcah46zkDBXjF9jo/fit/1200/1200/no/1/aHR0cHM6Ly9hcHBs/ZXRvb2xib3guY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIx/LzAxL01hY0Jvb2st/QWlyLU0xLTIwMjAt/UmV2aWV3XzU3MDgt/OC5qcGc'
    },
    {
      name:'Ifone',
      category:'mobile',
      description:'poli sanm',
      image:'https://imgr.search.brave.com/hq8Gj5li7n9K-EYzE3VcCDeme9YiHxOI6UThOkKggxo/fit/905/225/no/1/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5x/UktzWlVnZFRDSy1f/UkJUMjZqQ0Z3SGFE/NCZwaWQ9QXBp',
    },
    {
      name:'Ifone',
      category:'mobile',
      description:'badd',
      image:'https://imgr.search.brave.com/hq8Gj5li7n9K-EYzE3VcCDeme9YiHxOI6UThOkKggxo/fit/905/225/no/1/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5x/UktzWlVnZFRDSy1f/UkJUMjZqQ0Z3SGFE/NCZwaWQ9QXBp',
    },

   ]

  res.render('index', {products,isadmin:true});
});

module.exports = router;
