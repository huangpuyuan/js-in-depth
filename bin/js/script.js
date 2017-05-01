var person = new Object();
person.name = "kaitai";
person.age = 28;

function displayInfo(args) {
    var output = "";
    if (typeof args.name == "string") {
        output = "Name：" + args.name + "\n";
    }
    if (typeof args.age == "number") {

    }
    console.log(output);
}

displayInfo({
    name: "kaitai",
    age: 27
});

displayInfo({
    name: "Greg"
});

console.log(person['name']);

var propertyName = "name";
console.log(person[propertyName]);


var colors = ['red', 'blue', 'green'];
console.log(colors.toString());
console.log(colors.valueOf());
console.log(colors);

var person1 = {
    toLocaleString: function () {
        return "kaitai";
    },
    toString: function () {
        return "Kaitai"
    }

};

var person2 = {
    toLocaleString: function () {
        return "grigorios";
    },
    toString: function () {
        return "Greg"
    }
};

var people = [person1, person2];
console.log(people);
console.log(people.toString());
console.log(people.toLocaleString());

function callSomeFunction(someFounction, someArgument) {
    return someFounction(someArgument);
}
function add10(num) {
    return num + 10;
}
var result1 = callSomeFunction(add10, 10);
console.log(result1);
function getGreeting(name) {
    return "Hello," + name;
}
var result2 = callSomeFunction(getGreeting, 'kaitai');
console.log(result2);


// 排序 函数中返回另一个函数
function createComparisonFunction(propertyName) {
    return function (obj1, obj2) {
        var v1 = obj1[propertyName];
        var v2 = obj2[propertyName];

        if (v1 < v2) {
            return -1;
        } else if (v1 > v2) {
            return 1;
        } else {
            return 0;
        }
    }
}

var data = [
    {
        name: 'Zachary',
        age: 28
    }, {
        name: 'Nicholas',
        age: 29
    }
];

data.sort(createComparisonFunction('name'));
console.log(data[0]);
data.sort(createComparisonFunction('age'));
console.log(data[0]);






























