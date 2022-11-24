const myList = ["velma", "scout", "jane", "john", "harry"];

for (var name in myList) {
console.log(myList[name]);
};


var i = 0;
while (i < myList.length) {
  console.log(myList[i]);
  i++;
};


let helloWorld = () => {
  console.log("Hello World");
};

helloWorld();