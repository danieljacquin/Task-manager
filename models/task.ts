import mongoose from 'mongoose';
const { Schema } = mongoose;


const taskSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})


export const task = mongoose.model('Task', taskSchema);

