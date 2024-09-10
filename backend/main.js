const express = require('express')
const customerRoutes = require('./routes/customerRoute')
const productRoutes = require('./routes/productRoute')
const cors = require('cors')


let db = require('./databaseConfig')
let app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('uploads'))
let port = 3000

//database connect-------------
db.connect((err)=>{
    if(err) throw err   
    else {
        console.log('database connected!')
    }
})

// create customet table----------
let customerTableQuery = `
CREATE TABLE  if not exists customer (
  id INT NOT NULL AUTO_INCREMENT,
  Name VARCHAR(255) NULL,
  Email VARCHAR(255) NULL,
  Number VARCHAR(255) NULL,
  Payment_dues VARCHAR(255) NULL,
  Address VARCHAR(255) NULL,
  PRIMARY KEY (id));
`
db.query(customerTableQuery, (err, result)=>{
    if(err) throw err
    else{
        console.log("customer table created")
    }
})


//create product table-------------
let productTableQuery = `
CREATE TABLE  if not exists product (
  id INT NOT NULL AUTO_INCREMENT,
  brand VARCHAR(255) NULL,
  price VARCHAR(255) NULL,
  category VARCHAR(255) NULL,
  rating VARCHAR(255) NULL,
  image VARCHAR(255) NULL,
  PRIMARY KEY (id));
`
db.query(productTableQuery, (err, result)=>{
    if(err) throw err
    else{
        console.log("product table created")
    }
})

//create category table-----------
let productCategoryTableQuery = `
CREATE TABLE  if not exists productCategory (
  id INT NOT NULL AUTO_INCREMENT,
  category_name VARCHAR(255) NULL,
  category_discription VARCHAR(255) NULL,
  PRIMARY KEY (id));
`
db.query(productCategoryTableQuery, (err, result)=>{
    if(err) throw err
    else{
        console.log("productCategory table created")
    }
})


app.use('/api', customerRoutes)
app.use('/api', productRoutes)




app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})
