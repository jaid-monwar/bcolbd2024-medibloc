const USER_STATUS = {
  ACTIVE: "active",
  INACTIVE: "inactive",
  OTHER: "other",
};

const USER_ACCESS = {
  POSITIVE: "positive",
  NEGATIVE: "negative",
  OTHER: "other",
};

const USER_TYPE = {
  ADMIN: "admin",
  USER: "user",
};

const ORG_DEFAULT_USER = {
  ADMIN: "admin",
};

const BLOCKCHAIN_DOC_TYPE = {
  APPROVAL: "approval",
  PRESCRIPTION: "prescription",
  PERSONALINFO: "personalinfo",
  DIAGNOSIS: "diagnosis",
  MEDICATION: "medication",
  MEDCOUNT: "medcount",
};

const FILTER_TYPE = {
  COMPLETED: "completed",
  EXPIRING_SOON: "expiring-soon",
  INPROGRESS: "inprogress",
  ALL: "all",
  ACTIVE: "active",
};

// CHANGE
const NETWORK_ARTIFACTS_DEFAULT = {
  CHANNEL_NAME: "mychannel",
  CHAINCODE_NAME: "data",
  QSCC: "qscc",
};

const ORG_DEPARTMENT = {
  DOCTOR: "doctor",
  PHARMACIST: "pharmacist",
  PATIENT: "patient",
};

const ORG_INSTITUTION_NAME = {
  SQUARE: "square",
  LAZZ: "lazz pharma",
};

const ORG_LOCATION = {
  DHAKA: "dhaka",
};

// CHANGE
const CHAINCODE_METHODS = {
  CREATE_AGREEMENT: "",
  APPROVE_AGREEMENT: "",
  GET_ASSET_BY_ID: "",
  GET_ASSET_HISTORY: "",
  GET_APPROVALS: "",
};

const AGREEMENT_STATUS = {
  ACTIVE: "active",
  INPROGRESS: "inprogress",
  EXPIRED: "expired",
  PENDING: "pending",
  COMPLETED: "completed",
  OTHER: "other",
};
const APPROVAL_STATUS = {
  APPROVED: "approved",
  REJECTED: "rejected",
  OTHER: "other",
  ACTIVE: "active",
  INACTIVE: "inactive",
};

module.exports = {
  USER_STATUS,
  USER_ACCESS,
  USER_TYPE,
  ORG_DEPARTMENT,
  ORG_INSTITUTION_NAME,
  ORG_LOCATION,
  NETWORK_ARTIFACTS_DEFAULT,
  BLOCKCHAIN_DOC_TYPE,
  CHAINCODE_METHODS,
  AGREEMENT_STATUS,
  APPROVAL_STATUS,
  FILTER_TYPE,
};
