const idValidator = (id) => id && /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/.test(id);
const pwValidator = (pw) => pw && /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()-_+=])[A-Za-z\d!@#$%^&*()-_+=]{6,16}$/.test(pw);
const nameValidator = (name) => name && /^[a-zA-Z가-힣]{2,50}$/.test(name);
const emailValidator = (email) => email && /^[0-9a-zA-Z._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
const telValidator = (tel) => tel && /^[0-9]{11}$/.test(tel);
const birthValidator = (birth) => birth && /^\d{4}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/.test(birth);
const genderValidator = (gender) => gender && /^(1|2)$/.test(gender);
const addressValidator = (address) => address && /^(?![\s]+$)[가-힣a-zA-Z\s]{2,}$/.test(address);

module.exports = {
  idValidator,
  pwValidator,
  nameValidator,
  emailValidator,
  telValidator,
  birthValidator,
  genderValidator,
  addressValidator
};
