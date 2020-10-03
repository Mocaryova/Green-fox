let count = 10;
undefined
for (i=0; i<count;i++) {
    if (isEven(i)) {
    console.log(i);}
    function isEven(number) {
        var even = number % 2==0;
        return even;
      }
    }
    
let names = ["Mark","CLoe","Wonho"];  
greet(names[1]);

function greet (names) {
    console.log("hello "+names);
}
let printValues = (array) => {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  };
  printValues ([0,5,6,4,7]);
  names.forEach;
  console.log(array[i]);