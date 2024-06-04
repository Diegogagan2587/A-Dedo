import User from '../models/user.js';
import bcrypt from 'bcrypt';

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
  },

  authenticate: async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const isCorrectPassword = userController.isCorrectPassword;
    const currentUser = await User.findOne({ email: email });
    const userValidated = await isCorrectPassword( password, currentUser.password );
    if (userValidated) {
      res.status(200).send('USUARIO AUTENTICADO CORRECTAMENTE');
    } else {
      const response = `ERROR AL AUTENTICAR: La contrasena es incorrecta`;
      res.status(500).send(response);
    }
  },

  isCorrectPassword: async (password, dbPassword) => {
    return bcrypt.compare(password, dbPassword);
  },
};

export default userController;
