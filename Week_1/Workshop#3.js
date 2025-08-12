import { createInterface } from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

function main() {
    const rl = createInterface({ input, output });
    rl.question("Enter numbers: ", (input) => {
        const numbers = input.split(" ").map(Number);
        const result = number_of_max(numbers);
        console.log(result);
        rl.close();
    });
}


function number_of_max(arry) {
    const max = 0;
    if (arry.length === 0) {
        return "Not Duplicate";
    }else{
        const count = 0
        for (let i = 0; i < arry.length; i++) {
            if (arry[i] > max) {
                max = arry[i];
                count = 1;
            } else if (arry[i] === max) {
                count++;
            }
        }
    }
    
}
main();