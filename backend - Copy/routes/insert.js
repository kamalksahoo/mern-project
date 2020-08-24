var express= require("express");
var router=express.Router();
const {insert,fetch,update,deletee}=require("../controllers/insert.js")

router.post("/insert",insert);
router.get("/fetch",fetch);
router.put("/update",update);
router.post("/delete",deletee);


module.exports=router;
