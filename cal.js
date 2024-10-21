// - addition ( add ) 
// - subtraction ( sub ) 
// - multiplication ( mult ) 
// - division ( divide ) 
// - sine ( sin ) 
// - cosine ( cos ) 
// - tangent ( tan ) 
// - random number generation  ( random )

// Provide length for random number generation.[without quote]

// Format to call the functions
// node index.js add 1 2
const crypto = require('crypto')

const divide = (num1, num2)=>{
    result = num1 / num2
    return result
}

const mult = (num1, num2)=>{
    result = num1 * num2
    return result
}

const sub = (num1, num2)=>{
    result = num1 - num2
    return result
}


const add = (num1, num2)=>{
    result = num1 + num2
    return result
}

const isValidNumber = (num) => {
    num = Number(num)
    return !isNaN(num)
}

const processBasicArithmetic = (functionToCall,num1, num2)=>{
    if(isValidNumber(num1) && isValidNumber(num2)){
        switch(functionToCall){
            case 'add' : return add(Number(num1), Number(num2))
            case 'sub' : return sub(Number(num1), Number(num2))
            case 'mult' : return mult(Number(num1), Number(num2))
            case 'divide' : return divide(Number(num1), Number(num2))
        }
    }else{
        return `Invalid Input: ${num1} ${num2}`
    }
}

const generateRandomNumber = (num)=>{
    let randomNumber = ''
    for(let i=0; i< num; i++){
        randomNumber += crypto.randomInt(0, 9)
    }
    return randomNumber
}


const main = ()=>{
    let functionToCall = process.argv[2]
    if(!functionToCall){
        console.log("Please provide the function that needs to be called")
    }else{
        let result;
        let num1 = process.argv[3]
        switch(functionToCall){
            case 'add' : 
            case 'sub' : 
            case 'mult' : 
            case 'divide' : result = processBasicArithmetic(functionToCall, num1, process.argv[4])
            break;
            case 'sin' : if(isValidNumber(num1)){
                result = Math.sin(num1)
            }
            break;
            case 'cos' : if(isValidNumber(num1)){
                result = Math.cos(num1)
            }
            break;
            case 'tan' : if(isValidNumber(num1)){
                result = Math.tan(num1)
            }
            break;
            case 'random' : if(isValidNumber(num1)){
                num1 = Number(num1)
                result = generateRandomNumber(num1)
            }else{
                console.log("Provide length for random number generation.")
            }
            break;
            default: console.log("Invalid Function Call : [add, sub, divide, mult, sin, cos, tan, random]")
        }

        console.log(result?result:"")
    }

}

main() 