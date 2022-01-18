function checkSpam(str) {
  let str2 = str.toLowerCase();
  if (str2.includes("1xbet") || str2.includes("xxx")) {
    return true;
  }
  return false;
}
