import mongoose from 'mongoose'

const Schema = mongoose.Schema

const area = new Schema({
    id: {
        type: String,
        required: true
    },
    value: {
        type: Array,
        required: true
    }
})

export default mongoose.model('area', area)