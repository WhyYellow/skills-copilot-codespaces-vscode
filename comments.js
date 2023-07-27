//Create web sever
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const auth = require('../middleware/auth');
const {check} = require('express-validator');

//Create comment
// api/comment
router.post('/',
    auth,
    [
        check('name', 'The name is required').not().isEmpty(),
        check('email', 'Add a valid email').isEmail(),
        check('message', 'The message is required').not().isEmpty()
    ],
    commentController.createComment
);

//Get all comments for a project
router.get('/',
    auth,
    commentController.getComments
);

//Update comment
router.put('/:id',
    auth,
    commentController.updateComment
);

//Delete comment
router.delete('/:id',
    auth,
    commentController.deleteComment
);

module.exports = router;


