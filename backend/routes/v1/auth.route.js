const express = require('express');
const authController = require('../../controllers/auth.controller');
const validate = require('../../middleware/validate');
const asyncHandler = require('../../helper/asyncHandlers');

const {signupValidation,signinValidation} =require('../../validations/auth.validation');
const router = express.Router();

router.post("/signup",validate(signupValidation),asyncHandler(authController.signup));
router.post("/signin",validate(signinValidation),asyncHandler(authController.signin));

module.exports = router;