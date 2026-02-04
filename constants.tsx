
import { SectionData } from './types';

export const SECTIONS: SectionData[] = [
  {
    id: 'A',
    title: 'School Life Words',
    description: 'Help our friends describe their day at school! 🖍️',
    questions: [
      { id: 1, question: "Last year I was __________, but now I am good.", options: ["naughty", "shy", "careless", "special"], correctAnswer: "naughty" },
      { id: 2, question: "She was __________ before, but now she talks a lot.", options: ["shy", "outgoing", "recess", "special"], correctAnswer: "shy" },
      { id: 3, question: "Don't be __________! You will drop your lunch box.", options: ["careless", "careful", "naughty", "shy"], correctAnswer: "careless" },
      { id: 4, question: "We play football at __________ every day.", options: ["recess", "naughty", "special", "outgoing"], correctAnswer: "recess" },
      { id: 5, question: "Today is a __________ day for our class because it’s a school trip.", options: ["special", "shy", "careless", "recess"], correctAnswer: "special" },
      { id: 6, question: "Sam likes making new friends. He is very __________.", options: ["outgoing", "shy", "naughty", "careless"], correctAnswer: "outgoing" },
      { id: 7, question: "My mom says I am a __________ child because I always help at home.", options: ["special", "naughty", "shy", "careless"], correctAnswer: "special" },
      { id: 8, question: "Be __________ when you hold the hot soup.", options: ["careful", "naughty", "shy", "special"], correctAnswer: "careful" },
      { id: 9, question: "The puppy was __________ and chewed my sneakers.", options: ["naughty", "shy", "outgoing", "special"], correctAnswer: "naughty" },
      { id: 10, question: "I was too __________ to sing on stage last month.", options: ["shy", "outgoing", "special", "naughty"], correctAnswer: "shy" },
      { id: 11, question: "The teacher is very __________ when she marks our homework.", options: ["careful", "careless", "naughty", "recess"], correctAnswer: "careful" },
      { id: 12, question: "I lost my eraser because I was __________.", options: ["careless", "shy", "special", "outgoing"], correctAnswer: "careless" },
      { id: 13, question: "Monday is a __________ day for me because I have swimming class.", options: ["special", "naughty", "recess", "shy"], correctAnswer: "special" },
      { id: 14, question: "We can eat snacks during __________.", options: ["recess", "shy", "careless", "naughty"], correctAnswer: "recess" },
      { id: 15, question: "The cat is __________ and hides under the sofa when visitors come.", options: ["shy", "outgoing", "naughty", "special"], correctAnswer: "shy" }
    ]
  },
  {
    id: 'D',
    title: 'is / am / are',
    description: 'What are they doing now? Pick the right word. 📝',
    questions: [
      { id: 1, question: "She ____ a kind nurse.", options: ["is", "am", "are"], correctAnswer: "is" },
      { id: 2, question: "I ____ very happy today.", options: ["is", "am", "are"], correctAnswer: "am" },
      { id: 3, question: "Ben and Lucy ____ reading in the library.", options: ["is", "am", "are"], correctAnswer: "are" },
      { id: 4, question: "My kitten ____ three months old.", options: ["is", "am", "are"], correctAnswer: "is" },
      { id: 5, question: "We ____ students in Class 3B.", options: ["is", "am", "are"], correctAnswer: "are" },
      { id: 6, question: "You ____ a very fast runner!", options: ["is", "am", "are"], correctAnswer: "are" },
      { id: 7, question: "My father ____ a busy manager.", options: ["is", "am", "are"], correctAnswer: "is" },
      { id: 8, question: "The red apples ____ very sweet.", options: ["is", "am", "are"], correctAnswer: "are" },
      { id: 9, question: "It ____ a rainy afternoon.", options: ["is", "am", "are"], correctAnswer: "is" },
      { id: 10, question: "I ____ hungry after the swimming lesson.", options: ["is", "am", "are"], correctAnswer: "am" },
      { id: 11, question: "There ____ many birds in the tree.", options: ["is", "am", "are"], correctAnswer: "are" },
      { id: 12, question: "Our classroom ____ big and clean.", options: ["is", "am", "are"], correctAnswer: "is" },
      { id: 13, question: "The monkeys ____ eating bananas.", options: ["is", "am", "are"], correctAnswer: "are" },
      { id: 14, question: "I ____ in the school choir.", options: ["is", "am", "are"], correctAnswer: "am" },
      { id: 15, question: "Your bicycle ____ blue and white.", options: ["is", "am", "are"], correctAnswer: "is" }
    ]
  },
  {
    id: 'E',
    title: 'was / were',
    description: 'Look at what happened yesterday! 🕰️',
    questions: [
      { id: 1, question: "Last week I ____ at my grandma's house.", options: ["was", "were"], correctAnswer: "was" },
      { id: 2, question: "We ____ ten years old two years ago.", options: ["was", "were"], correctAnswer: "were" },
      { id: 3, question: "Yesterday my sister ____ sick.", options: ["was", "were"], correctAnswer: "was" },
      { id: 4, question: "Peter and his friends ____ at the beach last Sunday.", options: ["was", "were"], correctAnswer: "were" },
      { id: 5, question: "You ____ late for school last Friday.", options: ["was", "were"], correctAnswer: "were" },
      { id: 6, question: "The weather ____ cold on Tuesday.", options: ["was", "were"], correctAnswer: "was" },
      { id: 7, question: "They ____ excited about the party.", options: ["was", "were"], correctAnswer: "were" },
      { id: 8, question: "My toys ____ on the floor this morning.", options: ["was", "were"], correctAnswer: "were" },
      { id: 9, question: "I ____ at the park with my family.", options: ["was", "were"], correctAnswer: "was" },
      { id: 10, question: "The cupcakes ____ very yummy.", options: ["was", "were"], correctAnswer: "were" },
      { id: 11, question: "Last year I ____ in Grade 2.", options: ["was", "were"], correctAnswer: "was" },
      { id: 12, question: "The shops ____ closed yesterday morning.", options: ["was", "were"], correctAnswer: "were" },
      { id: 13, question: "My dog ____ thirsty after the walk.", options: ["was", "were"], correctAnswer: "was" },
      { id: 14, question: "We ____ at the sports center.", options: ["was", "were"], correctAnswer: "were" },
      { id: 15, question: "The bus ____ very slow this morning.", options: ["was", "were"], correctAnswer: "was" }
    ]
  },
  {
    id: 'F',
    title: 'Mix: Now or Before?',
    description: 'Check the time! Is it today or yesterday? ⏳',
    questions: [
      { id: 1, question: "My name is Lily. This year I ____ ten years old.", options: ["is", "am", "are", "was", "were"], correctAnswer: "am" },
      { id: 2, question: "We ____ happy at the zoo last Friday.", options: ["is", "am", "are", "was", "were"], correctAnswer: "were" },
      { id: 3, question: "Three years ago Amy ____ quiet. Now she ____ outgoing.", options: ["was / is", "were / is", "is / was", "is / is"], correctAnswer: "was / is" },
      { id: 4, question: "Grandma ____ tired yesterday evening.", options: ["is", "am", "are", "was", "were"], correctAnswer: "was" },
      { id: 5, question: "Last year I ____ in Class 2. Now I ____ in Class 3.", options: ["was / am", "is / was", "were / am", "was / is"], correctAnswer: "was / am" },
      { id: 6, question: "Now I am strong, but I ____ weak before.", options: ["is", "am", "are", "was", "were"], correctAnswer: "was" },
      { id: 7, question: "Today ____ sunny, but yesterday it ____ rainy.", options: ["is / was", "is / is", "was / is", "was / was"], correctAnswer: "is / was" },
      { id: 8, question: "Where ____ you yesterday afternoon?", options: ["is", "are", "was", "were"], correctAnswer: "were" },
      { id: 9, question: "They ____ at school right now.", options: ["is", "am", "are", "was", "were"], correctAnswer: "are" },
      { id: 10, question: "My kitten ____ small two months ago.", options: ["is", "am", "are", "was", "were"], correctAnswer: "was" },
      { id: 11, question: "Now the water ____ hot.", options: ["is", "am", "are", "was", "were"], correctAnswer: "is" },
      { id: 12, question: "I ____ happy to see you today.", options: ["is", "am", "are", "was", "were"], correctAnswer: "am" },
      { id: 13, question: "The cookies ____ in the box now.", options: ["is", "am", "are", "was", "were"], correctAnswer: "are" },
      { id: 14, question: "Last week we ____ at the museum.", options: ["is", "am", "are", "was", "were"], correctAnswer: "were" },
      { id: 15, question: "The movie ____ very funny yesterday.", options: ["is", "am", "are", "was", "were"], correctAnswer: "was" }
    ]
  },
  {
    id: 'G',
    title: 'Grammar Fix',
    description: 'Find the mistakes in our friends\' writing! 🐛',
    questions: [
      { id: 1, question: "Sandy and Mimi IS my friends.", options: ["are", "am", "was", "were"], correctAnswer: "are" },
      { id: 2, question: "They WAS ten years old NOW.", options: ["is", "are", "am", "were"], correctAnswer: "are" },
      { id: 3, question: "They WAS 35 kg two years ago.", options: ["is", "are", "am", "were"], correctAnswer: "were" },
      { id: 4, question: "My cat Lola WAS 2 years old NOW.", options: ["is", "are", "am", "were"], correctAnswer: "is" },
      { id: 5, question: "A year ago she WERE 10 kg.", options: ["is", "am", "was", "were"], correctAnswer: "was" },
      { id: 6, question: "I ARE happy today.", options: ["is", "am", "was", "were"], correctAnswer: "am" },
      { id: 7, question: "My books IS on the desk now.", options: ["is", "am", "are", "was"], correctAnswer: "are" },
      { id: 8, question: "We WAS at the library last Sunday.", options: ["is", "are", "am", "were"], correctAnswer: "were" },
      { id: 9, question: "It WERE cold last night.", options: ["is", "am", "was", "are"], correctAnswer: "was" },
      { id: 10, question: "You IS very kind to me.", options: ["is", "am", "are", "was"], correctAnswer: "are" },
      { id: 11, question: "The birds IS singing now.", options: ["is", "am", "are", "was"], correctAnswer: "are" },
      { id: 12, question: "Last month I WERE sick.", options: ["is", "am", "was", "are"], correctAnswer: "was" },
      { id: 13, question: "They IS playing football now.", options: ["is", "am", "are", "was"], correctAnswer: "are" },
      { id: 14, question: "The apple WAS sweet today.", options: ["is", "am", "are", "was"], correctAnswer: "is" },
      { id: 15, question: "We IS in Grade 3 now.", options: ["is", "am", "are", "was"], correctAnswer: "are" }
    ]
  },
  {
    id: 'H',
    title: 'Opposite Sentences',
    description: 'Compare how things have changed! ⚖️',
    questions: [
      { id: 1, question: "Three years ago Johnny WAS weak. Now he IS ____.", options: ["strong", "careless", "naughty", "shy"], correctAnswer: "strong" },
      { id: 2, question: "Five years ago Mary was careless. This year she is ____.", options: ["careful", "naughty", "good", "weak"], correctAnswer: "careful" },
      { id: 3, question: "Last year Tom was naughty. This year he is ____.", options: ["good", "strong", "shy", "careless"], correctAnswer: "good" },
      { id: 4, question: "Before, the floor was dirty. Now it is ____.", options: ["clean", "small", "short", "bad"], correctAnswer: "clean" },
      { id: 5, question: "Yesterday the room was noisy. Now it is ____.", options: ["quiet", "dirty", "short", "bad"], correctAnswer: "quiet" },
      { id: 6, question: "Last month the plant was short. Now it is ____.", options: ["tall", "small", "quiet", "good"], correctAnswer: "tall" },
      { id: 7, question: "Two years ago the box was heavy. Now it is ____.", options: ["light", "dark", "loud", "fast"], correctAnswer: "light" },
      { id: 8, question: "Before, my shoes were small. Now they are ____.", options: ["big", "small", "short", "wide"], correctAnswer: "big" },
      { id: 9, question: "Yesterday the water was cold. Now it is ____.", options: ["hot", "dry", "fast", "big"], correctAnswer: "hot" },
      { id: 10, question: "Before, he was shy. Now he is ____.", options: ["outgoing", "naughty", "weak", "careless"], correctAnswer: "outgoing" },
      { id: 11, question: "The knife was blunt. Now it is ____.", options: ["sharp", "soft", "long", "heavy"], correctAnswer: "sharp" },
      { id: 12, question: "The bag was expensive. Now it is ____.", options: ["cheap", "new", "old", "big"], correctAnswer: "cheap" },
      { id: 13, question: "The road was narrow. Now it is ____.", options: ["wide", "thin", "short", "long"], correctAnswer: "wide" },
      { id: 14, question: "The mountain was high. The valley is ____.", options: ["low", "tall", "big", "small"], correctAnswer: "low" },
      { id: 15, question: "The weather was dry. Now it is ____.", options: ["wet", "hot", "cold", "fast"], correctAnswer: "wet" }
    ]
  },
  {
    id: 'Bonus',
    title: 'Word Opposites',
    description: 'Find the opposite pairs as fast as you can! ⚡',
    questions: [
      { id: 1, question: "Opposite of 'lazy':", options: ["hard-working", "quiet", "clean", "short"], correctAnswer: "hard-working" },
      { id: 2, question: "Opposite of 'noisy':", options: ["quiet", "clean", "short", "small"], correctAnswer: "quiet" },
      { id: 3, question: "Opposite of 'dirty':", options: ["clean", "small", "short", "quiet"], correctAnswer: "clean" },
      { id: 4, question: "Opposite of 'tall':", options: ["short", "small", "quiet", "clean"], correctAnswer: "short" },
      { id: 5, question: "Opposite of 'large':", options: ["small", "quiet", "clean", "short"], correctAnswer: "small" },
      { id: 6, question: "Opposite of 'hot':", options: ["cold", "fast", "happy", "win"], correctAnswer: "cold" },
      { id: 7, question: "Opposite of 'happy':", options: ["sad", "lose", "end", "cold"], correctAnswer: "sad" },
      { id: 8, question: "Opposite of 'fast':", options: ["slow", "sad", "lose", "end"], correctAnswer: "slow" },
      { id: 9, question: "Opposite of 'weak':", options: ["strong", "fast", "good", "happy"], correctAnswer: "strong" },
      { id: 10, question: "Opposite of 'open':", options: ["close", "start", "stop", "back"], correctAnswer: "close" },
      { id: 11, question: "Opposite of 'sweet':", options: ["sour", "tasty", "red", "big"], correctAnswer: "sour" },
      { id: 12, question: "Opposite of 'heavy':", options: ["light", "dark", "loud", "fast"], correctAnswer: "light" },
      { id: 13, question: "Opposite of 'old':", options: ["new", "long", "cold", "hard"], correctAnswer: "new" },
      { id: 14, question: "Opposite of 'soft':", options: ["hard", "cold", "fast", "big"], correctAnswer: "hard" },
      { id: 15, question: "Opposite of 'dark':", options: ["light", "hot", "cold", "fast"], correctAnswer: "light" }
    ]
  }
];
