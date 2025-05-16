export const QUESTIONS = [
  {
    text: 'Wie oft fühlst du dich in letzter Zeit antriebslos oder unmotiviert, selbst bei Aufgaben, die dir eigentlich wichtig sind?',
    answers: [
      { text: 'Selten', effects: { dopamine: 2 } },
      { text: 'Manchmal', effects: { dopamine: 1 } },
      { text: 'Weiss nicht', effects: { dopamine: 0 } },
      { text: 'Oft', effects: { dopamine: -1 } },
      { text: 'Sehr oft', effects: { dopamine: -2 } },
    ],
  },
  {
    text: 'Wie oft suchst du gezielt nach schnellen Belohnungen oder Ablenkungen (z. B. Social Media, Snacks, Serien), obwohl du eigentlich etwas anderes tun wolltest?',
    answers: [
      { text: 'Selten', effects: { dopamine: 2 } },
      { text: 'Manchmal', effects: { dopamine: 1 } },
      { text: 'Weiss nicht', effects: { dopamine: 0 } },
      { text: 'Oft', effects: { dopamine: -1 } },
      { text: 'Sehr oft', effects: { dopamine: -2 } },
    ],
  },
  {
    text: 'Wie oft erlebst du im Alltag Momente echter Nähe und Verbindung – sei es privat oder beruflich?',
    answers: [
      { text: 'Selten', effects: { oxytocin: 2 } },
      { text: 'Manchmal', effects: { oxytocin: 1 } },
      { text: 'Weiss nicht', effects: { oxytocin: 0 } },
      { text: 'Oft', effects: { oxytocin: -1 } },
      { text: 'Sehr oft', effects: { oxytocin: -2 } },
    ],
  },
  {
    text: 'Wie oft nimmst du dir Zeit für echte Präsenz – ohne Ablenkung – im Kontakt mit anderen oder mit dir selbst?',
    answers: [
      { text: 'Selten', effects: { oxytocin: 2 } },
      { text: 'Manchmal', effects: { oxytocin: 1 } },
      { text: 'Weiss nicht', effects: { oxytocin: 0 } },
      { text: 'Oft', effects: { oxytocin: -1 } },
      { text: 'Sehr oft', effects: { oxytocin: -2 } },
    ],
  },
  {
    text: 'Wie oft erlebst du in deinem Alltag Momente, in denen du laut lachst oder dich richtig lebendig fühlst?',
    answers: [
      { text: 'Selten', effects: { endorphins: 2 } },
      { text: 'Manchmal', effects: { endorphins: 1 } },
      { text: 'Weiss nicht', effects: { endorphins: 0 } },
      { text: 'Oft', effects: { endorphins: -1 } },
      { text: 'Sehr oft', effects: { endorphins: -2 } },
    ],
  },
  {
    text: 'Hast du regelmäßig körperliche Bewegung, bei der du ins Schwitzen kommst, dein Herz richtig schlägt oder dich auspowerst?',
    answers: [
      { text: 'Selten', effects: { endorphins: 2 } },
      { text: 'Manchmal', effects: { endorphins: 1 } },
      { text: 'Weiss nicht', effects: { endorphins: 0 } },
      { text: 'Oft', effects: { endorphins: -1 } },
      { text: 'Sehr oft', effects: { endorphins: -2 } },
    ],
  },
  {
    text: 'Fühlst du dich in deinem Alltag überwiegend ruhig, stabil und innerlich ausgeglichen?',
    answers: [
      { text: 'Selten', effects: { serotonin: 2 } },
      { text: 'Manchmal', effects: { serotonin: 1 } },
      { text: 'Weiss nicht', effects: { serotonin: 0 } },
      { text: 'Oft', effects: { serotonin: -1 } },
      { text: 'Sehr oft', effects: { serotonin: -2 } },
    ],
  },
  {
    text: 'Wie oft bist du in der Natur & bewegst dich an der frischen Luft?',
    answers: [
      { text: 'Selten', effects: { serotonin: 2 } },
      { text: 'Manchmal', effects: { serotonin: 1 } },
      { text: 'Weiss nicht', effects: { serotonin: 0 } },
      { text: 'Oft', effects: { serotonin: -1 } },
      { text: 'Sehr oft', effects: { serotonin: -2 } },
    ],
  },
  {
    text: 'Wie oft erlebst du Klarheit über den Zweck oder das „Warum“ hinter deinen täglichen Aktivitäten?',
    answers: [
      { text: 'Selten', effects: { sinn: 2 } },
      { text: 'Manchmal', effects: { sinn: 1 } },
      { text: 'Weiss nicht', effects: { sinn: 0 } },
      { text: 'Oft', effects: { sinn: -1 } },
      { text: 'Sehr oft', effects: { sinn: -2 } },
    ],
  },
  {
    text: 'Fühlst du dich mit dem, was du im Alltag tust, innerlich verbunden oder erfüllt?',
    answers: [
      { text: 'Selten', effects: { sinn: 2 } },
      { text: 'Manchmal', effects: { sinn: 1 } },
      { text: 'Weiss nicht', effects: { sinn: 0 } },
      { text: 'Oft', effects: { sinn: -1 } },
      { text: 'Sehr oft', effects: { sinn: -2 } },
    ],
  },
  {
    text: 'Wie klar ist dir aktuell, was du konkret als Nächstes tun musst, um deine Ziele zu erreichen?',
    answers: [
      { text: 'Unklar', effects: { machbarkeit: 2 } },
      { text: 'So so', effects: { machbarkeit: 1 } },
      { text: 'Weiss nicht', effects: { machbarkeit: 0 } },
      { text: 'Klar', effects: { machbarkeit: -1 } },
      { text: 'Sehr klar', effects: { machbarkeit: -2 } },
    ],
  },
  {
    text: 'Kannst du Prioritäten setzen und unterscheiden, was wirklich wichtig ist?',
    answers: [
      { text: 'Selten', effects: { machbarkeit: 2 } },
      { text: 'Manchmal', effects: { machbarkeit: 1 } },
      { text: 'Weiss nicht', effects: { machbarkeit: 0 } },
      { text: 'Oft', effects: { machbarkeit: -1 } },
      { text: 'Sehr oft', effects: { machbarkeit: -2 } },
    ],
  },
  {
    text: 'Hast du konkrete Ziele, auf die du aktiv hinarbeitest?',
    answers: [
      { text: 'Nein', effects: { ziel: 2 } },
      { text: 'Nicht wirklich', effects: { ziel: 1 } },
      { text: 'Weiss nicht', effects: { ziel: 0 } },
      { text: 'Unklare Ziele', effects: { ziel: -1 } },
      { text: 'Ja', effects: { ziel: -2 } },
    ],
  },
  {
    text: 'Wie klar ist dir aktuell, was du im Leben oder im Beruf wirklich erreichen willst?',
    answers: [
      { text: 'Unklar', effects: { ziel: 2 } },
      { text: 'So so', effects: { ziel: 1 } },
      { text: 'Weiss nicht', effects: { ziel: 0 } },
      { text: 'Klar', effects: { ziel: -1 } },
      { text: 'Sehr klar', effects: { ziel: -2 } },
    ],
  },
  // Add more questions here as needed
];
