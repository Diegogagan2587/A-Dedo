import Trip from '../models/trip.js'

const tripsController = {
    index: async (req, res) => {
        try {
            const trips = await Trip.find().populate('passengers messages_trip').populate({
              path: "driver",
              select: "fullName",
              populate: "vehicle"
            });
            res.status(200).json(trips);
        } catch (err) {
            console.log("Error fetching trips: ", err);
            res.status(500).json({ error: 'Error fetching trips' });
        }
    },
    create: async (req, res) => {
        const {
            driver,
            origin,
            destination,
            seats,
            price,
            stops,
            pets,
            childrens,
            acceptFood,
            notes,
            passengers
        } = req.body;

        try {
            const newTrip = new Trip({
                driver: driver,
                origin: {
                    address: origin.address,
                    city: origin.city,
                    postalCode: origin.postalCode,
                    date: new Date(origin.date),
                    time: origin.time
                },
                destination: {
                    address: destination.address,
                    city: destination.city,
                    postalCode: destination.postalCode,
                    date: new Date(destination.date),
                    time: destination.time
                },
                seats: parseInt(seats, 10),
                price,
                stops,
                pets,
                childrens,
                acceptFood,
                notes,
                passengers
            });
            await newTrip.save();
            console.log("viaje guradado");
            res.status(201).json(newTrip); // 201 created

        } catch (err) {
            console.error("----error in trips controller below----");
            console.error("Error creating a trip: ", err)
            if(err.name === 'ValidationError'){
              res.status(400).json({ error: 'Validation Error', details: err.errors });
            } else {
              console.error(err.name);
              res.status(500).json({ error: 'ERROR AL CREAR VIAJE ' });
            }

        }
    }


}
export default tripsController;