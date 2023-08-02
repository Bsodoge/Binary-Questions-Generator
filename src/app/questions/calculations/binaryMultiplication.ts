export default function binaryMultiplication() : object{
    const decimalOne : number = Math.floor(Math.random() * 16);
    const decimalTwo : number = Math.floor(Math.random() * 16);
    const result : number = decimalOne * decimalTwo;
    const binaryOne : string = ("0000" + decimalOne.toString(2)).slice(-4);
    const binaryTwo : string = ("0000" + decimalTwo.toString(2)).slice(-4);
    const binaryResult : string = ("000000000" + result.toString(2)).slice(-8);
    return {
        "question" : `Multiply the following binary numbers: ${binaryOne} and ${binaryTwo} and give your answer in 8 bit binary`,
        "answer" : binaryResult
     }

}