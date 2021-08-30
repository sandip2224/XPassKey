const mongoose=require('mongoose')

const connectDB=async ()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI, {
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            connectTimeoutMS: 30000,
            keepAlive: 1
        })
        // console.log(`MongoDB Connected: ${conn.connection.host}`)
    }
    catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports=connectDB