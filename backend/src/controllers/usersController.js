import User from "../models/user.js";

const userController = {

    register: async (req, res) => {

        const { name, surname, email, password, rol, phone } = req.body;

        const user = new User({ name, surname, email, password, rol, phone });


        try {

            await user.save();
            res.status(200).send('USUARIO REGISTRADO');

        } catch (err) {

            res.status(500).send(`ERROR AL REGISTRAR USUARIO  ${err.message}`);

        }

    }
};



export default userController;