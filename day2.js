let totalX = 0;
let totalY = 0;
let aim = 0;

for (let i = 0; i < movement.length; i++) {
  const direction = movement[i][0];
  const distance = parseInt(movement[i][movement[i].length - 1]);
  switch (direction) {
    case "f": {
      totalX += distance;
      totalY += distance * aim;
      break;
    }
    case "d": {
      aim += distance;
      break;
    }
    case "u": {
      aim -= distance;
      break;
    }
  }
}
