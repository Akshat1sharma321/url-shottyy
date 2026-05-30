import mongoose, { Model } from "mongoose";
import { unique } from "next/dist/build/utils";

const urlSchema = new mongoose.Schema({
 originalUrl :{
    type : String , 
    required : true , 
    unique : true
 } , 
 shortUrl : {
    type : String ,  
    required : true , 
    unique : true 
 }
},{
    timestamps : true 
})

export interface IURL extends Document{
    originalUrl : string , 
    shortUrl : string
}

const Url : Model<IURL> = mongoose.models.Url || mongoose.model<IURL>('Url' , urlSchema) ; 

export default Url ;  