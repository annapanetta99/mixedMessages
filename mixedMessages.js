const joke1 = 'Where do boats go when they are sick? To the boat doc.';
const joke2 = 'Where do fruits go on vacation? Pear-is!';
const joke3 = 'Why don\'t eggs tell jokes? They\'d crack each other up.';
const joke4 = 'How do you get a squirrel to like you? Act like a nut.';
const joke5 = 'What do you call someone with no body and no nose? Nobody knows.';
const joke6 = 'What is the difference between a fly and a mosquito? That a mosquito can fly but a fly cannot mosquito!'

const messageComponents = {
    jokes: [joke1, joke2, joke3, joke4, joke5, joke6],
    fortunes: ['You will have a good day.','You will have a bad day.','Only time will tell.'],
    spiritAnimal: ['dog','cat','hamster', 'dragon', 'mouse'],
}

const randomMessage = (arr) => {
    const joke = arr.jokes[Math.floor(Math.random()*arr.jokes.length)];
    const fortune = arr.fortunes[Math.floor(Math.random()*arr.fortunes.length)];
    const animal = arr.spiritAnimal[Math.floor(Math.random()*arr.spiritAnimal.length)];
    return 'Hello! Your fortune today is: ' + fortune + ' Your spirit animal is a ' + animal + '.' + ' Here is a fun dad joke to lighten your mood: ' + joke 
} 

console.log(randomMessage(messageComponents)); 