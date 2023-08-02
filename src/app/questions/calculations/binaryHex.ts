export default function binaryHex() : object{
    const decision : number = Math.floor(Math.random() * 2);
    const decimal : number = Math.floor(Math.random() * 256);
    const hex : string = decimal.toString(16).toUpperCase();
    if(decision === 0){
        return {
            "question" : `Convert ${decimal} into hexadecimal`,
            "answer" : hex
        }
    }
    else{
        return {
            "question" : `Convert ${hex} from hexadecimal to decimal`,
            "answer" : decimal
        }  
    }
}