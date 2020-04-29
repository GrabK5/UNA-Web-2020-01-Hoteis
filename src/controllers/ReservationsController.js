import Reservation from "../models/Reservation";

class ReservationsController {
    async index(req, res) {
        let reservations = await Reservation.find();

        if (!reservations) {
            return res.status(404).send("Não foi encontrada nenhuma reserva");
        }

        return res.status(200).send(reservations);
    }

    async show(req, res) {
        const id = req.params.id;

        let reservation = await Reservation.findOne({_id: id});

        if (!reservation) {
            return res.status(404).send("Não foi encontrada a reserva solicitada");
        }

        return res.status(200).send(reservation);
    }

    async update(req, res) {
        const id = req.params.id;
        const {
            responsible,
            hotel,
            period,
            guestsNumber
        } = req.body;

        let reservation = await Reservation.findOneAndUpdate({ _id: id }, {
            responsible,
            hotel,
            period,
            guestsNumber,
        });

        if (!reservation) {
            return res.status(404).send("Não foi encontrada a reserva solicitada");
        }

        return res.status(200).send(reservation);
    }

    async store(req, res) {
        const { responsible, hotel, period, guestsNumber } = req.body;

        let reservation = await Reservation.findOne({
            responsible,
            hotel,
            period,
            guestsNumber
        });

        if (!reservation) {
            reservation = await Reservation.create({
                responsible,
                hotel,
                period,
                guestsNumber,
            });

            return res.status(200).send(reservation);
        }

        return res.status(404).send("Essa reserva que está tentando cadastrar já existe!");
    }

    async destroy(req, res) {
        const id = req.params.id;

        let reservation = await Reservation.findOneAndDelete({_id: id});

        if (!reservation) {
            return res.status(404).send("Não foi encontrada a reserva solicitada");
        }

        return res.status(200).send(reservation);
    }
};

export default new ReservationsController;