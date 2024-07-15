//Question 1
//multi array

//Declare and initialize multi Dimentional array 
var multi_array = [ ,[ , ,[ , ], ], ,[ , , ,[ , ],[ , , ]],  ];

multi_array[0] = 1;
multi_array[1][0] = 2;
multi_array[1][1] = 3;
multi_array[1][2][0] = 4;
multi_array[1][2][1] = 5;
multi_array[1][3] = 6;
multi_array[2] = 7;
multi_array[3][0] = 8;
multi_array[3][1] = 9;
multi_array[3][2] = 10;
multi_array[3][3][0] = 11;
multi_array[3][3][1] = 12;
multi_array[3][4][0] = 13;
multi_array[3][4][1] = 14;
multi_array[3][4][2] = 15;
multi_array[4] = 16;

console.log(multi_array);


//Question 2
// print Counting 

// print numeric counting from 1 to 10 by using loop
for(var i = 1; i <= 10; i++ ){
    document.write(i + '<br>');
}


//Question 3
// print Table 

// print table by taking number and length of table
document.write('<h1> Table </h1>');

var tableNumber = +prompt('Enter a number that table you want to print?');
var tableTimes = +prompt('How many times you want to print the table of ' + tableNumber + ' :');

for(var i = 1; i <= tableTimes; i++){
    document.write(tableNumber + ' X ' + i + ' = ' + tableNumber*i + '<br>');
}


// Question 4
// print fruits array

// making an array of fruits
document.write('<h1> Fruit Store </h1>');
var fruits = ['apple' , 'banana' , 'mango' , 'orange' , 'strawberry'];

// print fruit array line by line
for(var i = 0; i<fruits.length; i++ ){
    document.write(fruits[i] + '<br>');
}

// Display the fruits array with their index number
for(var i = 0; i<fruits.length; i++){
    document.write('Element at index ' + i + ' is ' + fruits[i] + '<br>');

} 


// Question 6
// counting ,even or odd loops

// forward Counting
document.write('<br>' + 'Forward Counting: ')
for(var i = 1 ; i <= 15; i++){
    document.write(i + ' ');
    
}

//backward Counting
document.write('<br>' + 'Backward Counting: ')
for(var j = 15 ; j >= 1; j--){
    document.write(j + ' ');
    
}

//Even number
document.write('<br>' + 'Even Number : ' );
for(var i = 1 ; i <= 20; i++){
    if(i % 2 === 0){
        
        document.write(i + ' ' );
    }
    
}

//odd number
document.write('<br>' + 'Odd Number : ' );
for(var i = 1 ; i <= 20; i++){
    if(i % 2 !== 0){
        
        document.write(i + ' ');
    }
    
}

// Series number
document.write('<br>' + 'Series : ' );
for(var i = 1 ; i <= 20; i++){
    if(i % 2 === 0 ){
        
        document.write(i + 'k' + ' ' );
    }
    
}

// Question 07
// Search Item from array

var bakeryItem = ['cake' , 'applepie' , 'cookies' , 'chips' , 'patties'];

var userItem = prompt('welcome to "Disco Bakery" What do you want to order Sir/Mam?');
for(var i = 0; i <=bakeryItem.length ; i++){
    if(bakeryItem[i] === userItem){
        document.write(userItem + ' is ' + '<b> available </b>' + ' at the index ' + i + ' in our backery ');   
    }
    else if (bakeryItem !== userItem){
        document.write('We are Sorry ' + userItem + ' is ' + ' <b> not available </b> ' + ' in our backery');
        break;
    }
}


// Question 8
// largest number

var num = [24, 53, 78, 91, 12];

var maxNum = num[0]; 
for (var i = 1; i < num.length; i++) {
    if (num[i] > maxNum) {
        maxNum = num[i];
    }
}


document.write("The largest number in the array is:", maxNum);

//Question 9
//Smallest Number

var numb = [24, 53, 78, 91, 12];

var minNum = numb[0]; 
for (var i = 1; i > numb.length; i--) {
    if (numb[i] < minNum) {
        minNum = numb[i];
    }
}


document.write('<br>' + "The smallest number in the array is:", minNum + ' <br>');


//Question 10
// ranging of 5
document.write('Ranging : ')
for(var i = 1; i < 21; i++){
    document.write(i*5 + ' ');
    
}
// //////////////////
var display = ['england' , 'pakistan' , 'india'] ;
var country = prompt('What is your country name?');

for (i = 1 ; i <= display.length ; i++){
    if (country === display[i]){
        alert('City found');
        break;
    }
    
    else{
        alert('city not found')
    }
}