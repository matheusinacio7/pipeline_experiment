const multiplyByTwo = (a) => a * 2;
const addTen = (a) => a + 10;

const myNum = 10;

const trace = (val) => {
  console.log(val);
  return val;
};

const { log } = console;

multiplyByTwo(myNum)
 |> addTen(%)
 |> trace(%)
 |> addTen(%)
 |> trace(%)
 |> multiplyByTwo(%)
 |> log(%);
