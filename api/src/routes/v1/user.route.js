const express = require("express");
const { auth, adminAuth } = require("../../middlewares/auth");
const validate = require("../../middlewares/validate");
const userValidation = require("../../validations/user.validation");
const userController = require("../../controllers/user.controller");

const router = express.Router();

// Admin Routes
router
  .route("/:id")
  .put(
    adminAuth,
    validate(userValidation.updateUserStatus),
    userController.updateUserStatus
  );

router
  .route("/")
  .post(
    adminAuth,
    validate(userValidation.createUser),
    userController.createUser
  )
  .get(adminAuth, validate(userValidation.getUsers), userController.getUsers);

// Patient Routes
router
  .route("access/doctors/:id")
  .put(
    auth,
    validate(userValidation.updateUserAccess),
    userController.updateUserAccess
  );

router
  .route("access/pharmacists/:id")
  .put(
    auth,
    validate(userValidation.updateUserAccess),
    userController.updateUserAccess
  );

router
  .route("access/doctors/")
  .get(auth, validate(userValidation.getDoctors), userController.getDoctors);

router
  .route("access/pharmacists/")
  .get(
    auth,
    validate(userValidation.getPharmacists),
    userController.getPharmacists
  );

module.exports = router;
