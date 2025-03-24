const router = require('express').Router();
const { tweetList, tweetNew, tweetCreate, tweetDelete,
    tweetEdit, tweetUpdate } =
    require('../controllers/tweets-controller');
const { ensureAuthenticated } = require('../config/security.config');   
router.get('/',ensureAuthenticated, tweetList);    // GET /tweets
router.get('/new',ensureAuthenticated, tweetNew);
router.post('/', tweetCreate);
router.get('/edit/:tweetId', tweetEdit);
router.post('/update/:tweetId', tweetUpdate);
router.delete('/:tweetId', tweetDelete);

module.exports = router;