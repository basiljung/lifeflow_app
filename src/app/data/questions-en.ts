import { Question } from './questions-de';

export const QUESTIONS_EN: Question[] = [
  {
    text: 'I have a clear sense of what matters most to me in life.',
    answers: [
      {
        text: '5 – Applies completely',
        effects: {
          clarity_goal: 2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          clarity_goal: 1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          clarity_goal: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          clarity_goal: -1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          clarity_goal: -2,
        },
      },
    ],
  },
  {
    text: 'I have concrete goals that I’m actively working toward.',
    answers: [
      {
        text: '5 – Applies completely',
        effects: {
          clarity_goal: 2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          clarity_goal: 1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          clarity_goal: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          clarity_goal: -1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          clarity_goal: -2,
        },
      },
    ],
  },
  {
    text: 'I often feel unsure about my direction & my next steps.',
    answers: [
      {
        text: '5 – Applies completely',
        effects: {
          clarity_goal: -2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          clarity_goal: -1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          clarity_goal: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          clarity_goal: 1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          clarity_goal: 2,
        },
      },
    ],
  },
  {
    text: 'I regularly feel overwhelmed by my tasks or day.',
    answers: [
      {
        text: '5 – Applies completely',
        effects: {
          feasibility_challenge: -2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          feasibility_challenge: -1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          feasibility_challenge: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          feasibility_challenge: 1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          feasibility_challenge: 2,
        },
      },
    ],
  },
  {
    text: 'I often get bored because I am not challenged enough.',
    answers: [
      {
        text: '5 – Applies completely',
        effects: {
          feasibility_challenge: -2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          feasibility_challenge: -1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          feasibility_challenge: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          feasibility_challenge: 1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          feasibility_challenge: 2,
        },
      },
    ],
  },
  {
    text: 'I know how to break my goals into actionable steps.',
    answers: [
      {
        text: '5 – Applies completely',
        effects: {
          feasibility_challenge: 2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          feasibility_challenge: 1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          feasibility_challenge: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          feasibility_challenge: -1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          feasibility_challenge: -2,
        },
      },
    ],
  },
  {
    text: 'I feel emotionally blocked or constricted inside.',
    answers: [
      {
        text: '5 – Applies completely',
        effects: {
          emotional_space: -2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          emotional_space: -1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          emotional_space: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          emotional_space: 1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          emotional_space: 2,
        },
      },
    ],
  },
  {
    text: 'I have enough space for myself and my feelings.',
    answers: [
      {
        text: '5 – Applies completely',
        effects: {
          emotional_space: 2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          emotional_space: 1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          emotional_space: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          emotional_space: -1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          emotional_space: -2,
        },
      },
    ],
  },
  {
    text: 'I handle inner pressure well.',
    answers: [
      {
        text: '5 – Applies completely',
        effects: {
          emotional_space: 2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          emotional_space: 1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          emotional_space: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          emotional_space: -1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          emotional_space: -2,
        },
      },
    ],
  },
  {
    text: 'I have consistent routines or time blocks that guide me.',
    answers: [
      {
        text: '5 – Applies completely',
        effects: {
          structure_focus: 2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          structure_focus: 1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          structure_focus: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          structure_focus: -1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          structure_focus: -2,
        },
      },
    ],
  },
  {
    text: 'My daily life is often chaotic or unstructured.',
    answers: [
      {
        text: '5 – Applies completely',
        effects: {
          structure_focus: -2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          structure_focus: -1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          structure_focus: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          structure_focus: 1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          structure_focus: 2,
        },
      },
    ],
  },
  {
    text: 'I usually give my full attention to my tasks or activities.',
    answers: [
      {
        text: '5 – Applies completely',
        effects: {
          structure_focus: 2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          structure_focus: 1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          structure_focus: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          structure_focus: -1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          structure_focus: -2,
        },
      },
    ],
  },
  {
    text: 'What I do feels deeply meaningful to me.',
    answers: [
      {
        text: '5 – Applies completely',
        effects: {
          meaning: 2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          meaning: 1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          meaning: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          meaning: -1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          meaning: -2,
        },
      },
    ],
  },
  {
    text: 'I get a lot of strength and motivation from the meaning of my work or my life.',
    answers: [
      {
        text: '5 – Applies completely',
        effects: {
          meaning: 2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          meaning: 1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          meaning: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          meaning: -1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          meaning: -2,
        },
      },
    ],
  },
  {
    text: 'I feel a connection between my actions and my values.',
    answers: [
      {
        text: '5 – Applies completely',
        effects: {
          meaning: 2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          meaning: 1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          meaning: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          meaning: -1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          meaning: -2,
        },
      },
    ],
  },
  {
    text: 'I feel connected to other people.',
    answers: [
      {
        text: '5 – Applies completely',
        effects: {
          oxytocin: 2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          oxytocin: 1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          oxytocin: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          oxytocin: -1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          oxytocin: -2,
        },
      },
    ],
  },
  {
    text: 'I find it hard to open up emotionally to others.',
    answers: [
      {
        text: '5 – Applies completely',
        effects: {
          oxytocin: -2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          oxytocin: -1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          oxytocin: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          oxytocin: 1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          oxytocin: 2,
        },
      },
    ],
  },
  {
    text: 'I regularly experience moments of trust and emotional closeness.',
    answers: [
      {
        text: '5 – Applies completely',
        effects: {
          oxytocin: 2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          oxytocin: 1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          oxytocin: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          oxytocin: -1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          oxytocin: -2,
        },
      },
    ],
  },
  {
    text: 'It is easy for me to focus on something and be goal-oriented.',
    answers: [
      {
        text: '5 – Applies completely',
        effects: {
          dopamine: 2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          dopamine: 1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          dopamine: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          dopamine: -1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          dopamine: -2,
        },
      },
    ],
  },
  {
    text: 'I often feel unmotivated or low in drive.',
    answers: [
      {
        text: '5 – Applies completely',
        effects: {
          dopamine: -2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          dopamine: -1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          dopamine: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          dopamine: 1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          dopamine: 2,
        },
      },
    ],
  },
  {
    text: 'I am often motivated to tackle and implement things.',
    answers: [
      {
        text: '5 – Applies completely',
        effects: {
          dopamine: 2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          dopamine: 1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          dopamine: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          dopamine: -1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          dopamine: -2,
        },
      },
    ],
  },
  {
    text: 'I feel calm, stable, and balanced inside.',
    answers: [
      {
        text: '5 – Applies completely',
        effects: {
          serotonin: 2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          serotonin: 1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          serotonin: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          serotonin: -1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          serotonin: -2,
        },
      },
    ],
  },
  {
    text: 'I get irritated or restless quickly.',
    answers: [
      {
        text: '5 – Applies completely',
        effects: {
          serotonin: -2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          serotonin: -1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          serotonin: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          serotonin: 1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          serotonin: 2,
        },
      },
    ],
  },
  {
    text: 'I trust that things will unfold in their own time.',
    answers: [
      {
        text: '5 – Applies completely',
        effects: {
          serotonin: 2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          serotonin: 1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          serotonin: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          serotonin: -1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          serotonin: -2,
        },
      },
    ],
  },
  {
    text: 'I can consciously enjoy moments of joy.',
    answers: [
      {
        text: '5 – Applies completely',
        effects: {
          endorphins: 2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          endorphins: 1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          endorphins: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          endorphins: -1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          endorphins: -2,
        },
      },
    ],
  },
  {
    text: 'I often feel a lack of lightness in my daily life.',
    answers: [
      {
        text: '5 – Applies completely',
        effects: {
          endorphins: -2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          endorphins: -1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          endorphins: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          endorphins: 1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          endorphins: 2,
        },
      },
    ],
  },
  {
    text: 'I regularly find small things to be happy about.',
    answers: [
      {
        text: '5 – Applies completely',
        effects: {
          endorphins: 2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          endorphins: 1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          endorphins: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          endorphins: -1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          endorphins: -2,
        },
      },
    ],
  },
];
