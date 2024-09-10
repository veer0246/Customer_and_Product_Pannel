const db  = require('../databaseConfig.js')

//this is customer controller
exports.saveCustomer = (req, res)=>{
    let Name = req.body.Name
    let Email = req.body.Email
    let Number = req.body.Number
    let Address = req.body.Address
    let Payment_dues = req.body.Payment_dues
   
    let value = [[Name,Email, Number, Address, Payment_dues]]

    let sql = 'insert into customer(Name,Email, Number, Address, Payment_dues) values ?'

    db.query(sql, [value], (err, result)=>{
        if(err) throw err
        else{
            res.send("customer saved")
        }
    })
    
}

exports.getcustomer = (req, res)=>{
    let sql = 'select * from customer'
    db.query(sql, (err, result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}



exports.deletecustomer = (req, res)=>{
    let id = req.params.id
    let sql = "delete from customer where id = ?"
    db.query(sql, [id], (err,result)=>{
        if(err) throw err
        else{
            res.send("customer deleted")
        }
    })
}

exports.getcustomerById = (req, res)=>{
    let id = req.params.id
    let sql = 'select * from customer where id = ?'
    db.query(sql, [id], (err, result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}


exports.updatecustomer=(req,res)=>{
    let id=req.params.id
    let newData=req.body
    let sql='update customer set ? where id=?'
    db.query(sql,[newData,id],(err,result)=>{
        if(err) throw err
        else{
            res.send("customer updated")
        }
    })
}