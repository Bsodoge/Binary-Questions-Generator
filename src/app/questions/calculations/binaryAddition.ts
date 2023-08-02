export default function binaryAddition() : object{
    const decimalOne = Math.floor(Math.random() * 256);
    const decimalTwo = Math.floor(Math.random() * 256);
    const result = decimalOne + decimalTwo;
    const binaryOne = ("000000000" + decimalOne.toString(2)).slice(-8);
    const binaryTwo = ("000000000" + decimalTwo.toString(2)).slice(-8);
    const binaryResult = ("000000000" + result.toString(2)).slice(-8);
    return {
        "question" : `Add the following binary numbers: ${binaryOne} and ${binaryTwo} and give your answer in 8 bit binary`,
        "answer" : binaryResult
     }

}