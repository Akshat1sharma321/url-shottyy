import mongoose from "mongoose";

const connect_mongoDB = async()=>{
    console.log(process.env.MONGODB_URI)
return await mongoose.connect(process.env.MONGODB_URI as string)
}

export default connect_mongoDB ; 