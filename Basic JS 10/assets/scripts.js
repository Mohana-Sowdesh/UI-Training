// --------------- START::Section 1: Play with variables ----------
console.log(1 + 2)
console.log("apple" + "orange")
console.log(1 + 2 + "apple")
console.log("apple" + 1 + 2)
console.log(1 + true)
console.log(0 == false)
console.log(1 == true)
console.log(2 == "2")
// --------------- END::Section 1: Play with variables ----------

// --------------- START::Section 2: Play with arrays ----------
//1. Create list of 11 players
players = ['Sachin', 'Dhoni', 'Suresh Raina', 'Virat Kohli', 'Rohit Sharma', 'Ravichandran Ashwin', 'Hardik Pandya', 'Shreyas Iyer', 
'Rishabh Pant', 'Cheteshwar Pujara', 'Ravindra Jadeja'];
console.log(players);

//2. Remove 1 from array
console.log(players.shift())

//3. Find out the no. of players
console.log(players.length)

//4. Add one player
players.push('Mohammed Shami');
console.log(players)

//5. Sort the list
players2 = [];
players2 = players;
players2.sort();
console.log(players2);

//6. Display all players name and assign a random jersey number
var jersey_no=0;
for(let i=0; i<players.length; i++)
{
    jersey_no = Math.random()*100;
    jersey_no = Math.ceil(jersey_no);
    console.log(players[i] + '- ' + jersey_no);
}

//7. Print all players name in uppercase and store it in different location to print jersey
upper_player = [];
for(let i=0; i<players.length; i++)
{
    upper_player.push(players[i].toUpperCase());
}
console.log(upper_player);
// --------------- END::Section 2: Play with arrays ----------


// --------------- START::Section 3: Play with functions ----------
//1. Create a function to display numbers from 1 to 100
function print_1_to_100() {
    for(i=1; i<=100; i++)
        console.log(i);
} 
print_1_to_100();

//2. Create a function to display today's date in DD/MM/YYYY format
function today_date() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    let cur_date = day+"/"+month+"/"+year;
    console.log(cur_date);
}
today_date();

//3. Create a function which accepts a Celsius value as parameter and returns the Fahrenheit value
function c_to_f(c) {
    return ((c*1.8)+32);
} 
console.log(c_to_f(27)+"F");

//4. Create a function which accepts an array of numbers as parameter nd return the average of those numbers
 arr_avg = (arr) => {
    sum=0;
    for(i=0; i<arr.length; i++)
        sum += arr[i];
    avg = sum/arr.length;
    return avg;
}
let arr = [576, 982, 12, 82];
console.log(arr_avg(arr));

//5. Create a function to reverse a string
function rev(str) {
    let rev_str = str.split("");
    rev = rev_str.reverse();
    return rev_str.join('');;
}
console.log(rev("exercise"));
// --------------- END::Section 3: Play with functions ----------
