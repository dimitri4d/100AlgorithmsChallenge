function absoluteValuesSumMinimization(a: number[]): number {

    const length = a.length
    const center = Math.ceil((length/2)-1)

    return  a[center]
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));