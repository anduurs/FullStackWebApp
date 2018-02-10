import db from './../models';

const commentController = {};

commentController.post = (req, res) => {
    console.log(req.body);
    
    const { 
        text,
        userId, 
        postId, 
    } = req.body;
    
    // TODO:  Do validation here

    const comment = new db.Comment({
        text,
        _creator: userId,
        _post: postId,
    });

    comment.save().then(newComment => {
        // Update the post with the new comment by pushing it to the 
        // list of comments in the post entry
        db.Post.findByIdAndUpdate(
            postId,
            { $push: {'_comments' : newComment._id}}
        ).then(existingPost => {
            res.status(200).json({
                success:true,
                data:newComment,
                existingPost,
            });
        }).catch(err => {
            res.status(500).json({
                message:err,
            });
        });
    }).catch(err => {
        res.status(500).json({
            message:err,
        });
    });
};

export default commentController;