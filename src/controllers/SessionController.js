import Usuario from '../models/Usuario';

class SessionController {
    async store (req, res) {
        const { email } = req.body;

        let usuario = await Usuario.findOne({email});

        if(!usuario) {
            await Usuario.create({email});
        }

        return res.json(usuario);
    }
}

export default new SessionController;