exports.sum = async function sum(numbers) {
    let total = 0;
     await numbers.forEach((number) => {
     total += number
    })
    return total
    };
    
    