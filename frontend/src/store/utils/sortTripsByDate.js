const sortTripsByDate = (trips) => {
  const tripsByDate = trips.reduce((acc, trip) => {
    const date = trip.origin.date; // or trip.destination.date, depending on your data
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(trip);
    return acc;
  }, {});
  return tripsByDate;
};

export default sortTripsByDate;
