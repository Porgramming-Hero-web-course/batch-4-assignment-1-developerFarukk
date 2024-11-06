
{
    // ******  <  Problem 2  >  *********

    function removeDuplicates(numbers: number[]): number[] {

        const realNumbers: number[] = [];

        for (const number of numbers) {
            if (!realNumbers.includes(number)) {

                realNumbers.push(number);

            }
        }

        return realNumbers;
    }

    const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

    // const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5, 7, 7]);

    // console.log(result);


    // 
}