import randomFractions from "./randomFractions";
export default function binaryMantissaExponent() : object{
    const decision : number = Math.floor(Math.random() * 2);
    const decimal : number = Math.floor(Math.random() * 129) + randomFractions();
    const binary : string = ("0" + (decimal).toString(2)).slice(-14);
    const exponent : string = ("0" + (binary.indexOf('.') - 1 >>> 0).toString(2)).slice(-4);

    if(decision === 0){
        return {
            "question" : `Convert ${binary.replace('.', '') + exponent} from normalised real number in two's compliment binary, with a ${binary.replace('.', '').length} bit mantissa and ${exponent.length} bit exponent into decimal`,
            "answer" : decimal
        }
    }
    else{
        return {
            "question" : `Convert ${decimal} into a normalised real number in two's compliment binary, using a ${binary.replace('.', '').length} bit mantissa and ${exponent.length} bit exponent`,
            "answer" : binary.replace('.', '') + exponent
        }  
    }
}
