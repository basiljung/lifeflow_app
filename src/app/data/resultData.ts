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
        title: '1. Herausforderungen meistern',
        text: 'Lege bewusste Zeiten ohne Social Media, Handy & Reizüberflutung ein (z. B. 1–2 Stunden morgens ohne Bildschirm).→ Das reduziert künstliche Reize und hilft dem System, sich neu zu regulieren.',
      },
      {
        title: '2. Kleine Aufgaben erledigen',
        text: 'Das Dopaminsystem liebt das Erfüllen von Zielen. Schon Dinge wie Aufräumen, To-dos abhaken oder dein Bett machen geben deinem Gehirn ein klares Dopamin-Signal: "Ich komme voran."',
      },
      {
        title: '3. Belohnungen bewusst gestalten',
        text: 'Setze dir kleine Etappenziele mit echten Belohnungen – so bleibt dein Dopamin-System im Gleichgewicht.',
      },
    ],
    reasons: [
      'Chronische Überstimulation durch Social Media, Zucker oder Dauerbeschallung überfordert das Dopamin-System.',
      'Bewegungsmangel & schlechter Schlaf stören die natürliche Dopaminregulation.',
      'Fehlendes Zielgefühl führt zu Unruhe und ständiger Ablenkungssuche.',
    ],
    input:
      'Dopamin sorgt dafür, dass du motiviert bist, etwas zu tun und Herausforderungen anzugehen. Es macht dich neugierig, fokussiert und zielgerichtet. Ohne ausreichend Dopamin fehlt dir der Antrieb – du schiebst Dinge auf, lässt dich leicht ablenken und suchst nach schnellen Belohnungen. Ein stabiles Dopamin-System hilft dir, dranzubleiben, deinen Weg zu gehen, und die Aufgaben und Ideen umzusetzen, die dir wichtig sind und dich erfüllen.',
  },
  oxytocin: {
    area: 'Oxytocin',
    tips: [
      {
        title: '1. Echte Nähe suchen',
        text: 'Umarme bewusst Menschen, halte Händchen, nimm Blickkontakt auf – auch kurze, ehrliche Berührung wirkt.',
      },
      {
        title: '2. Tiefe Gespräche führen',
        text: 'Sprich mit vertrauten Menschen über das, was dich wirklich bewegt – das stärkt eure Bindung.',
      },
      {
        title: '3. Für andere da sein',
        text: 'Zeige ehrliches Mitgefühl oder hilf jemandem – auch das aktiviert Oxytocin in dir selbst.',
      },
    ],
    reasons: [
      '🧍‍♂️ Wenig echte Verbindung im Alltag.',
      '🔄 Sozialer Vergleich in sozialen Medien mindert Verbundenheitsgefühl.',
      '💬 Oberflächliche Kommunikation ohne emotionale Tiefe.',
    ],
    input:
      'Oxytocin ist ein Hormon und Neurotransmitter, das für Vertrauen, Nähe und soziale Bindung sorgt. Es wird z. B. beim Kuscheln, Umarmen oder in tiefen Gesprächen ausgeschüttet und stärkt das Gefühl von Verbundenheit und Sicherheit.',
  },
  serotonin: {
    area: 'Serotonin',
    tips: [
      {
        title: '1. Sonnenlicht tanken',
        text: 'Tägliches Licht (besonders morgens) hilft deinem Gehirn, Serotonin zu produzieren – für mehr innere Stabilität.',
      },
      {
        title: '2. Dankbarkeit kultivieren',
        text: 'Schreibe dir regelmäßig 3 Dinge auf, für die du dankbar bist – das stärkt dein emotionales Gleichgewicht.',
      },
      {
        title: '3. Achtsamkeit üben',
        text: 'Nimm dir Zeit für Meditation oder bewusste Pausen – das senkt Stress und stabilisiert deine Stimmung.',
      },
    ],
    reasons: [
      '🕶️ Zu wenig Tageslicht beeinträchtigt die Serotoninbildung.',
      '🌪️ Stimmungsschwankungen durch Stress oder Reizüberflutung.',
      '⛔ Zu wenig positive soziale oder naturverbundene Erfahrungen.',
    ],
    input:
      'Serotonin ist entscheidend für deine emotionale Stabilität, deinen Schlaf-Wach-Rhythmus und dein Wohlbefinden. Es hilft dir, gelassener zu bleiben und hebt die Stimmung.',
  },
  endorphins: {
    area: 'Endorphine',
    tips: [
      {
        title: '1. Bewege deinen Körper',
        text: 'Sport, Tanz oder ein Spaziergang können Endorphine freisetzen – natürliche Glücksbooster!',
      },
      {
        title: '2. Herzlich lachen',
        text: 'Schau einen lustigen Film oder triff Menschen, bei denen du lachen kannst – das hebt die Stimmung sofort.',
      },
      {
        title: '3. Musik & Kreativität nutzen',
        text: 'Höre deine Lieblingsmusik oder sei kreativ – das aktiviert dein emotionales Belohnungssystem.',
      },
    ],
    reasons: [
      '🏠 Bewegungsmangel reduziert die Endorphinausschüttung.',
      '📉 Niedriges Energielevel oder Stimmungstiefs blockieren natürliche Glücksreaktionen.',
      '😐 Wenig soziale oder kreative Aktivitäten im Alltag.',
    ],
    input:
      'Endorphine sind körpereigene Schmerzmittel und Stimmungsaufheller. Sie werden vor allem bei Bewegung, Lachen oder Musik freigesetzt und helfen, Stress abzubauen.',
  },
  goal: {
    area: 'Ziel',
    input:
      'Ein klares Ziel gibt dir Richtung, Motivation und Orientierung. Es hilft deinem Gehirn, Energie zu fokussieren und Fortschritt bewusst wahrzunehmen.',
    tips: [
      {
        title: '1. Klarheit schaffen',
        text: 'Formuliere dein Ziel konkret und positiv – was genau willst du erreichen, und warum?',
      },
      {
        title: '2. Visualisiere dein Ziel',
        text: 'Stell dir regelmäßig vor, wie es sich anfühlt, wenn du dein Ziel erreichst.',
      },
      {
        title: '3. Erzähle jemandem davon',
        text: 'Teile dein Ziel mit jemandem – das schafft Verbindlichkeit und Motivation.',
      },
    ],
    reasons: [
      '🎯 Fehlende Zieldefinition führt zu Orientierungslosigkeit.',
      '🌀 Unklare Prioritäten machen den Fokus schwer.',
      '😶 Keine emotionale Verbindung zum Ziel schwächt den Antrieb.',
    ],
  },
  feasibility: {
    area: 'Machbarkeit',
    input:
      'Machbarkeit gibt deinem Gehirn Sicherheit: Wenn ein Ziel erreichbar erscheint, steigt die Motivation, ins Handeln zu kommen.',
    tips: [
      {
        title: '1. Realistische Schritte planen',
        text: 'Teile große Ziele in kleine, machbare Schritte – das macht sie greifbarer und motivierender.',
      },
      {
        title: '2. Ressourcen prüfen',
        text: 'Überlege, was du brauchst, um voranzukommen – Zeit, Wissen, Unterstützung?',
      },
      {
        title: '3. Druck rausnehmen',
        text: 'Erlaube dir, nicht perfekt zu sein – Fortschritt zählt mehr als Tempo.',
      },
    ],
    reasons: [
      '🧱 Zu hohe Ansprüche führen zu Blockaden.',
      '😵‍💫 Überforderung durch Komplexität lähmt den Antrieb.',
      '🚫 Kein Plan, wie es gehen könnte – das senkt Motivation.',
    ],
  },
  meaning: {
    area: 'Sinn',
    input:
      'Sinnerleben aktiviert tiefe emotionale Systeme im Gehirn. Wenn du weißt, wofür du etwas tust, entsteht innere Kraft und Ausdauer.',
    tips: [
      {
        title: '1. Verbinde dein Handeln mit Sinn',
        text: 'Frage dich: Warum ist mir das wichtig? Was steckt tiefer dahinter?',
      },
      {
        title: '2. Werte reflektieren',
        text: 'Was ist dir im Leben wirklich wichtig? Womit fühlt sich dein Tun stimmig an?',
      },
      {
        title: '3. Anderen helfen',
        text: 'Wenn dein Tun anderen nützt, steigt das Gefühl von Sinn und Erfüllung.',
      },
    ],
    reasons: [
      '🪫 Gefühl der Leere durch mangelnde Verbindung zu inneren Werten.',
      '❓ Fehlende Sinnverbindung im Alltag senkt Motivation.',
      '💤 Routinen ohne Bezug zu größeren Zielen führen zu innerem Stillstand.',
    ],
  },
  clarity: {
    area: 'Klarheit',
    input:
      'Klarheit bedeutet, dich selbst besser zu verstehen – deine Werte, Bedürfnisse und Ziele. Sie entsteht durch innere Ordnung und bewusste Reflexion.',
    tips: [
      {
        title: '1. Gedanken ordnen',
        text: 'Nutze Journaling oder Mindmaps, um deine inneren Themen sichtbar zu machen.',
      },
      {
        title: '2. Fragen stellen',
        text: 'Frage dich: Was will ich wirklich? Was brauche ich gerade?',
      },
      {
        title: '3. Fokus setzen',
        text: 'Konzentriere dich bewusst auf eine Sache – das schafft geistige Ordnung.',
      },
    ],
    reasons: [
      '🌫️ Inneres Chaos durch Reizüberflutung.',
      '⏳ Keine Zeit zur Reflexion.',
      '🌀 Zu viele offene Baustellen im Kopf.',
    ],
  },
  challenge: {
    area: 'Herausforderung',
    input:
      'Die richtige Balance aus Herausforderung und Können bringt dich in den Flow. Zu wenig reizt dich nicht – zu viel blockiert dich.',
    tips: [
      {
        title: '1. Raus aus der Komfortzone',
        text: 'Such dir eine kleine Herausforderung, die dich kitzelt – aber nicht überfordert.',
      },
      {
        title: '2. Lernziele setzen',
        text: 'Formuliere, was du dabei lernen oder ausprobieren willst – statt nur zu leisten.',
      },
      {
        title: '3. Nachjustieren',
        text: 'Passe die Schwierigkeit an, wenn es zu einfach oder zu schwer ist.',
      },
    ],
    reasons: [
      '😐 Unterforderung führt zu Langeweile und innerer Leere.',
      '😖 Überforderung blockiert und erzeugt Stress.',
      '🔁 Fehlende Abwechslung lässt dich stagnieren.',
    ],
  },
  space: {
    area: 'Raum',
    input:
      'Innerer Raum ist die Grundlage für emotionale Verarbeitung und Kreativität. Ohne ihn fehlt dir Tiefe und Ruhe.',
    tips: [
      {
        title: '1. Inneren Raum schaffen',
        text: 'Plane bewusste Pausen ohne Input – kein Handy, keine To-dos, nur du mit dir.',
      },
      {
        title: '2. Natur nutzen',
        text: 'Gehe raus in die Natur – sie wirkt klärend und öffnet innere Räume.',
      },
      {
        title: '3. Langeweile zulassen',
        text: 'Erlaube dir, einfach mal nichts zu tun – Kreativität entsteht im Leerlauf.',
      },
    ],
    reasons: [
      '📵 Dauerinput durch Medien & Aufgaben lässt keine Ruhe entstehen.',
      '⏰ Keine Zeit für Stille und Selbstkontakt.',
      '🧠 Überladung blockiert emotionales Verarbeiten.',
    ],
  },
  structure: {
    area: 'Struktur',
    input:
      'Struktur gibt deinem Nervensystem Sicherheit und deinem Tag Halt. Sie hilft dir, besser mit Stress umzugehen und fokussierter zu arbeiten.',
    tips: [
      {
        title: '1. Feste Routinen etablieren',
        text: 'Nutze Morgen- oder Abendroutinen, um deinem Tag eine klare Struktur zu geben.',
      },
      {
        title: '2. To-do-Listen mit Fokus',
        text: 'Begrenze deine Tagesziele auf max. 3 Dinge – weniger ist mehr.',
      },
      {
        title: '3. Wochenplanung machen',
        text: 'Plane grob voraus – das gibt Sicherheit und spart Energie.',
      },
    ],
    reasons: [
      '🌀 Chaos im Alltag durch fehlende Strukturen.',
      '📆 Fehlende Planung erschwert Prioritäten.',
      '🔥 Dauerstress ohne feste Abläufe.',
    ],
  },
  focus: {
    area: 'Fokus',
    input:
      'Fokus entsteht, wenn dein Gehirn nicht ständig umschaltet. Mit bewusster Aufmerksamkeit kannst du tiefer arbeiten und mehr erreichen.',
    tips: [
      {
        title: '1. Ablenkungen reduzieren',
        text: 'Schalte unnötige Benachrichtigungen aus und arbeite in Fokusblöcken.',
      },
      {
        title: '2. Pomodoro-Technik nutzen',
        text: '25 Minuten konzentriert, 5 Minuten Pause – das trainiert deine Aufmerksamkeit.',
      },
      {
        title: '3. Reize nach der Arbeit',
        text: 'Verschiebe Social Media & Co. bewusst nach erledigten Aufgaben.',
      },
    ],
    reasons: [
      '📲 Reizüberflutung durch digitale Medien.',
      '🧠 Keine Konzentrationsstrategie trainiert.',
      '🚪 Ständige Unterbrechungen verhindern Tiefenarbeit.',
    ],
  },
};
