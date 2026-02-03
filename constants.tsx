
import { SectionData } from './types';

export const SECTIONS: SectionData[] = [
  {
    id: 'A',
    title: 'Vocabulary (Ch.1)',
    description: 'Use words like naughty, shy, careless, recess, special, and outgoing! 🏫',
    questions: [
      { id: 1, question: "Last year I was __________, but now I am good.", options: ["naughty", "shy", "careless", "special"], correctAnswer: "naughty" },
      { id: 2, question: "She was __________ before, but now she talks a lot.", options: ["shy", "outgoing", "recess", "special"], correctAnswer: "shy" },
      { id: 3, question: "Don't be __________! You will drop your pencil.", options: ["careless", "careful", "naughty", "shy"], correctAnswer: "careless" },
      { id: 4, question: "We play badminton at __________ every day.", options: ["recess", "naughty", "special", "outgoing"], correctAnswer: "recess" },
      { id: 5, question: "Today is a __________ day for our class because it’s David’s birthday.", options: ["special", "shy", "careless", "recess"], correctAnswer: "special" },
      { id: 6, question: "Peter is very __________; he likes to make new friends at school.", options: ["outgoing", "shy", "naughty", "careless"], correctAnswer: "outgoing" },
      { id: 7, question: "My teacher says I am a __________ student because I help others.", options: ["special", "naughty", "shy", "careless"], correctAnswer: "special" },
      { id: 8, question: "Be __________ when you cross the road. Don't be careless.", options: ["careful", "naughty", "shy", "special"], correctAnswer: "careful" },
      { id: 9, question: "My little brother is very __________. He broke my favorite toy.", options: ["naughty", "shy", "outgoing", "special"], correctAnswer: "naughty" },
      { id: 10, question: "I was too __________ to talk to my new classmates on the first day.", options: ["shy", "outgoing", "special", "naughty"], correctAnswer: "shy" }
    ]
  },
  {
    id: 'D',
    title: 'is / am / are',
    description: 'Choose the correct form for the present tense. 📝',
    questions: [
      { id: 1, question: "She ____ a nurse.", options: ["is", "am", "are"], correctAnswer: "is" },
      { id: 2, question: "I ____ good at drawing.", options: ["is", "am", "are"], correctAnswer: "am" },
      { id: 3, question: "Ben and Lucy ____ quiet in the library.", options: ["is", "am", "are"], correctAnswer: "are" },
      { id: 4, question: "My dog ____ two years old.", options: ["is", "am", "are"], correctAnswer: "is" },
      { id: 5, question: "We ____ in Class 3.", options: ["is", "am", "are"], correctAnswer: "are" },
      { id: 6, question: "You ____ my best friend.", options: ["is", "am", "are"], correctAnswer: "are" },
      { id: 7, question: "My father ____ a doctor at the hospital.", options: ["is", "am", "are"], correctAnswer: "is" },
      { id: 8, question: "The apples ____ red and sweet.", options: ["is", "am", "are"], correctAnswer: "are" },
      { id: 9, question: "It ____ a sunny day today.", options: ["is", "am", "are"], correctAnswer: "is" },
      { id: 10, question: "I ____ hungry after the PE lesson.", options: ["is", "am", "are"], correctAnswer: "am" }
    ]
  },
  {
    id: 'E',
    title: 'was / were',
    description: 'Talking about things that happened before! 🕰️',
    questions: [
      { id: 1, question: "Last month I ____ happy.", options: ["was", "were"], correctAnswer: "was" },
      { id: 2, question: "We ____ ten years old five years ago.", options: ["was", "were"], correctAnswer: "were" },
      { id: 3, question: "Yesterday my sister ____ sick.", options: ["was", "were"], correctAnswer: "was" },
      { id: 4, question: "Peter and his friends ____ at the park last Saturday.", options: ["was", "were"], correctAnswer: "were" },
      { id: 5, question: "You ____ late for school last Wednesday.", options: ["was", "were"], correctAnswer: "were" },
      { id: 6, question: "The weather ____ cold yesterday.", options: ["was", "were"], correctAnswer: "was" },
      { id: 7, question: "They ____ excited about the school trip last week.", options: ["was", "were"], correctAnswer: "were" },
      { id: 8, question: "My pencils ____ on the floor this morning.", options: ["was", "were"], correctAnswer: "were" },
      { id: 9, question: "I ____ at the cinema with my family last night.", options: ["was", "were"], correctAnswer: "was" },
      { id: 10, question: "The cookies ____ very tasty.", options: ["was", "were"], correctAnswer: "were" }
    ]
  },
  {
    id: 'F',
    title: 'Mix: is/am/are/was/were',
    description: 'Is it happening now or did it happen before? ⏳',
    questions: [
      { id: 1, question: "My name is Lily. This year I ____ ten years old.", options: ["is", "am", "are", "was", "were"], correctAnswer: "am" },
      { id: 2, question: "We ____ happy last Friday.", options: ["is", "am", "are", "was", "were"], correctAnswer: "were" },
      { id: 3, question: "Three years ago Amy ____ quiet. Now she ____ outgoing.", options: ["was / is", "were / is", "is / was", "is / is"], correctAnswer: "was / is" },
      { id: 4, question: "Grandma ____ tired yesterday.", options: ["is", "am", "are", "was", "were"], correctAnswer: "was" },
      { id: 5, question: "Last year I ____ in Class 2. Now I ____ in Class 3.", options: ["was / am", "is / was", "were / am", "was / is"], correctAnswer: "was / am" },
      { id: 6, question: "My brother is tall now, but he ____ short before.", options: ["is", "am", "are", "was", "were"], correctAnswer: "was" },
      { id: 7, question: "Where ____ you yesterday afternoon?", options: ["is", "are", "was", "were"], correctAnswer: "were" },
      { id: 8, question: "Today ____ sunny, but yesterday it ____ rainy.", options: ["is / was", "is / is", "was / is", "was / was"], correctAnswer: "is / was" },
      { id: 9, question: "They ____ at school now.", options: ["is", "am", "are", "was", "were"], correctAnswer: "are" },
      { id: 10, question: "My cat ____ small two years ago.", options: ["is", "am", "are", "was", "were"], correctAnswer: "was" }
    ]
  },
  {
    id: 'G',
    title: 'Grammar Fix',
    description: 'Find the mistake and choose the correct word! 🐛',
    questions: [
      { id: 1, question: "Sandy and Mimi IS my friends. (Correction:)", options: ["are", "am", "was", "were"], correctAnswer: "are" },
      { id: 2, question: "They WAS ten years old NOW. (Correction:)", options: ["is", "are", "am", "were"], correctAnswer: "are" },
      { id: 3, question: "They WAS 35 kg two years ago. (Correction:)", options: ["is", "are", "am", "were"], correctAnswer: "were" },
      { id: 4, question: "My cat Lola WAS 2 years old NOW. (Correction:)", options: ["is", "are", "am", "were"], correctAnswer: "is" },
      { id: 5, question: "A year ago she WERE 10 kg. (Correction:)", options: ["is", "am", "was", "were"], correctAnswer: "was" },
      { id: 6, question: "I ARE happy today. (Correction:)", options: ["is", "am", "was", "were"], correctAnswer: "am" },
      { id: 7, question: "My books IS on the desk now. (Correction:)", options: ["is", "am", "are", "was"], correctAnswer: "are" },
      { id: 8, question: "We WAS at the zoo last Sunday. (Correction:)", options: ["is", "are", "am", "were"], correctAnswer: "were" },
      { id: 9, question: "It WERE cold last night. (Correction:)", options: ["is", "am", "was", "are"], correctAnswer: "was" },
      { id: 10, question: "You IS very kind to me. (Correction:)", options: ["is", "am", "are", "was"], correctAnswer: "are" }
    ]
  },
  {
    id: 'H',
    title: 'Opposite Stories',
    description: 'Compare before and now! ⚖️',
    questions: [
      { id: 1, question: "Three years ago Johnny WAS weak. Now he IS ____.", options: ["strong", "careless", "naughty", "shy"], correctAnswer: "strong" },
      { id: 2, question: "Five years ago Mary was careless. This year she is ____.", options: ["careful", "naughty", "good", "weak"], correctAnswer: "careful" },
      { id: 3, question: "Last year Tom was naughty. This year he is ____.", options: ["good", "strong", "shy", "careless"], correctAnswer: "good" },
      { id: 4, question: "Before, the apple was dirty. Now it is ____.", options: ["clean", "small", "short", "bad"], correctAnswer: "clean" },
      { id: 5, question: "Yesterday the room was noisy. Now it is ____.", options: ["quiet", "dirty", "short", "bad"], correctAnswer: "quiet" },
      { id: 6, question: "Last month the plant was short. Now it is ____.", options: ["tall", "small", "quiet", "good"], correctAnswer: "tall" },
      { id: 7, question: "Two years ago the box was heavy. Now it is ____.", options: ["light", "dark", "loud", "fast"], correctAnswer: "light" },
      { id: 8, question: "Before, my shoes were small. Now they are ____.", options: ["big", "small", "short", "wide"], correctAnswer: "big" },
      { id: 9, question: "Last week the water was cold. Now it is ____.", options: ["hot", "dry", "fast", "big"], correctAnswer: "hot" },
      { id: 10, question: "Before, he was shy. Now he is ____.", options: ["outgoing", "naughty", "weak", "careless"], correctAnswer: "outgoing" }
    ]
  },
  {
    id: 'Bonus',
    title: 'Word Opposites',
    description: 'Quickly find the opposite word! ⚡',
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
      { id: 10, question: "Opposite of 'open':", options: ["close", "start", "stop", "back"], correctAnswer: "close" }
    ]
  }
];
