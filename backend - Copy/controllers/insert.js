const Hospital=require("../models/hospital.js")

exports.insert=(req,res)=>{
    //console.log(req.body)
    const record=new Hospital(req.body)
    record.save((err,record)=>{
        if(err){
            return res.status(400).json({
                err:"NOT able to save record in DB"
            })
        }
        //console.log(record)
        res.json(record);
    })
}

exports.fetch=(req,res)=>{ 
   Hospital.find({},(err,rec)=>{
       if(err){
           res.status(400).json({
               mesage:"no records in db"
           })
       }
       //console.log(rec)
       res.json(rec)
   })
}

exports.update=(req,res)=>{
    Hospital.findByIdAndUpdate(
        { _id: req.body._id },
        { $set: req.body },
        { new: true, useFindAndModify: false },
        (err, user) => {
          if (err) {
            return res.status(400).json({
              error: "error in updating"
            });
          }
          res.json(user);
        }
      );     
}

exports.deletee=(req,res)=>{
    Hospital.findOneAndDelete({hospital_id:req.body.hospital_id},(err,rec)=>{
        if(err){
            res.status(400).json({
                error:"error in deleting"
            })
        }
        res.json({message:"record deleted"})
    })
}

