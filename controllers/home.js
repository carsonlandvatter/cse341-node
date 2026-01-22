const homeRoute = (req, res) => {
    //#swagger.tags=['Hello']
    res.send('Hello');
};

module.exports = {
    homeRoute
}