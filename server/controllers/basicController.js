const basicController = {};

basicController.get = (req, res) => {
    res.json({
        message : 'Welcome to my API'
    });
};

export default basicController;