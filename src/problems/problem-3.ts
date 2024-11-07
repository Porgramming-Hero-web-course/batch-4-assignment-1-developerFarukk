
{

    // ******  <  Problem 3  >  *********

    

    function countWordOccurrences (sentence: string, word: string) : number {
     
        const lowerCaseSentence = sentence.toLowerCase();
        const lowerCaseWord = word.toLowerCase();

        const wordsCount = lowerCaseSentence.split(" ");

        const count = wordsCount.filter( word => word === lowerCaseWord);

        const totalWord = count.length;

        return totalWord;
    }

    const result = countWordOccurrences("I  love  typescript", "typescript");
    // const result = countWordOccurrences("I typescript love typeScript typescript", "typescript");

    // console.log(result);
    
   


    // 
}