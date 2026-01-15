const homeRoute = (req, res) => {
    res.send('Hello');
};

const kayliRoute = (req, res) => {
    res.send('Hello Kayli');
};

const montyRoute = (req, res) => {
    res.send('Hello Monty');
};

module.exports = {
    homeRoute,
    kayliRoute,
    montyRoute
}