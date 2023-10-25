// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:
// sum(3) = 3
// sum(5) = 8
// sum(20) = 28

// [[ Environment ]] = Global Env
function calcSum(memo = 0) {
    // Lexical Environment = {
    //   Environment Record: { memo: 0, .... },
    //   Parent: Global Env
    // }

    // [[ Environment ]] = Env of calcSum
    return (num) => {
        // Lexical Environment = {
        //   Environment Record: { num: ..., .... },
        //   Parent: Env of calcSum
        // }

        return memo += num;
    };
}

const sum = calcSum();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
