function memberInRoom(names) {
    if (names.length == 0) return `only you in this room`;
    let [a, b, c, ...others] = names;
    switch (names.length) {
        case 1: return `You and ${a} in this room`;
        case 2: return `You, ${a} and ${b} in this room`;
        case 3: return `You, ${a}, ${b} and ${c} in this room`;
        default: return `You, ${a}, ${b} and ${others.length + 1} others in this room`;
    }
}

function test(fun, result) {
    console.log(fun==result)
}

test(memberInRoom([]), 'only you in this room');
test(memberInRoom(['Andi']), 'You and Andi in this room');
test(memberInRoom(['Andi', 'Budi']), 'You, Andi and Budi in this room');
test(memberInRoom(['Bobby', 'Robby', 'Merry']), 'You, Bobby, Robby and Merry in this room');
test(memberInRoom(['Joe', 'Lola', 'Robert', 'Eric', 'Carla']), 'You, Joe, Lola and 3 others in this room');