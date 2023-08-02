export default function binaryTwosCompliment() : object{
    const decision : number = Math.floor(Math.random() * 2);
    const decimal: number  = -Math.floor(Math.random() * (256));
    const binary : string = ("000000000" + (decimal >>> 0).toString(2)).slice(-8);
    if(decision === 0){
        return {
            "question" : `Convert ${decimal} into 8 bit two's compliment form`,
            "answer" : binary
        }
    }
    else{
        return {
            "question" : `Convert ${binary} from two's compliment binary to decimal`,
            "answer" : decimal
        }  
    }
}