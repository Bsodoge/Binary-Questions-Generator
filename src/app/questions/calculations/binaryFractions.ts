export default function binaryFractions() : object{
    const decision : number = Math.floor(Math.random() * 2);
    const decimal : number = Math.floor(Math.random() * 16) + randomFraction();
    const binary : string = ("000000000" + (decimal).toString(2)).slice(-8);
    const parts : string[] = binary.split('.');
    if(decision === 0){
        return {
            "question" : `Convert ${binary} from binary into decimal`,
            "answer" : decimal
        }
    }
    else{
        return {
            "question" : `Convert ${decimal} into binary with ${parts[0].length} bits before the binary point and ${parts[1].length} bits after the binary point`,
            "answer" : binary
        }  
    }
}

const randomFraction = () : number => {
    let usedFractions : number[] = [];
    let result : number = 0;
    for (let i = 0; i < 5; i++) {
        let fraction = Math.pow(2, -Math.floor(Math.random() * (6 - 1) + 1));
        if(usedFractions.includes(fraction) && result + fraction !== 1) result += fraction;
        usedFractions.push(fraction);
    }
    return result;
}
