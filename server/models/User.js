import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: [5, 'Username must be 5 characters or more.'],
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'Password must be 8 characters or more.'],
    },
    isDeleted: { 
        type: Boolean, 
        default: false
    },
    dateCreated: { 
        type: Date, 
        default: Date.now
    },
});

// Write some encryption here

const User = mongoose.model('User', userSchema);
export default User;