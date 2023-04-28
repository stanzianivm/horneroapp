import { data } from "../data/MockUsersApi";

export const getUserById = (id) => {
  return new Promise((resolve, reject) => {
    let user = data.find((user) => {
      return user.id === id;
    });

    if (user) {
      setTimeout(() => resolve(user), 2000);
    } else {
      setTimeout(() => reject("El usuario no existe"), 2000);
    }
  });
};
