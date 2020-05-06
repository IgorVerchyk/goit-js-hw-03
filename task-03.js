const findBestEmployee = function (employees) {
  const maxTaskNumber = Math.max(...Object.values(employees));
  for (const bestEmployee of Object.keys(employees))
    if (employees[bestEmployee] === maxTaskNumber) {
      return bestEmployee;
    }
};
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
);

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
);

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
);
