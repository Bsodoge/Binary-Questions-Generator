export default function randomFractions() : number {
    let usedFractions : number[] = [];
    let result : number = 0;
    for (let i = 0; i < 5; i++) {
        let fraction = Math.pow(2, -Math.floor(Math.random() * (6 - 1) + 1));
        if(!usedFractions.includes(fraction) && result + fraction !== 1){
            result += fraction;
            usedFractions.push(fraction);
        };
    }
    return result;
}