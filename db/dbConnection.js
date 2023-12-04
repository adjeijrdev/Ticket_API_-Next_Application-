import mongoose from 'mongoose'

export const dbConn = ()=>{
 mongoose.connect(process.env.MONGO_URI)
 .then(
    console.log(`connected to the database`)
 )
 .catch((e)=>{
    console.log(e)
 })

}