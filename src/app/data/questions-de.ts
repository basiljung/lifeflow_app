import { SelfcheckTopics } from './resultData';

export type AnswerOption = {
  text: string;
  effects: {
    [key in SelfcheckTopics]?: number; // Optional, weil pro Frage nur ein Thema betroffen ist
  };
};

export type Question = {
  text: string;
  answers: AnswerOption[];
};

export const QUESTIONS_DE: Question[] = [
  {
    text: 'Ich habe ein klares Gefühl dafür, was mir im Leben wichtig ist.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          clarity_goal: 2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          clarity_goal: 1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          clarity_goal: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          clarity_goal: -1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          clarity_goal: -2,
        },
      },
    ],
  },
  {
    text: 'Ich habe konkrete Ziele, auf die ich hinarbeite.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          clarity_goal: 2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          clarity_goal: 1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          clarity_goal: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          clarity_goal: -1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          clarity_goal: -2,
        },
      },
    ],
  },
  {
    text: 'Ich bin oft unsicher, über meine Richtung & meine nächsten Schritte.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          clarity_goal: -2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          clarity_goal: -1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          clarity_goal: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          clarity_goal: 1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          clarity_goal: 2,
        },
      },
    ],
  },
  {
    text: 'Meine Aufgaben oder mein Alltag überfordern mich regelmäßig.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          feasibility_challenge: -2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          feasibility_challenge: -1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          feasibility_challenge: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          feasibility_challenge: 1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          feasibility_challenge: 2,
        },
      },
    ],
  },
  {
    text: 'Ich langweile mich häufig, weil ich nicht genug gefordert bin.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          feasibility_challenge: -2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          feasibility_challenge: -1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          feasibility_challenge: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          feasibility_challenge: 1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          feasibility_challenge: 2,
        },
      },
    ],
  },
  {
    text: 'Ich weiß, wie ich meine Ziele in konkrete Schritte umsetze.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          feasibility_challenge: 2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          feasibility_challenge: 1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          feasibility_challenge: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          feasibility_challenge: -1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          feasibility_challenge: -2,
        },
      },
    ],
  },
  {
    text: 'Ich fühle mich innerlich eng oder emotional blockiert.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          emotional_space: -2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          emotional_space: -1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          emotional_space: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          emotional_space: 1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          emotional_space: 2,
        },
      },
    ],
  },
  {
    text: 'Ich habe genug Raum für mich selbst und meine Gefühle.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          emotional_space: 2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          emotional_space: 1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          emotional_space: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          emotional_space: -1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          emotional_space: -2,
        },
      },
    ],
  },
  {
    text: 'Ich kann gut mit innerem Druck umgehen.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          emotional_space: 2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          emotional_space: 1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          emotional_space: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          emotional_space: -1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          emotional_space: -2,
        },
      },
    ],
  },
  {
    text: 'Ich habe feste Zeitblöcke oder Routinen, die mir Orientierung geben.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          structure_focus: 2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          structure_focus: 1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          structure_focus: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          structure_focus: -1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          structure_focus: -2,
        },
      },
    ],
  },
  {
    text: 'Mein Alltag verläuft oft chaotisch oder unstrukturiert.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          structure_focus: -2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          structure_focus: -1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          structure_focus: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          structure_focus: 1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          structure_focus: 2,
        },
      },
    ],
  },
  {
    text: 'Ich widme meinen Aufgaben oder Aktivitäten meist voll Aufmerksamkeit.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          structure_focus: 2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          structure_focus: 1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          structure_focus: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          structure_focus: -1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          structure_focus: -2,
        },
      },
    ],
  },
  {
    text: 'Das, was ich tue, hat für mich persönlich eine tiefe Bedeutung.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          meaning: 2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          meaning: 1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          meaning: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          meaning: -1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          meaning: -2,
        },
      },
    ],
  },
  {
    text: 'Ich schöpfe viel Kraft und Motivation aus dem Sinn meiner Tätigkeit oder meines Lebens.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          meaning: 2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          meaning: 1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          meaning: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          meaning: -1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          meaning: -2,
        },
      },
    ],
  },
  {
    text: 'Ich spüre einen Zusammenhang zwischen meinem Handeln und meinen Werten.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          meaning: 2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          meaning: 1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          meaning: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          meaning: -1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          meaning: -2,
        },
      },
    ],
  },
  {
    text: 'Ich fühle mich mit anderen Menschen verbunden.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          oxytocin: 2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          oxytocin: 1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          oxytocin: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          oxytocin: -1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          oxytocin: -2,
        },
      },
    ],
  },
  {
    text: 'Ich finde es schwer, mich emotional auf andere einzulassen.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          oxytocin: -2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          oxytocin: -1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          oxytocin: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          oxytocin: 1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          oxytocin: 2,
        },
      },
    ],
  },
  {
    text: 'Ich erlebe regelmäßig Momente von Vertrauen und emotionaler Nähe.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          oxytocin: 2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          oxytocin: 1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          oxytocin: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          oxytocin: -1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          oxytocin: -2,
        },
      },
    ],
  },
  {
    text: 'Es fällt mir leicht, mich auf etwas zu konzentrieren und zielorientiert zu sein.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          dopamine: 2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          dopamine: 1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          dopamine: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          dopamine: -1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          dopamine: -2,
        },
      },
    ],
  },
  {
    text: 'Ich fühle mich oft antriebslos oder unmotiviert.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          dopamine: -2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          dopamine: -1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          dopamine: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          dopamine: 1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          dopamine: 2,
        },
      },
    ],
  },
  {
    text: 'Ich bin oft motiviert Dinge anzugehen und umzusetzen.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          dopamine: 2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          dopamine: 1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          dopamine: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          dopamine: -1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          dopamine: -2,
        },
      },
    ],
  },
  {
    text: 'Ich fühle mich innerlich ruhig und stabil.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          serotonin: 2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          serotonin: 1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          serotonin: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          serotonin: -1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          serotonin: -2,
        },
      },
    ],
  },
  {
    text: 'Ich reagiere schnell gereizt oder unruhig.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          serotonin: -2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          serotonin: -1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          serotonin: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          serotonin: 1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          serotonin: 2,
        },
      },
    ],
  },
  {
    text: 'Ich vertraue darauf, dass sich die Dinge entwickeln dürfen.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          serotonin: 2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          serotonin: 1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          serotonin: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          serotonin: -1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          serotonin: -2,
        },
      },
    ],
  },
  {
    text: 'Ich kann Momente der Freude bewusst wahrnehmen.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          endorphins: 2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          endorphins: 1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          endorphins: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          endorphins: -1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          endorphins: -2,
        },
      },
    ],
  },
  {
    text: 'In meinem Alltag fehlt mir oft die Leichtigkeit.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          endorphins: -2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          endorphins: -1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          endorphins: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          endorphins: 1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          endorphins: 2,
        },
      },
    ],
  },
  {
    text: 'Ich finde regelmäßig kleine Dinge, über die ich mich freuen kann.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          endorphins: 2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          endorphins: 1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          endorphins: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          endorphins: -1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          endorphins: -2,
        },
      },
    ],
  },
];
