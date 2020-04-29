import { Schema, model } from 'mongoose';

const ReservationSchema = new Schema ({
    responsible: String,
    hotel: String,
    period: {
        inicialDate: Date,
        finalDate: Date,
    },
    guestsNumber: Number,
});

export default model('Reservation', ReservationSchema);