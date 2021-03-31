function meatBall (meat, flour, water, recipe) {
    const x = meat/recipe.meat;
    const y = flour/recipe.flour;
    const z = water/recipe.water;
    const meatBallCanMake = Math.floor(Math.min(x, y, z));
    if (x==meatBallCanMake&&y==meatBallCanMake&&z==meatBallCanMake) {
        return `${meatBallCanMake} meat ball`;
    } else {
        let text = `${meatBallCanMake} meat ball with` 
            + `${x==meatBallCanMake?"":" "+(meat-(meatBallCanMake*recipe.meat))+" meat,"}`
            + `${y==meatBallCanMake?"":" "+(flour-(meatBallCanMake*recipe.flour))+" flour,"}`
            + `${z==meatBallCanMake?"":" "+(water-(meatBallCanMake*recipe.water))+" water,"}`
        let textList = text.split(",");
        if (textList.length>2) textList[textList.length-2] = ' and' + `${textList[textList.length-2]}`;
        if (textList.length>3) return textList.join(",").slice(0, -1) + ' remain';
        else return textList.join("") + ' remain';
    }
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

test(meatBall(30,61.5,30,standardRecipe), '30 meat ball with 1.5 flour remain');
test(meatBall(12,25,11,standardRecipe), '11 meat ball with 1 meat and 3 flour remain');
test(meatBall(23,20,20,tastyRecipe), '13 meat ball with 3.5 meat, 0.5 flour, and 7 water remain');
test(meatBall(42,45,51,standardRecipe), '22 meat ball with 20 meat, 1 flour, and 29 water remain');
test(meatBall(15,55,21,standardRecipe), '15 meat ball with 25 flour and 6 water remain');
test(meatBall(33,24,19,tastyRecipe), '16 meat ball with 9 meat and 3 water remain');