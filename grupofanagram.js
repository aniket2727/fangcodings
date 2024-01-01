

function groupAnagrams(words) {
    const groupedAnagrams = {};

    for (const word of words) {
        const sortedWord = word.split('').sort().join('');

        if (groupedAnagrams[sortedWord]) {
            groupedAnagrams[sortedWord].push(word);
        } else {
            groupedAnagrams[sortedWord] = [word];
        }
    }

    return Object.values(groupedAnagrams);
}


const words = ['listen', 'silent', 'enlist', 'hello', 'world', 'dlrow'];
const result = groupAnagrams(words);
console.log(result);




