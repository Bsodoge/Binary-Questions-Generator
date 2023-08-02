export default function binaryDecimal() : object{
    const decision : number = Math.floor(Math.random() * 2);
    const decimal : number = Math.floor(Math.random() * 256);
    const binary : string = ("000000000" + decimal.toString(2)).slice(-8);
    if(decision === 0){
        return {
            "question" : `Convert ${decimal} into 8 bit binary`,
            "answer" : binary
        }
    }
    else{
        return {
            "question" : `Convert ${binary} from binary to decimal`,
            "answer" : decimal
        }  
    }
}