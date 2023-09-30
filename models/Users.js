import mongoose from "mongoose"

const Users = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Your name is required"]
    },
    email: {
        type: String,
        required: [true, "Your email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Your password is required"]
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const User = mongoose.model("Users",Users)

export default User