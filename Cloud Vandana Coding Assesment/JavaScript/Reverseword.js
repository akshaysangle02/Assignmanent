function reverseWordsInSentence(sentence) {
    // Split the sentence into words using space as the delimiter
    const words = sentence.split(' ');
  
    // Reverse each word and store them in a new array
    const reversedWords = words.map(word => {
      // Use the split(), reverse(), and join() methods to reverse the word
      return word.split('').reverse().join('');
    });
  
    // Join the reversed words back together to form the final sentence
    const reversedSentence = reversedWords.join(' ');
  
    return reversedSentence;
  }
  
  const inputSentence = "This is a sunny day"; // Replace this with your input sentence
  const reversedResult = reverseWordsInSentence(inputSentence);
  console.log(reversedResult);
  