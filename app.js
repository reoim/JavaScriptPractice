// call, apply, bind
//===============================================================
/*
var person = {
    firstname: 'Reo',
    lastname: 'Lee',
    getFullname: function() {
        
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}

var logName = function(lang1, lang2) {
    console.log('Logged name: ' + this.getFullname());
    console.log('Arguement: ' + lang1 + ' ' + lang2);
    console.log('---------');
};

var logPersonName = logName.bind(person);

logPersonName('kr', 'en');


logName.call(person, 'en', 'kr');
logName.apply(person, ['haha', 'hoho']);



(function(lang1, lang2) {
    console.log('Logged name: ' + this.getFullname());
    console.log('Arguement: ' + lang1 + ' ' + lang2);
    console.log('---------');
}).apply(person, ['so', 'cool']);


// function borrowing

var person2 = {
    firstname: 'Hyeran',
    lastname: 'Jo'
}

console.log(person.getFullname.apply(person2));


//function currying

function multiply(a, b) {
    return a*b;
}

var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));
*/
//===============================================================



//function mapForEach(arr, fn) {
//    
//    var newArr = [];
//    
//    for (var i=0; i < arr.length; i++) {
//        newArr.push(
//            fn(arr[i])
//        )
//    };
//    
//    return newArr;
//}
//
//
//
//
//var arr1 = [1,2,3];
//console.log(arr1);
//
//
//var arr2 = mapForEach(arr1, function(item) {
//    return item * 2;
//});
//
//console.log(arr2);


// reflection and extend
//===============================================================
/*
var john = {
    
    firstname: 'Reo'
}

var Hyeran = {
    lastname: 'Jo'
}

_.extend(john, Hyeran);

console.log(john);

for (var prop in john) {
    if(john.hasOwnProperty(prop)){
    console.log(prop + ': ' + john[prop]);
    }
}


*/
//===============================================================



//function constructor 'new' and prototpye
//===============================================================
/*
function Person(firstname, lastname, age) {
    
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    console.log('invoked');
}

Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}

var reo = new Person('Reo', 'Lee', 30);
var haily = new Person('Haily', 'Jo', 31);

var reoFullName = reo.getFullName();

console.log(reo);
console.log(haily);
console.log(haily.getFullName());
*/



//Object.create and pure prototypal inheritance
//===============================================================
/*
var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi' + ' ' + this.firstname;
    }
}



var reo = Object.create(person);
reo.firstname = 'Reo';
reo.lastname = 'Lee';
console.log(reo);
*/
//===============================================================



