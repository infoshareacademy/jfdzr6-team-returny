export const getFormData = (e, role) => {
    const form = e.target;
    const { profilePicture, email, password } = form;
    console.log(email.value);
    return role === "register"
      ? {
          email: email.value,
          password: password.value,
        //   profilePicture: profilePicture.files[0],
        }
      : role === "login"
      ? {
          email: email.value,
          password: password.value,
        }
      : { email: email.value };
  };
  