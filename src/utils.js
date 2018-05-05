export function formatRent(rent) {
  const rentStr = String(rent);
  if (rentStr.length > 3 && rentStr.length < 7) {
    const rentArr = rentStr.split("");
    return `$${rentArr[0]},${rentArr.slice(1).join("")}`;
  } else {
    return "$" + rentStr;
  }
}
