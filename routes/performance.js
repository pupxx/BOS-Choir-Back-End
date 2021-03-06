const express = require('express');
const ctrl = require('../controllers/ctrl_performance');
const passport = require('passport');
const passportService = require('../services/passport');

const router = express.Router();
const requireAuth = passport.authenticate('jwt', { session: false });

router.get('/', ctrl.getAllPerformances);
router.get('/member/landing', requireAuth, ctrl.getAllProtectedPerformances);
router.post('/attendance/:id', requireAuth, ctrl.performanceAttendanceTrue);
router.delete('/attendance/not-attending/:id', requireAuth, ctrl.performanceAttendanceFalse);

module.exports = router;
