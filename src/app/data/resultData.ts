import { ResultData } from '../self-check-logic/self-check-logic.component';

export type SelfcheckTopics =
  | 'clarity'
  | 'challenge'
  | 'space'
  | 'structure'
  | 'focus'
  | 'feasibility'
  | 'goal'
  | 'meaning'
  | 'oxytocin'
  | 'dopamine'
  | 'serotonin'
  | 'endorphins';

export const RESULTDATA: ResultData = {
  dopamine: {
    area: 'Dopamin',
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
    area: 'Oxytocin',
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
    area: 'Serotonin',
    tips: [
      {
        title: '1. Sonnenlicht tanken',
        text: '👉 Tägliches Licht (besonders morgens) hilft deinem Gehirn, Serotonin zu produzieren – für mehr innere Stabilität.',
      },
    ],
    reasons: ['🕶️ Zu wenig Tageslicht', '🌪️ Stimmungsschwankungen'],
    input:
      'Serotonin ist entscheidend für deine emotionale Stabilität, deinen Schlaf-Wach-Rhythmus und dein Wohlbefinden. Es hilft dir, gelassener zu bleiben und hebt die Stimmung.',
  },
  endorphins: {
    area: 'Endorphine',
    tips: [
      {
        title: '1. Bewege deinen Körper',
        text: '👉 Sport, Tanz oder ein Spaziergang können Endorphine freisetzen – natürliche Glücksbooster!',
      },
    ],
    reasons: ['🏠 Bewegungsmangel', '📉 Niedriges Energielevel'],
    input:
      'Endorphine sind körpereigene Schmerzmittel und Stimmungsaufheller. Sie werden vor allem bei Bewegung, Lachen oder Musik freigesetzt und helfen, Stress abzubauen.',
  },
  goal: {
    area: 'Ziel',
    tips: [
      {
        title: '1. Klarheit schaffen',
        text: '👉 Formuliere dein Ziel konkret und positiv – was genau willst du erreichen, und warum?',
      },
    ],
    reasons: ['🎯 Fehlende Zieldefinition', '🌀 Unklare Prioritäten'],
    input:
      'Ein klares Ziel gibt dir Richtung, Motivation und Orientierung. Es hilft deinem Gehirn, Energie zu fokussieren und Fortschritt bewusst wahrzunehmen.',
  },
  feasibility: {
    area: 'Machbarkeit',
    tips: [
      {
        title: '1. Realistische Schritte planen',
        text: '👉 Teile große Ziele in kleine, machbare Schritte – das macht sie greifbarer und motivierender.',
      },
    ],
    reasons: ['🧱 Zu hohe Ansprüche', '😵‍💫 Überforderung durch Komplexität'],
    input:
      'Machbarkeit gibt deinem Gehirn Sicherheit: Wenn ein Ziel erreichbar erscheint, steigt die Motivation, ins Handeln zu kommen.',
  },
  meaning: {
    area: 'Sinn',
    tips: [
      {
        title: '1. Verbinde dein Handeln mit Sinn',
        text: '👉 Frage dich: Warum ist mir das wichtig? Was steckt tiefer dahinter?',
      },
    ],
    reasons: ['🪫 Gefühl der Leere', '❓ Fehlende Sinnverbindung im Alltag'],
    input:
      'Sinnerleben aktiviert tiefe emotionale Systeme im Gehirn. Wenn du weißt, wofür du etwas tust, entsteht innere Kraft und Ausdauer.',
  },
  clarity: {
    area: 'Klarheit',
    tips: [
      {
        title: '1. Gedanken ordnen',
        text: '👉 Nutze Journaling oder Mindmaps, um deine inneren Themen sichtbar zu machen.',
      },
    ],
    reasons: ['🌫️ Inneres Chaos', '⏳ Keine Zeit zur Reflexion'],
    input:
      'Klarheit bedeutet, dich selbst besser zu verstehen – deine Werte, Bedürfnisse und Ziele. Sie entsteht durch innere Ordnung und bewusste Reflexion.',
  },
  challenge: {
    area: 'Herausforderung',
    tips: [
      {
        title: '1. Raus aus der Komfortzone',
        text: '👉 Such dir eine kleine Herausforderung, die dich kitzelt – aber nicht überfordert.',
      },
    ],
    reasons: ['😐 Unterforderung', '😖 Überforderung'],
    input:
      'Die richtige Balance aus Herausforderung und Können bringt dich in den Flow. Zu wenig reizt dich nicht – zu viel blockiert dich.',
  },
  space: {
    area: 'Raum',
    tips: [
      {
        title: '1. Inneren Raum schaffen',
        text: '👉 Plane bewusste Pausen ohne Input – kein Handy, keine To-dos, nur du mit dir.',
      },
    ],
    reasons: ['📵 Dauerinput', '⏰ Keine Zeit für Stille'],
    input:
      'Innerer Raum ist die Grundlage für emotionale Verarbeitung und Kreativität. Ohne ihn fehlt dir Tiefe und Ruhe.',
  },
  structure: {
    area: 'Struktur',
    tips: [
      {
        title: '1. Feste Routinen etablieren',
        text: '👉 Nutze Morgen- oder Abendroutinen, um deinem Tag eine klare Struktur zu geben.',
      },
    ],
    reasons: ['🌀 Chaos im Alltag', '📆 Fehlende Planung'],
    input:
      'Struktur gibt deinem Nervensystem Sicherheit und deinem Tag Halt. Sie hilft dir, besser mit Stress umzugehen und fokussierter zu arbeiten.',
  },
  focus: {
    area: 'Fokus',
    tips: [
      {
        title: '1. Ablenkungen reduzieren',
        text: '👉 Schalte unnötige Benachrichtigungen aus und arbeite in Fokusblöcken.',
      },
    ],
    reasons: ['📲 Reizüberflutung', '🧠 Keine Konzentrationsstrategie'],
    input:
      'Fokus entsteht, wenn dein Gehirn nicht ständig umschaltet. Mit bewusster Aufmerksamkeit kannst du tiefer arbeiten und mehr erreichen.',
  },
};
