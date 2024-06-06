import Trip from '../models/trip.js'

const tripsController = {
    create: async (req, res) => {
        const { destination_point, starting_point, description, date_publication, date_start_trip, ocupation, messages_trip } = req.body;

        try {
            const newTrip = new Trip({
                destination_point,
                starting_point,
                description,
                date_publication,
                date_start_trip,
                ocupation,
                messages_trip
            });
            await newTrip.save();
            console.log("viaje guradado");
            res.status(200).json(newTrip);

        } catch (err) {
            res.status(500).json({ error: 'ERROR AL CREAR VIAJE ' });
        }
    }

}
export default tripsController;