var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host     : 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
  user     : 'bsale_test',
  password : 'bsale_test',
  database : 'bsale_test'
});


const getAllProducts = () =>{
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * FROM product',  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
};

module.exports = { getAllProducts }