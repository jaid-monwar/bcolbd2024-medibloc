const Joi = require("joi");
const { USER_DEPARTMENT, APPROVAL_STATUS } = require("../utils/Constants");
const { password } = require("./custom.validation");

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
  getPrescriptionHistory,
  getPersonalInfos,
  getDiagnoses,
  getPrescriptionById,
  getSignedURL,
};
