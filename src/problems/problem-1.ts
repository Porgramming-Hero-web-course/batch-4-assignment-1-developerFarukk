

{
    //  ******  <  Problem 1  >  *********

    function sumArray ( numbers: number[] ) : number {

        return numbers.reduce( (previousvalue: number, currentValue: number) => {
            const sum = previousvalue + currentValue ;
            return sum;
        }, 0 );
        
    }

    const result = sumArray([1, 2, 3, 4, 5]);

    // const result = sumArray([1, 2, 3, 4, 5, 7, 8]);

    // console.log(result);

    // 
}