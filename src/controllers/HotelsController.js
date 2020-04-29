import Hotel from '../models/Hotel';

class HotelsController {
    async index(req, res) {
        let hotels = await Hotel.find();

        if (!hotels) {
            return res.status(404).send('Não encontramos nenhum hotel');
        }

        return res.status(200).send(hotels);
    }

    async show(req, res) {
        const  id  = req.params.id;
        let hotel = await Hotel.findOne({ _id: id });

        if (!hotel) {
            return res.status(404).send('Não encontramos nenhum hotel');
        }

        return res.status(200).send(hotel);
    }

    async update(req, res) {
        const id = req.params.id;
        const { hotelName, uf, city, address, apartmentsNumber, dailyCost } = req.body

        let hotel = await Hotel.findOneAndUpdate({ id }, {
            hotelName,
            uf,
            city,
            address,
            apartmentsNumber,
            dailyCost
        });

        return res.status(200).send(hotel);
    }

    async store(req, res) {
        const { hotelName, uf, city, address, apartmentsNumber, dailyCost } = req.body;

        let hotel = await Hotel.create({
            hotelName,
            uf,
            city,
            address,
            apartmentsNumber,
            dailyCost,
        });

        return res.json(hotel);
    }

    async destroy(req, res) {
        const id = req.params.id;

        let hotel = await Hotel.findOneAndDelete({ _id: id });

        return res.status(200).send(hotel);
    }
}

export default new HotelsController;