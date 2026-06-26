export const registerUser = (userData) => {
  const users =
    JSON.parse(localStorage.getItem("users")) || [];

  const userExists = users.find(
    (user) => user.email === userData.email
  );

  if (userExists) {
    return {
      success: false,
      message: "Email already exists",
    };
  }

  users.push({
  ...userData,
  role: "user",
});

  localStorage.setItem(
    "users",
    JSON.stringify(users)
  );

  return {
    success: true,
  };
};

export const loginUser = (
  email,
  password
) => {
  const users =
    JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    (u) =>
      u.email === email &&
      u.password === password
  );

  if (!user) {
    return {
      success: false,
    };
  }

  localStorage.setItem(
    "currentUser",
    JSON.stringify(user)
  );

  return {
    success: true,
    user,
  };
};