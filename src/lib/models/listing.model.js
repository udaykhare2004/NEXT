import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        clerkId: {
            type:String,
            required:true,
            unique:true,
        },
        email: {
            type:String,
            required:true,
            unique:true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        profilePicture: {
            type: String,
            required: true,
        },
    },
    { timestamps: true}
);

const User = mongoose.models.Use || mongoose.model('User', userSchema);

export default User;