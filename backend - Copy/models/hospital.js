var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HospitalSchema = new Schema({
    hospital_id:{
        type:Number,
        required:true
    },
  hospital_name:{
        type:String,
        required:true
    },
  total_beds:{
      type:Number,
      reuqired:true
  },
  booked_beds:{
    type:Number,
    required:true
},
  vaccant_beds:{
    type:Number,
    required:true
},
  contact_no:{
    type:Number,
    required:true
}
});
module.exports=mongoose.model("Hospital",HospitalSchema);