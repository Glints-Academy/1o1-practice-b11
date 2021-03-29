# HOW MANY MEAT BALL CAN WE MAKE AND HOW MANY INGRIDIENT REMAIN??

in this exercise, you should find out how many meat ball can we make with the recipe that listed. But, not only that you should define the rest of ingridient that still remain also with the number.

Make a function that can calculated meat, flour, and water input to be a tasty meat ball with the recipe give in input parameters and calculate the ingridient that still remain.

example : 

```
const recipe = {
  meat: 1,
  flour: 2,
  water: 1,
}
```

```
meatBall(1,2,1,recipe) # => 1 meat ball
```
in this case we have 1 meat, 2 flour, and 1 water with the recipe we can make 1 meat ball exactly.

```
meatBall(2,3,2,recipe) # => 1 meat ball with 1 meat, 1 flour, and 1 water remain
```
in this case we have 1 meat, 2 flour, and 1 water with the recipe we can make 1 meat ball with 1 meat, 1 flour, and 1 water still remain.

```
meatBall(2,4,3,recipe) # => 2 meat ball with 1 water remain
```
in this case we have 1 meat, 2 flour, and 1 water with the recipe we can make 2 meat ball with 1 water still remain.