const inputElement = document.getElementById("password");
const btnElement = document.getElementById("btn");
const copyElement = document.getElementById("copy");

const generatePassword = () => {
  const chars =
    "ABCDEFJHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890-=+[]{}/<>?!@#$%^&*()";

  let password = "";
  for (let i = 0; i < 8; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  inputElement.value = password;
};

btnElement.addEventListener("click", generatePassword);
copyElement.addEventListener("click", () => {
  const passwordCopy = password.value.trim();
  if (!passwordCopy) {
    alert("No password to copy!Please generate a password first!");
    return;
  }

  navigator.clipboard.writeText(passwordCopy).then(() => {
    alert("Password copied successfully");
  });
});
