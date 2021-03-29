function meatBall (meat, flour, water, recipe) {
    const x = meat/recipe.meat;
    const y = flour/recipe.flour;
    const z = water/recipe.water;
    return Math.floor(Math.min(x, y, z)) + ' meat ball';
}

function test(fun, result) {
    console.log(fun === result)
}

const standardRecipe = {
    meat: 1,
    flour: 2,
    water: 1,
}

const tastyRecipe = {
    meat: 1.5,
    flour: 1.5,
    water: 1,
}

test(meatBall(12,25,11,standardRecipe), '11 meat ball');
test(meatBall(23,20,20,tastyRecipe), '13 meat ball');
test(meatBall(42,45,51,standardRecipe), '22 meat ball');
test(meatBall(15,55,21,standardRecipe), '15 meat ball');
test(meatBall(33,24,19,tastyRecipe), '16 meat ball');