const { ASSET_URL_TYPE } = require("../../constants");
const { User } = require("../../models");
const {
  users: {
    commonUserControllerQueries: { emailExits },
  },
  common: {
    updateControllerQueries: { update },
    getOneControllerQueries: { getOne },
  },
  CustomErrorHandler,
} = require("../../services");
const { successResponse, getAssetPath, deleteFiles } = require("../../utils");

const updateUserController = {
  async updateUser(req, res, next) {
    try {
      const {
        sanitizedBody: { name, email },
        file: { filename } = {},
        sanitizedParams: { userId },
      } = req;

      const user = await getOne(User, userId);

      if (!user) throw CustomErrorHandler.notFound("User");

      if (user.email !== email) {
        const emailExists = await emailExits(email);

        if (emailExists)
          throw CustomErrorHandler.customClientMessage("Email already exists");
      }

      const updatePayload = { name, email };
      if (filename) {
        updatePayload.profileImage = filename;

        const profileImagePath = getAssetPath(
          ASSET_URL_TYPE.userProfileImage,
          user.profileImage
        );

        deleteFiles([{ path: profileImagePath }]);
      }

      await update(User, userId, updatePayload);

      successResponse(res, 200, "User updated successfully");
    } catch (error) {
      console.error("ERROR IN UPDATE USER CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = updateUserController;
