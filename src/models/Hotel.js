import { Schema, model } from 'mongoose';

const HotelSchema = new Schema ({
    hotelName: String,
    uf: String,
    city: String,
    address: String,
    apartmentsNumber: Number,
    dailyCost: Number,
});

export default model('Hotel', HotelSchema);