function showSalary(users, age) {
  let newArr = users.filter((user) => user.age <= age);

  let result = newArr.map((user, index) =>
    index < newArr.length - 1
      ? user.name + ", " + user.balance + "\n"
      : user.name + ", " + user.balance
  );

  return result.join("");
}
