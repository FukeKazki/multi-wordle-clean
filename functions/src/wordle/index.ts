import words from "@/config/words.json";

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

export const generateWord = () => {
    const random = getRandomInt(words.words.length);

    return words.words[random];
}

export const compareWord = (collectWord: string, answerWord: string) => {
  if (collectWord === answerWord) return "π©π©π©π©π©";
  let wordle = ["β¬οΈ", "β¬οΈ", "β¬οΈ", "β¬οΈ", "β¬οΈ"];

  for (
    let index = 0;
    index < Math.min(collectWord.length, answerWord.length);
    index++
  ) {
    const c = collectWord[index];
    const a = answerWord[index];

    if (c === a) {
      // ι¨εδΈθ΄
      wordle[index] = "π©";
    } else if (collectWord.includes(a)) {
      // ε«γ
      const includeIndex = collectWord.indexOf(a);
      if (answerWord[includeIndex] === collectWord[includeIndex]) continue;
      wordle[index] = "π¨";
    }
  }

  return wordle.reduce((p, c) => p + c, "");
};
