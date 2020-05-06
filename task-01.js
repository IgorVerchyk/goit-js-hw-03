const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};
user.mood = "happy";
user.hobby = "Skydiving";
user.premium = false;
for (const key of Object.keys(user)) {
  console.log(key, user[key]);
}
