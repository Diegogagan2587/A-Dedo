import User from '../models/user.js';
import Vehicle from '../models/vehicle.js';
import bcrypt from 'bcrypt';

const userController = {
  register: async (req, res) => {
    const { fullName, email, password, rol = 'passenger', phone } = req.body;
    const user = new User({ fullName, email, password, rol, phone });

    try {
      await user.save();
      res.status(200).json({message:'USUARIO REGISTRADO', data: user});
    } catch (err) {
      res.status(500).json({error: `ERROR AL REGISTRAR USUARIO  ${err.message}`});
    }
  },

  registerDriver: async (req, res) => {
    const {driver, makeAndModel } = req.body;

    try {
      // Fin user by ID
      const user = User.findByID(driver);
      if(!user){
        return res.status(404).json({message: 'User not found'});
      }
      // Create a new vehicle
      const vehicle = new Vehicle({ driver, makeAndModel })
      await vehicle.save();
      // Add the new vehicle's ID to the user's vehicles array
      user.vehicle = vehicle._id;
      await user.save();
      res.status(200).json({message:"Driver registered successfullly",vehicle})
    } catch (err) {
      console.error('Error in registerDriver:',err);
      res.status(500).json({error: "An error occurred while registerig the driver"})
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
      const { _id, fullName,  calification, history_trip, messages ,  phone, rol  } = currentUser;
      const data = { _id, fullName,  calification, history_trip, messages ,  phone, rol  };
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
