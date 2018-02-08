const express = require('express');

const router = express.Router();
const ctrl = require('../controllers/ctrl_admin');
const passport = require('passport');
const passportService = require('../services/passport');

const requireAuth = passport.authenticate('jwt', { session: false });

/* GET home page. */
router.get('/isAdmin', requireAuth, ctrl.checkIfAdmin);
router.get('/admin-member-list', requireAuth, ctrl.requireAdmin, ctrl.fetchAdminMemberList);

module.exports = router;
