



function findFirstAppearance(word, text) {
    const words = text.split(/\s+/);
    for (let index = 0; index < words.length; index++) {
        if (words[index].toLowerCase().includes(word.toLowerCase())) {
            return index + 1; 
        }
    }
    return -1; 
}

const sentence = "This is an example sentence. Example words are used for illustration.";
const searchWord = "example";

const result = findFirstAppearance(searchWord, sentence);
if (result !== -1) {
    console.log(`The first appearance of '${searchWord}' is at position ${result}.`);
} else {
    console.log(`'${searchWord}' is not found in the sentence.`);
}
