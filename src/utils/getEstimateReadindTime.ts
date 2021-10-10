export function getEstimatedReadingTime(content: string) {
  const numberOfWords = content.split(' ');

  return Math.ceil(numberOfWords.length / 150);
}
