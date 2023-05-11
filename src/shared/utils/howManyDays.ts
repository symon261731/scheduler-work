

export const howManyDays = (start:number,end:number) => {
    if(end-start === 0) return 1;
    return end-start + 1;
}
