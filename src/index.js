const multiplyByTwo = (a) => a * 2;
const addTen = (a) => a + 10;

const addTwoAfterAWhile = (a) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(a + 2);
  }, 5000);
});

const myNum = 10;

const trace = (val) => {
  console.log(val);
  return val;
};

const { log } = console;

(async () => {
  multiplyByTwo(myNum)
    |> trace(%)
    |> addTen(%)
    |> trace(%)
    |> await addTwoAfterAWhile(%)
    |> trace(%)
    |> addTen(%)
    |> trace(%)
    |> multiplyByTwo(%)
    |> log(%);
})();
