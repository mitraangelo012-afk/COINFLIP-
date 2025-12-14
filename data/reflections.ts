import { ReflectionPair } from '../types';

export const REFLECTIONS: ReflectionPair[] = [
  {
    id: '1',
    theme: 'Perspective',
    heads: 'Choosing this path might open doors to new experiences, allowing you to grow through change and adaptation.',
    tails: 'Choosing this path might strengthen your foundation, offering the peace of mind that comes with stability and continuity.',
  },
  {
    id: '2',
    theme: 'Action',
    heads: 'This direction encourages bold movement. Sometimes, the best way to learn is to step forward and see what happens.',
    tails: 'This direction honors patience. There is often wisdom in waiting, observing, and letting things unfold naturally.',
  },
  {
    id: '3',
    theme: 'Focus',
    heads: 'This choice invites you to trust your intuition. Your gut feeling often knows what you need before your mind does.',
    tails: 'This choice invites you to trust the facts. A grounded, logical approach can provide a clear roadmap for the future.',
  },
  {
    id: '4',
    theme: 'Values',
    heads: 'Going this way could be a chance to prioritize your personal ambitions and what lights you up inside.',
    tails: 'Going this way could be a chance to prioritize harmony and your commitments to others or the bigger picture.',
  },
  {
    id: '5',
    theme: 'Energy',
    heads: 'Heads represents the spark of initiation. This choice is about starting something fresh and embracing the energy of the new.',
    tails: 'Tails represents the power of completion. This choice is about refining what exists and finding satisfaction in depth.',
  },
  {
    id: '6',
    theme: 'Risk',
    heads: 'This option might feel riskier, but stepping into the unknown is often where we find our most surprising strengths.',
    tails: 'This option might feel safer, but protecting your energy and resources is a valid and often necessary strategy.',
  },
  {
    id: '7',
    theme: 'Time',
    heads: 'This choice focuses on the immediate future. It addresses what is right in front of you and asks for present-moment action.',
    tails: 'This choice focuses on the long game. It considers the ripple effects of your decision years down the line.',
  },
  {
    id: '8',
    theme: 'Simplicity',
    heads: 'There is beauty in saying "Yes" and seeing where the current takes you. It simplifies life to just go with the flow.',
    tails: 'There is power in saying "No" or holding your ground. It simplifies life to stick to what you know works.',
  },
];

export const getRandomReflection = (): ReflectionPair => {
  const index = Math.floor(Math.random() * REFLECTIONS.length);
  return REFLECTIONS[index];
};
