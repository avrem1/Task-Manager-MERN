const notFound = (req, res) => {
    res.status(404).send(
        "Oops! Could not find the resource you are looking for."
    );
};
module.exports = notFound;
