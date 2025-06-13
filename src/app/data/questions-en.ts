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
    text: 'I often feel unsure about my inner direction.',
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
    text: 'My thoughts are organized and focused.',
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
    text: 'I feel adequately challenged at the moment.',
    answers: [
      {
        text: '5 – Applies completely',
        effects: {
          challenge: 2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          challenge: 1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          challenge: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          challenge: -1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          challenge: -2,
        },
      },
    ],
  },
  {
    text: 'I regularly feel overwhelmed by my tasks.',
    answers: [
      {
        text: '5 – Applies completely',
        effects: {
          challenge: -2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          challenge: -1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          challenge: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          challenge: 1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          challenge: 2,
        },
      },
    ],
  },
  {
    text: 'I often feel bored because my tasks are too easy.',
    answers: [
      {
        text: '5 – Applies completely',
        effects: {
          challenge: -2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          challenge: -1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          challenge: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          challenge: 1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          challenge: 2,
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
          space: -2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          space: -1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          space: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          space: 1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          space: 2,
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
          space: 2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          space: 1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          space: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          space: -1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          space: -2,
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
          space: 2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          space: 1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          space: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          space: -1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          space: -2,
        },
      },
    ],
  },
  {
    text: 'I have consistent routines or rituals that guide me.',
    answers: [
      {
        text: '5 – Applies completely',
        effects: {
          structure: 2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          structure: 1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          structure: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          structure: -1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          structure: -2,
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
          structure: -2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          structure: -1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          structure: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          structure: 1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          structure: 2,
        },
      },
    ],
  },
  {
    text: 'I design my daily routine consciously and with clarity_goal.',
    answers: [
      {
        text: '5 – Applies completely',
        effects: {
          structure: 2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          structure: 1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          structure: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          structure: -1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          structure: -2,
        },
      },
    ],
  },
  {
    text: 'I am usually fully engaged in my tasks.',
    answers: [
      {
        text: '5 – Applies completely',
        effects: {
          focus: 2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          focus: 1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          focus: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          focus: -1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          focus: -2,
        },
      },
    ],
  },
  {
    text: 'I get distracted easily.',
    answers: [
      {
        text: '5 – Applies completely',
        effects: {
          focus: -2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          focus: -1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          focus: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          focus: 1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          focus: 2,
        },
      },
    ],
  },
  {
    text: 'I consciously experience the present moment.',
    answers: [
      {
        text: '5 – Applies completely',
        effects: {
          focus: 2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          focus: 1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          focus: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          focus: -1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          focus: -2,
        },
      },
    ],
  },
  {
    text: 'I feel capable of handling my tasks.',
    answers: [
      {
        text: '5 – Applies completely',
        effects: {
          feasibility: 2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          feasibility: 1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          feasibility: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          feasibility: -1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          feasibility: -2,
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
          feasibility: 2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          feasibility: 1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          feasibility: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          feasibility: -1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          feasibility: -2,
        },
      },
    ],
  },
  {
    text: 'I often feel stuck and struggle to take action.',
    answers: [
      {
        text: '5 – Applies completely',
        effects: {
          feasibility: -2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          feasibility: -1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          feasibility: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          feasibility: 1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          feasibility: 2,
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
          goal: 2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          goal: 1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          goal: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          goal: -1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          goal: -2,
        },
      },
    ],
  },
  {
    text: 'I lack a clear direction for my next steps.',
    answers: [
      {
        text: '5 – Applies completely',
        effects: {
          goal: -2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          goal: -1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          goal: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          goal: 1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          goal: 2,
        },
      },
    ],
  },
  {
    text: 'I’m confident in what I want to achieve.',
    answers: [
      {
        text: '5 – Applies completely',
        effects: {
          goal: 2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          goal: 1,
        },
      },
      {
        text: '3 – Neutral / Mixed',
        effects: {
          goal: 0,
        },
      },
      {
        text: '2 – Applies slightly',
        effects: {
          goal: -1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          goal: -2,
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
    text: 'I often question whether any of this makes sense.',
    answers: [
      {
        text: '5 – Applies completely',
        effects: {
          meaning: -2,
        },
      },
      {
        text: '4 – Applies somewhat',
        effects: {
          meaning: -1,
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
          meaning: 1,
        },
      },
      {
        text: '1 – Does not apply at all',
        effects: {
          meaning: 2,
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
    text: 'I’m excited to pursue new ideas.',
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
    text: 'I look forward to getting things done.',
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
