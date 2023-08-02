export default function binarySubtraction() : object{
    const decimalOne : number = Math.floor(Math.random() * 256);
    const decimalTwo : number = Math.floor(Math.random() * 256);
    const result : number = decimalOne + -decimalTwo;
    const binaryOne : string = ("000000000" + decimalOne.toString(2)).slice(-8);
    const binaryTwo : string = ("000000000" + (decimalTwo >>> 0).toString(2)).slice(-8);
    const binaryResult = ("000000000" + (result >>> 0).toString(2)).slice(-8);
    return {
        "question" : `Subtract the following binary numbers: ${binaryOne} and ${binaryTwo} and give your answer in 8 bit two's compliment form`,
        "answer" : binaryResult
     }

}