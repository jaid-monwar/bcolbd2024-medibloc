const express = require("express");
const { auth, adminAuth } = require("../../middlewares/auth");
const validate = require("../../middlewares/validate");
const userValidation = require("../../validations/user.validation");
const diagnosisValidation = require("../../validations/diagnosis.validation");
const diagnosisController = require("../../controllers/diagnosis.controller");
const { uploadFileToS3 } = require("../../utils/fileUpload");

const router = express.Router();

router
  .route("/:id")
  .get(
    auth,
    validate(diagnosisValidation.getDiagnosisById),
    diagnosisController.getDiagnosisById
  );

router
  .route("/")
  .post(auth, uploadFileToS3, diagnosisController.createDiagnosis)
  .get(auth, diagnosisController.getDiagnoses);

module.exports = router;
