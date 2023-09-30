//uncomment this code once you have created a 
//new project in your mongodb account and 
//added the mongodb connection url in the config.env file



// import mongoose from "mongoose";

// export const connectDB = () => {
//     mongoose
//     .connect(process.env.MONGO_URI,{
//         dbName: "users" ,
//         useNewUrlParser : true ,
//         useUnifiedTopology: true
//     })
//     .then(() => {
//         console.log("Connected to database")
//     })
//     .catch((err) => {
//         console.error(err)
//     })
// }