export const QUESTIONS = [
  {
    text: 'Ich habe ein klares Gefühl dafür, was mir im Leben wichtig ist.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          klarheit: -2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          klarheit: -1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          klarheit: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          klarheit: 1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          klarheit: 2,
        },
      },
    ],
  },
  {
    text: 'Ich bin oft unsicher, was meine innere Ausrichtung betrifft.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          klarheit: 2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          klarheit: 1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          klarheit: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          klarheit: -1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          klarheit: -2,
        },
      },
    ],
  },
  {
    text: 'Meine Gedanken sind geordnet und zielgerichtet.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          klarheit: -2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          klarheit: -1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          klarheit: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          klarheit: 1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          klarheit: 2,
        },
      },
    ],
  },
  {
    text: 'Ich fühle mich gerade genau richtig gefordert.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          challenge: -2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          challenge: -1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          challenge: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          challenge: 1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          challenge: 2,
        },
      },
    ],
  },
  {
    text: 'Meine Aufgaben überfordern mich regelmäßig.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          challenge: 2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          challenge: 1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          challenge: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          challenge: -1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          challenge: -2,
        },
      },
    ],
  },
  {
    text: 'Ich langweile mich häufig, weil meine Aufgaben zu leicht sind.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          challenge: 2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          challenge: 1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          challenge: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          challenge: -1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          challenge: -2,
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
          raum: 2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          raum: 1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          raum: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          raum: -1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          raum: -2,
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
          raum: -2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          raum: -1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          raum: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          raum: 1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          raum: 2,
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
          raum: -2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          raum: -1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          raum: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          raum: 1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          raum: 2,
        },
      },
    ],
  },
  {
    text: 'Ich habe feste Rituale oder Routinen, die mir Orientierung geben.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          struktur: -2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          struktur: -1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          struktur: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          struktur: 1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          struktur: 2,
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
          struktur: 2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          struktur: 1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          struktur: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          struktur: -1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          struktur: -2,
        },
      },
    ],
  },
  {
    text: 'Ich gestalte meinen Tagesablauf bewusst und mit Klarheit.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          struktur: -2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          struktur: -1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          struktur: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          struktur: 1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          struktur: 2,
        },
      },
    ],
  },
  {
    text: 'Ich bin bei meinen Aufgaben meist voll bei der Sache.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          fokus: -2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          fokus: -1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          fokus: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          fokus: 1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          fokus: 2,
        },
      },
    ],
  },
  {
    text: 'Ich lasse mich leicht ablenken.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          fokus: 2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          fokus: 1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          fokus: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          fokus: -1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          fokus: -2,
        },
      },
    ],
  },
  {
    text: 'Ich nehme den gegenwärtigen Moment bewusst wahr.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          fokus: -2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          fokus: -1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          fokus: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          fokus: 1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          fokus: 2,
        },
      },
    ],
  },
  {
    text: 'Ich fühle mich meinen Aufgaben gewachsen.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          machbarkeit: -2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          machbarkeit: -1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          machbarkeit: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          machbarkeit: 1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          machbarkeit: 2,
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
          machbarkeit: -2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          machbarkeit: -1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          machbarkeit: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          machbarkeit: 1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          machbarkeit: 2,
        },
      },
    ],
  },
  {
    text: 'Ich bin oft blockiert und komme nicht in die Umsetzung.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          machbarkeit: 2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          machbarkeit: 1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          machbarkeit: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          machbarkeit: -1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          machbarkeit: -2,
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
          ziel: -2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          ziel: -1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          ziel: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          ziel: 1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          ziel: 2,
        },
      },
    ],
  },
  {
    text: 'Mir fehlt eine klare Richtung für meine nächsten Schritte.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          ziel: 2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          ziel: 1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          ziel: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          ziel: -1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          ziel: -2,
        },
      },
    ],
  },
  {
    text: 'Ich bin mir sicher, was ich erreichen will.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          ziel: -2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          ziel: -1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          ziel: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          ziel: 1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          ziel: 2,
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
          sinn: -2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          sinn: -1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          sinn: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          sinn: 1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          sinn: 2,
        },
      },
    ],
  },
  {
    text: 'Ich frage mich oft, ob das alles überhaupt Sinn macht.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          sinn: 2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          sinn: 1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          sinn: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          sinn: -1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          sinn: -2,
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
          sinn: -2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          sinn: -1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          sinn: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          sinn: 1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          sinn: 2,
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
    text: 'Ich finde es schwer, mich emotional auf andere einzulassen.',
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
    text: 'Ich erlebe regelmäßig Momente von Vertrauen und Herzensnähe.',
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
    text: 'Ich habe Lust, neue Ideen umzusetzen.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          dopamin: -2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          dopamin: -1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          dopamin: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          dopamin: 1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          dopamin: 2,
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
          dopamin: 2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          dopamin: 1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          dopamin: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          dopamin: -1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          dopamin: -2,
        },
      },
    ],
  },
  {
    text: 'Ich freue mich darauf, Dinge anzugehen.',
    answers: [
      {
        text: '5 – trifft voll zu',
        effects: {
          dopamin: -2,
        },
      },
      {
        text: '4 – trifft eher zu',
        effects: {
          dopamin: -1,
        },
      },
      {
        text: '3 – teils-teils',
        effects: {
          dopamin: 0,
        },
      },
      {
        text: '2 – trifft wenig zu',
        effects: {
          dopamin: 1,
        },
      },
      {
        text: '1 – trifft gar nicht zu',
        effects: {
          dopamin: 2,
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
    text: 'Ich reagiere schnell gereizt oder unruhig.',
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
    text: 'Ich vertraue darauf, dass sich die Dinge entwickeln dürfen.',
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
    text: 'Ich kann Momente der Freude bewusst wahrnehmen.',
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
    text: 'In meinem Alltag fehlt mir oft die Leichtigkeit.',
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
    text: 'Ich finde regelmäßig kleine Dinge, über die ich mich freuen kann.',
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
];
