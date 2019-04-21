import mongoose from 'mongoose'

const Schema = mongoose.Schema

const Order = new Schema({
    count: {
        type: Number,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

export default mongoose.model('order', Order)