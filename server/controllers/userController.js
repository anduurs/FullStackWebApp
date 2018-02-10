import db from './../models';

const userController = {};

userController.post = (req, res) => {
    console.log(req.body);
    
    const { username, password } = req.body;
    
    // TODO:  Do validation here

    const user = new db.User({
        username,
        password
    });

    user.save().then(newUser => {
        res.status(200).json({
            success:true,
            data:newUser,
        });
    }).catch((err) => {
        res.status(500).json({
            message:err,
        });
    });
};

export default userController;