module.exports = {
  validate: (req,res,next) =>{
    // validates count to be greater than 0 and less than 100
    let n = req.query.count;
    if(n>0 && n<=100){
        next();
    }
    else if(n<1){
        res.send({
            type:"success",
            message:"count should be greater than 0"
        })
    }
    else if(n>100){
        res.send({
            type:"success",
            message:"count should be lesser than or equal to 100"
        })
    }else{
        res.send({
            type:"success",
            message:"count should be an number greater than 0 and lesser than or equal to 100. path to get fizzbuzz is api/fizzbuzz?count={number}"
        })
    }
  },
  logger: (req,res,next) =>{
    //logging url pings and time
    console.log(`Logged  ${req.url}  ${req.method} -- ${new Date()}`)
    next();
  }
};
