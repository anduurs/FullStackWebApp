import mongoose from 'mongoose';

const { Schema } = mongoose;

const commentSchema = new Schema({
   text: {
       type: String,
       required: true
   },
   isDeleted: { 
       type: Boolean, 
       default: false
    },
   dateCreated: { 
       type: Date, default: 
       Date.now
    },
   _creator: { 
       type: Schema.ObjectId, 
       ref: 'User'
    },
    _post: {
        type: Schema.ObjectId,
        ref: 'Post'
    }
});

const autoPopulateCreator = next => {
    this.populate({
        path: '_creator',
        select: 'username dateCreated-_id'
    });
    next();
};

commentSchema.pre('find', autoPopulateCreator);

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;