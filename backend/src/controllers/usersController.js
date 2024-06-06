import User from '../models/user.js';
import bcrypt from 'bcrypt';

const userController = {
  register: async (req, res) => {
    const { name, surname, email, password, rol, phone } = req.body;
    const user = new User({ name, surname, email, password, rol, phone });

    try {
      await user.save();
      res.status(200).json({message:'USUARIO REGISTRADO'});
    } catch (err) {
      res.status(500).json({error: `ERROR AL REGISTRAR USUARIO  ${err.message}`});
    }
  },

  authenticate: async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const isCorrectPassword = userController.isCorrectPassword;
    const currentUser = await User.findOne({ email: email });
    if(!currentUser){ return res.status(404).json({error:'User Not Found!'}); }// stop execution if user not found
    const userValidated = await isCorrectPassword( password, currentUser.password );
    if (userValidated) {
      const { _id, name, surname,  calification, history_trip, messages ,  phone, rol  } = currentUser;
      const data = { _id, name, surname,  calification, history_trip, messages ,  phone, rol  };
      res.status(200).json({message: 'USUARIO AUTENTICADO CORRECTAMENTE' , data: data });
    } else {
      const response = `ERROR AL AUTENTICAR: LA CONTRASEÑA ES INCORRECTA`;
      res.status(500).json({message: response});
    }
  },

  isCorrectPassword: async (password, dbPassword) => {
    return bcrypt.compare(password, dbPassword);
  },
};

export default userController;
