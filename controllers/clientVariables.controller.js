const clientVariables = (request, response) => {
    response.send({
        ACTIVATION_TIME_TO_ACTIVE_USER: process.env.ACTIVATION_TIME_TO_ACTIVE_USER,
    })
}

module.exports = clientVariables;