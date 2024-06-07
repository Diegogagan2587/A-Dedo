const sortTripsByDate = (trips) => {
    console.log('Trips accessed from Home: ', trips);
  const tripsByDate = trips.reduce((acc, trip) => {
    const date = trip.origin.date; // or trip.destination.date, depending on your data
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(trip);
    return acc;
  }, {});
  console.log('Trips grouped by date: ', tripsByDate); 
  return tripsByDate;
};

export default sortTripsByDate;
