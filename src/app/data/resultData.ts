export type Neurotransmitter =
  | 'oxytocin'
  | 'serotonin'
  | 'dopamine'
  | 'endorphins'
  | 'sinn'
  | 'machbarkeit'
  | 'ziel';

export const RESULTDATA: {
  [key in Neurotransmitter]: {
    tips: { title: string; text: string }[];
    reasons: string[];
    input: string;
  };
} = {
  dopamine: {
    tips: [
      {
        title: '💪 1. Herausforderungen meistern',
        text: '👉 Lege bewusste Zeiten ohne Social Media, Handy & Reizüberflutung ein (z. B. 1–2 Stunden morgens ohne Bildschirm).→ Das reduziert künstliche Reize und hilft dem System, sich neu zu regulieren.',
      },
      {
        title: '🧹 2. Kleine Aufgaben erledigen',
        text: '👉 Das Dopaminsystem liebt das erfüllen von Zielen. Schon Dinge wie Aufräumen, To-dos abhaken oder dein Bett machen geben deinem Gehirn ein klares Dopamin-Signal: "Ich komme voran."',
      },
    ],
    reasons: [
      '📱 Chronische Überstimulation: Ständige Reize durch Social Media, Dopamin-Kicks (Zucker, Pornografie, Serien, Benachrichtigungen & Mails checken) überfordern das System.',
      'Bewegungsmangel & schlechter Schlaf: Dopamin wird durch körperliche Aktivität aufgebaut und im Schlaf reguliert.',
    ],
    input:
      'Dopamin sorgt dafür, dass du motiviert bist, etwas zu tun und Herausforderungen anzugehen. Es macht dich neugierig, fokussiert und zielgerichtet. Ohne ausreichend Dopamin fehlt dir der Antrieb – du schiebst Dinge auf, lässt dich leicht ablenken und suchst nach schnellen Belohnungen. Ein stabiles Dopamin-System hilft dir, dranzubleiben, deinen Weg zu gehen, und die Aufgaben und Ideen umzusetzen, die dir wichtig sind und dich erfüllen.',
  },
  oxytocin: {
    tips: [
      {
        title: '1. Echte Nähe suchen',
        text: '👉 → Umarme bewusst Menschen, halte Händchen, nimm Blickkontakt auf – auch kurze, ehrliche Berührung wirkt.',
      },
    ],
    reasons: ['🧍‍♂️ Wenig echte Verbindung', '🔄 Vergleich in sozialen Medien'],
    input:
      'Oxytocin ist ein Hormon und Neurotransmitter, das für Vertrauen, Nähe und soziale Bindung sorgt. Es wird z. B. beim Kuscheln, Umarmen oder in tiefen Gesprächen ausgeschüttet und stärkt das Gefühl von Verbundenheit und Sicherheit.',
  },
  serotonin: {
    tips: [
      {
        title: '1. ...',
        text: '👉 ...',
      },
    ],
    reasons: ['Mood instability', 'Lack of structure and sunlight'],
    input: 'blabla',
  },
  endorphins: {
    tips: [
      {
        title: '1. ...',
        text: '👉 ....',
      },
    ],
    reasons: ['Mood instability', 'Lack of structure and sunlight'],
    input: 'blabla',
  },
  ziel: {
    tips: [
      {
        title: '1. ....',
        text: '👉 ',
      },
    ],
    reasons: ['Mood instability', 'Lack of structure and sunlight'],
    input: 'zielzielziele',
  },
  machbarkeit: {
    tips: [
      {
        title: '1. ....',
        text: '👉......u regulieren.',
      },
    ],
    reasons: ['llll', 'l'],
    input: 'machbarkeit',
  },
  sinn: {
    tips: [
      {
        title: '1. ....',
        text: '👉 L ohne Bildscm, sich neu zu regulieren.',
      },
    ],
    reasons: ['Mood instability', 'Lack of structure and sunlight'],
    input: 'sinn',
  },
};
