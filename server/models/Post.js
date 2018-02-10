import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema({
   title: { 
       type: String, 
       required: true 
    },
   link: String,
   text: String,
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
    _comments: [{
        type: Schema.ObjectId,
        ref: 'Comment'
    }]
});

const autoPopulateCreator = next => {
    this.populate({
        path: '_creator',
        select: 'username dateCreated-_id'
    });
};

postSchema.pre('find', autoPopulateCreator);

const Post = mongoose.model('Post', postSchema);
export default Post;