import { usersData } from "./data/MockUsersApi";

export const loginUser = (loginData) => {
  return new Promise((resolve, reject) => {
    const user = usersData.find((user) => {
      return (
        user.email === loginData.email && user.password === loginData.password
      );
    });

    if (user) {
      const data = {
        token: { accessToken: createToken(), expires: createDateExpired() },
        user: user,
      };

      setTimeout(() => resolve({ ok: true, data }), 2000);
    } else {
      setTimeout(
        () => reject({ ok: false, error: "Incorrect email or password" }),
        2000
      );
    }
  }).then((response) => {
    if (response.data.token) {
      localStorage.setItem("auth", JSON.stringify(response.data));
    }

    return response;
  });
};

export const registerUser = (userRegister) => {
  return new Promise((resolve, reject) => {
    let isEmailExist = usersData.find((user) => {
      return user.email === userRegister.email;
    });

    if (!isEmailExist) {
      let lastUser = usersData.slice(-1).pop();

      userRegister["uid"] = lastUser.uid + 1;

      usersData.push(userRegister);

      const data = {
        token: { accessToken: createToken(), expires: createDateExpired() },
        user: userRegister,
      };

      setTimeout(
        () =>
          resolve({
            ok: true,
            data,
            successMessage: "User added successfully",
          }),
        2000
      );
    } else {
      setTimeout(() => reject({ ok: false, error: "Email exist" }), 2000);
    }
  }).then((response) => {
    if (response.data.token) {
      localStorage.setItem("auth", JSON.stringify(response.data));
    }
    console.log(response);

    return response;
  });
};

export const updateUser = (userUpdate) => {
  return new Promise((resolve, reject) => {
    let isUserExist = usersData.some((user) => {
      return user.email === userUpdate.email;
    });

    if (isUserExist) {
      let userIndex = usersData.findIndex(
        (obj) => obj.email === userUpdate.email
      );

      let userArray = usersData.find((item) => {
        if (item.email === userUpdate.email) {
          item.username = "pepe";
        }
      });

      console.log("ud", userArray);
      // usersData[userIndex] = userUpdate.username;
      // usersData[userIndex].rol = userUpdate.rol;

      const user = usersData[userIndex];

      const data = {
        user: user,
      };

      setTimeout(
        () =>
          resolve({
            ok: true,
            data,
            successMessage: "User updated successfully",
          }),
        2000
      );
    } else {
      setTimeout(
        () => reject({ ok: false, errorMessage: "Error updating user" }),
        2000
      );
    }
  })
    .then((response) => {
      console.log("response", response);
      if (response.ok) {
        // console.log(response);

        localStorage.setItem("auth", JSON.stringify(response.data));
      }
      return response;
    })
    .catch((e) => {
      console.log("error", e);
    });
};

export const logout = () => {
  localStorage.removeItem("auth");
};

const createToken = () => {
  return Math.random().toString(36);
};

const createDateExpired = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  return tomorrow;
};
