const Joi = require("joi");
const { USER_DEPARTMENT, APPROVAL_STATUS } = require("../utils/Constants");
const { password } = require("./custom.validation");
const { count } = require("console");

const createPrescription = Joi.object().keys({
  firstParty: Joi.string().required(),
  secondParty: Joi.string().required(),
  thirdParty: Joi.string().required(),
});

const getPrescriptionById = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

const createPersonalInfo = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    age: Joi.string().required(),
    phone: Joi.string().required(),
    address: Joi.string().required(),
    // status: Joi.string()
    //   .required()
    //   .valid(
    //     APPROVAL_STATUS.APPROVED,
    //     APPROVAL_STATUS.REJECTED,
    //     APPROVAL_STATUS.OTHER
    //   ),
  }),
};

const createDiagnosis = {
  body: Joi.object().keys({
    diagnosis: Joi.string().required(),
    comment: Joi.string().required(),
  }),
};

const createMedication = {
  body: Joi.object().keys({
    medication: Joi.string().required(),
    dosage: Joi.string().required(),
    timePeriod: Joi.string().required(),
    comment: Joi.string().required(),
    // status: Joi.string()
    //   .required()
    //   .valid(
    //     APPROVAL_STATUS.ACTIVE,
    //     APPROVAL_STATUS.INACTIVE
    //   ),
  }),
};

const createMedcount = {
  body: Joi.object().keys({
    medication: Joi.string().required(),
    count: Joi.string().required(),
    comment: Joi.string().required(),
  }),
};

// const approveAgreement = {
//   body: Joi.object().keys({
//     description: Joi.string().required(),
//     action: Joi.string().required(),
//     comment: Joi.string().required(),
//     status: Joi.string()
//       .required()
//       .valid(
//         APPROVAL_STATUS.APPROVED,
//         APPROVAL_STATUS.REJECTED,
//         APPROVAL_STATUS.OTHER
//       ),
//   }),
// };

const getSignedURL = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

const getPersonalInfos = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

const getDiagnoses = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

const getMedication = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

const getMedcount = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

const getAgreementApprovals = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};
const getPrescriptionHistory = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

module.exports = {
  createPrescription,
  // approveAgreement,
  createPersonalInfo,
  createDiagnosis,
  createMedication,
  createMedcount,
  getAgreementApprovals,
  getPrescriptionHistory,
  getPersonalInfos,
  getDiagnoses,
  getMedication,
  getMedcount,
  getPrescriptionById,
  getSignedURL,
};
