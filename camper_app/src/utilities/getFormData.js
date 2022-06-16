export const getFormData = (e, role) => {
  const form = e.target;
  const { email, password, name, telephone } = form;
  console.log(email.value);
  return role === "register"
    ? {
        displayName: name.value,
        telephone: telephone.value,
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
