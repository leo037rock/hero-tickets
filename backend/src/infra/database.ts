import mongoose from "mongoose";

export async function connect(){
    try {
        await mongoose.connect(
            'mongodb+srv://alleece:KHzo0Mxt302N1NIY@cluster0.6enfikq.mongodb.net/hero-tickets',
            );
            console.log('Connect database success');
    } catch (error) {
        console.log(" ~ file: database.ts:5 ~ connect ~ error:", error)
    }
}