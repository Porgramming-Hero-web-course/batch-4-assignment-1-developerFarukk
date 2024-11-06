
{

    // ******  <  Problem 3  >  *********

    function countWordOccurrences( sentence: string, word: string ): number {

        const words = sentence.toLowerCase();
        const wordSplite = words.split(/\s+/);
        const wordMap = wordSplite.map(wordOrSentence => wordOrSentence.replace(/[^\w]/g, ''));

        const targetWord = word.toLowerCase();

        let count = 0;

        for (const words of wordMap) {
            if (words === targetWord) {
                count++;
            }
        }

        return count;
    }

    const result = countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");

    // console.log(result);

    // 
}