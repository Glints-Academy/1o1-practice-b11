function memberInRoom(names,sort) {
    if (names.length == 0) return `only you in this room`;
    if (sort=='AZ') names.sort();
    if (sort=='ZA') names.sort().reverse();
    let [a, b, c, ...others] = names;
    switch (names.length) {
        case 1: return `You and ${a} in this room`;
        case 2: return `You, ${a} and ${b} in this room`;
        case 3: return `You, ${a}, ${b} and ${c} in this room`;
        default: return `You, ${a}, ${b} and ${others.length + 1} others in this room`;
    }
}

function test(fun, result) {
    console.log(fun===result)
}

test(memberInRoom([],"AZ"), 'only you in this room');
test(memberInRoom(['Andi'],"AZ"), 'You and Andi in this room');
test(memberInRoom(['Andi', 'Budi'],"ZA"), 'You, Budi and Andi in this room');
test(memberInRoom(['Bobby', 'Robby', 'Merry'],"AZ"), 'You, Bobby, Merry and Robby in this room');
test(memberInRoom(['Joe', 'Lola', 'Robert', 'Eric', 'Carla'],"ZA"), 'You, Robert, Lola and 3 others in this room');