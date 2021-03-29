# SHOW MEMBER IN ROOMS ??

in this exercise, you should find out how many members in rooms with showing the name of person that was join in this room.

Make a function that will showing the name of person who was joined the room, showing the name of member in this room with the regulations like below.

- always showing "You" in the room
- if no one except you in this room show "only you in this room"
- maximum number for name showed is 3
- if more than 5 person in rooms, show only 2 others member name then show only number for the rest

example : 

```
memberInRoom(['Romi', 'Beni']) # => You, Romi and Beni in this room
```

```
memberInRoom(['Romi', 'Beni', 'Laura', 'laila']) # => You, Romi, Beni and 2 others in this room
```