# SHOW MEMBER IN ROOMS WITH SORTING ALPHABET ??

in this exercise, you should find out how many members in rooms with showing the name of person that was join in this room. Also given sort parameters to sorting the name with ALPHABET sorting. 

Make a function that will showing the name of person who was joined the room, showing the name of member in this room with the regulations like below.

- always showing "You" in the room
- if no one except you in this room show "only you in this room"
- maximum number for name showed is 3
- if more than 5 person in rooms, show only 2 others member name then show only number for the rest
- sort parameter given to sorting the showing name, "AZ" parameter to sort A-Z, "ZA" parameter to sort Z-A
- "You" always in the first order

example : 

```
memberInRoom(['Romi', 'Beni']) # => You, Beni and Romi in this room
```

```
memberInRoom(['Romi', 'Beni', 'Laura', 'laila']) # => You, Beni, laila and 2 others in this room
```