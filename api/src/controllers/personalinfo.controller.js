const httpStatus = require("http-status");
const pick = require("../utils/pick");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { userService, personalInfoService } = require("../services");
const { getPagination } = require("../utils/pagination");
const { getSuccessResponse } = require("../utils/Response");

const createPersonalInfo = catchAsync(async (req, res) => {
  let { user } = req.loggerInfo;
  console.log("============user========", user);
  const result = await personalInfoService.createPersonalInfo(req.body, user);
  res
    .status(httpStatus.CREATED)
    .send(
      getSuccessResponse(
        httpStatus.CREATED,
        "Personal info form created successfully",
        result
      )
    );
});

const approveAgreement = catchAsync(async (req, res) => {
  let { user } = req.loggerInfo;
  let approvalData = req.body;
  let agreementId = req.params.id;
  const result = await agreementService.approveAgreement(
    approvalData,
    agreementId,
    user
  );
  res
    .status(httpStatus.CREATED)
    .send(
      getSuccessResponse(
        httpStatus.CREATED,
        "approval submitted successfully",
        result
      )
    );
});

const getSignedURL = catchAsync(async (req, res) => {
  let { user } = req.loggerInfo;
  let docId = req.params.id;
  let url = await agreementService.getDocSignedURL(docId, user);
  res.status(httpStatus.OK).send(
    getSuccessResponse(httpStatus.OK, "Signed URL fetched successfully", {
      signedURL: url,
      docId,
    })
  );
});

const getPersonalInfos = catchAsync(async (req, res) => {
  const { pageSize, bookmark, filterType } = req.query;

  let { orgId, email } = req.loggerInfo.user;
  let orgName = `org${orgId}`;

  let filter = {
    orgId: parseInt(req.loggerInfo.user.orgId),
    pageSize: pageSize || 10,
    bookmark: bookmark || "",
    orgName,
    email,
    filterType,
  };

  console.log(filter);

  let data = await personalInfoService.queryPersonalInfos(filter);
  if (data?.data) {
    data.data = data.data.map((elm) => elm.Record);
  }

  res
    .status(httpStatus.OK)
    .send(
      getSuccessResponse(httpStatus.OK, "Users fetched successfully", data)
    );
});

const getHistoryById = catchAsync(async (req, res) => {
  const { id } = req.params;

  let { user } = req.loggerInfo;
  let data = await agreementService.queryHistoryById(id, user);

  res
    .status(httpStatus.OK)
    .send(
      getSuccessResponse(httpStatus.OK, "Agreement fetched successfully", data)
    );
});

const getApprovalsByAgreementId = catchAsync(async (req, res) => {
  const { pageSize, bookmark } = req.query;
  const agreementId = req.params.id;
  let { orgId, email } = req.loggerInfo.user;
  let orgName = `org${orgId}`;

  let filter = {
    orgId: parseInt(req.loggerInfo.user.orgId),
    pageSize: pageSize || "10",
    bookmark: bookmark || "",
    orgName,
    email,
    agreementId,
  };

  let data = await agreementService.queryApprovalsByAgreementId(filter);
  data = data.data.map((elm) => elm.Record);
  res.status(httpStatus.OK).send(
    getSuccessResponse(httpStatus.OK, "Users fetched successfully", {
      approvals: data,
    })
  );
});

const getPersonalInfoById = catchAsync(async (req, res) => {
  const { id } = req.params;

  let { user } = req.loggerInfo;
  let data = await agreementService.queryPersonalInfoById(id, user);

  res
    .status(httpStatus.OK)
    .send(
      getSuccessResponse(
        httpStatus.OK,
        "Personal Information fetched successfully",
        data
      )
    );
});

const getUser = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  res
    .status(httpStatus.OK)
    .send(getSuccessResponse(httpStatus.OK, "User fetched successfully", user));
});

const updateUser = catchAsync(async (req, res) => {
  const user = await userService.updateUserById(req.params.userId, req.body);
  res.send(user);
});

const deleteUser = catchAsync(async (req, res) => {
  await userService.deleteUserById(req.params.userId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createPersonalInfo,
  getPersonalInfos,
  getUser,
  updateUser,
  deleteUser,
  getPersonalInfoById,
  approveAgreement,
  getApprovalsByAgreementId,
  getSignedURL,
  getHistoryById,
};
