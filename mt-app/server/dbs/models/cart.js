import mongoose from 'mongoose'
import axios from 'axios'

const Schema = mongoose.Schema

const Cart = new Schema({
    id: {
        type: String,
        required: true
    },
    detail: {
        type: Array,
        required: true
    },
    cartNo: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
})

export default mongoose.model('cart', Cart)