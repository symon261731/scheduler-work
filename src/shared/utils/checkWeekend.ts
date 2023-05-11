export const checkWeekend = (year: number , month:number,monthDay: number) => {
    if(new Date (year,month, monthDay).getDay() === 0 || new Date (year,month, monthDay).getDay() === 6){
      return true;
    }
    else{
      return false;
    }
  }