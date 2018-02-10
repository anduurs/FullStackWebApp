import db from './../models';

const postController = {};

postController.post = (req, res) => {
    console.log(req.body);

    const {
        title,
        text,
        link,
        userId
    } = req.body;

    // Do validation here for either text or link or both

    const post = new db.Post({
        title,
        text,
        link,
        _creator: userId,
    });

    post.save().then(newPost => {
        res.status(200).json({
            success:true,
            data:newPost,
        });
    }).catch((err) => {
        res.status(500).json({
            message:err,
        });
    });
};

postController.getAll = (req, res) => {
    db.Post.find({}).then(posts => {
        return res.status(200).json({
            success:true,
            data:posts,
        });
    }).catch((err) => {
        res.status(500).json({
            message:err,
        });
    });
};

export default postController;