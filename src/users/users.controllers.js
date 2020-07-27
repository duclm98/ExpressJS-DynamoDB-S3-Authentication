

exports.profile = async (req, res) => {
    return res.send(req.user);
};