import mongoose from 'mongoose'

const connect = async () => {
    try{
     await mongoose.connect(process.env.MONGODB_URL )
     console.log("MONGODB CONNECTION SUCCESSFULL")
    }catch(error){
    console.log("DATABASE CONNECTION FAIELD")
    }
}