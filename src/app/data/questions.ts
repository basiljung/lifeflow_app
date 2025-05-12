export const QUESTIONS = [
    {
        text: 'How often do you feel demotivated?',
        answers: [
          { text: 'Rarely', effects: { dopamine: 2 } },
          { text: 'Sometimes', effects: { dopamine: 1 } },
          { text: 'not sure', effects: { dopamine: 0 } },
          { text: 'Often', effects: { dopamine: -1 } },
          { text: 'Very often', effects: { dopamine: -2 } }
        ]
    },
    {
        text: 'How often do you feel distracted?',
        answers: [
          { text: 'Rarely', effects: { dopamine: 2 } },
          { text: 'Sometimes', effects: { dopamine: 1 } },
          { text: 'not sure', effects: { dopamine: 0 } },
          { text: 'Often', effects: { dopamine: -1 } },
          { text: 'Very often', effects: { dopamine: -2 } }
        ]
    },
    {
      text: 'How often do you feel lonely?',
      answers: [
        { text: 'Rarely', effects: { oxytocin: 2 } },
        { text: 'Sometimes', effects: { oxytocin: 1 } },
        { text: 'not sure', effects: { oxytocin: 0 } },
        { text: 'Often', effects: { oxytocin: -1 } },
        { text: 'Very often', effects: { oxytocin: -2 } }
      ]
    },
    {
        text: 'How often do you feel unconfident?',
        answers: [
          { text: 'Rarely', effects: { oxytocin: 2 } },
          { text: 'Sometimes', effects: { oxytocin: 1 } },
          { text: 'not sure', effects: { oxytocin: 0 } },
          { text: 'Often', effects: { oxytocin: -1 } },
          { text: 'Very often', effects: { oxytocin: -2 } }
        ]
    },
    {
      text: 'Do you often do you feel stressed?',
      answers: [
        { text: 'Rarely', effects: { endorphins: 2 } },
        { text: 'Sometimes', effects: { endorphins: 1 } },
        { text: 'not sure', effects: { endorphins: 0 } },
        { text: 'Often', effects: { endorphins: -1 } },
        { text: 'Very often', effects: { endorphins: -2 } }
      ]
    },
    {
        text: 'Do you often do you feel angry?',
        answers: [
          { text: 'Rarely', effects: { endorphins: 2 } },
          { text: 'Sometimes', effects: { endorphins: 1 } },
          { text: 'not sure', effects: { endorphins: 0 } },
          { text: 'Often', effects: { endorphins: -1 } },
          { text: 'Very often', effects: { endorphins: -2 } }
        ]
    },
    {
        text: 'Do you often do you feel tired?',
        answers: [
          { text: 'Rarely', effects: { serotonin: 2 } },
          { text: 'Sometimes', effects: { serotonin: 1 } },
          { text: 'not sure', effects: { serotonin: 0 } },
          { text: 'Often', effects: { serotonin: -1 } },
          { text: 'Very often', effects: { serotonin: -2 } }
        ]
      },
      {
          text: 'Do you often do you feel anxious?',
          answers: [
            { text: 'Rarely', effects: { serotonin: 2 } },
            { text: 'Sometimes', effects: { serotonin: 1 } },
            { text: 'not sure', effects: { serotonin: 0 } },
            { text: 'Often', effects: { serotonin: -1 } },
            { text: 'Very often', effects: { serotonin: -2 } }
          ]
      }
    // Add more questions here as needed
  ];