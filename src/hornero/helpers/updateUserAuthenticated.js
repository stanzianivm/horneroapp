import { data } from "../data/MockUsersApi";

export const updateUserAuthenticated = (userUpdate) => {
  return new Promise((resolve, reject) => {
    let isUserExist = data.find((user) => {
      return user.uid === userUpdate.uid;
    });

    if (isUserExist) {
      let userIndex = data.findIndex((user) => user.uid === userUpdate.uid);

      data[userIndex] = userUpdate;

      localStorage.setItem("auth", JSON.stringify(userUpdate));

      const request = {
        ...userUpdate,
        successMessage: "User updated successfully",
      };

      setTimeout(
        () =>
          resolve({
            ok: true,
            request,
            message: "User updated successfully",
          }),
        2000
      );
    } else {
      setTimeout(
        () => reject({ ok: false, errorMessage: "Error updating user" }),
        2000
      );
    }
  });
};
