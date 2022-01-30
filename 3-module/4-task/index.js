function showSalary(users, age) {
  let newArr = users.filter((user) => user.age <= age);

  let result = newArr.map((user) => user.name + ", " + user.balance);

  return result.join("\n");
}
