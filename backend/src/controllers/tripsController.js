import Trip from '../models/trip.js'

const tripsController = {
    index: async (req, res) => {
        try {
            const trips = await Trip.find().populate('driver passengers messages_trip');
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
                driver: mongoose.Types.ObjectId(driverId),
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
            res.status(200).json(newTrip);

        } catch (err) {
            console.log("----error in trips controller below");
            console.log(err);
            res.status(500).json({ error: 'ERROR AL CREAR VIAJE ' });
        }
    }


}
export default tripsController;