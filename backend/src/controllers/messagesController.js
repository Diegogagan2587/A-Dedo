const messagesController = (request, response)=>{
    response.send(JSON.stringify("here is the message controller"));
};

export default messagesController;