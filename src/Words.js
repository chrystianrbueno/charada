import wordBank from "./wordle-repository.txt"

export const boardDefault = [
    ["", "", "", "", "",],
    ["", "", "", "", "",],
    ["", "", "", "", "",],
    ["", "", "", "", "",],
    ["", "", "", "", "",],
    ["", "", "", "", "",]
];

export const generateWordSet = async () => {
    let wordSet;
    let randomWord;
    await fetch(wordBank)
        .then((response) => response.text())
        .then((result) => {
            const wordArray = result.split("\n")
            randomWord = wordArray[Math.floor(Math.random() * wordArray.length)]
            wordSet = new Set(wordArray)
        })

    return { wordSet, randomWord }
}