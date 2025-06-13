import { ResultData } from '../self-check-logic/self-check-logic.component';

export type SelfcheckTopics =
  | 'space'
  | 'structure_focus'
  | 'feasibility_challenge'
  | 'clarity_goal'
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
        title: '1. Herausforderungen meistern - Fokuszeit - Deepwork',
        text: 'Lege bewusste Zeiten ohne Social Media, Handy & Reizüberflutung ein (z. B. 1–2 Stunden morgens voll fokussiert).→ Das reguliert & stabilisiert das Dopaminsystem für die restliche Zeit des Tages.',
      },
      {
        title: '2. Kleine Aufgaben erledigen',
        text: 'Das Dopaminsystem liebt das Erfüllen von Zielen. Schon Dinge wie Aufräumen, Waschen, To-dos abhaken oder dein Bett machen geben deinem Gehirn ein klares Dopamin-Signal: "Ich komme voran."',
      },
      {
        title: '3. Belohnungen bewusst gestalten',
        text: 'Belohne dich für Dinge die wirklich anstrenged waren und dein Leben vorangebracht haben, das kann für die Beziehung, Job, Haus, Gesundheit... sein. Das Dopamin-System soll belohnt werden für Dinge die dem Überleben dienen.',
      },
    ],
    reasons: [
      'Chronische Überstimulation durch Social Media, Zucker oder Dauerbeschallung überfordert das Dopamin-System.',
      'Fehlende Klarheit über Sinn & Richtung führt zu Unruhe und ständiger Ablenkungssuche.',
      'Bewegungsmangel & schlechter Schlaf stören die natürliche Dopaminregulation.',
      'Fehlende Verarbeitung von Emotionen was oft zu ungesunder Ablenkung führt.',
    ],
    input:
      'Dopamin sorgt dafür, dass du motiviert bist, etwas zu tun und Herausforderungen anzugehen. Es macht dich neugierig, fokussiert und zielgerichtet. Zunächst müssen wir die zentrale Funktion von Dopamin verstehen. Für unsere Jäger-und-Sammler-Vorfahren spielte Dopamin eine entscheidende Rolle dabei, die Motivation & Zielstrebigkeit zu erzeugen, herausfordernde und unangenehme Aufgaben zu bewältigen, die für ihr Überleben notwendig waren. Ohne ausreichend Dopamin fehlt dir der Antrieb – du schiebst Dinge auf, lässt dich leicht ablenken. Ein stabiles Dopamin-System hilft dir, dranzubleiben, deinen Weg zu gehen, und die Aufgaben und Ideen umzusetzen, die dir wichtig sind und dich erfüllen.  Ein gestörtes Dopamin-System hat gelernt sich durch schnellen Belohnungen zu befriedigen, es ist kein Antrieb da und der Fokus fehlt.',
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
      'Wenig echte Verbindung im Alltag. Also oft oberflächliche Kommunikation ohne emotionale Tiefe.',
      'Sozialer Vergleich in sozialen Medien mindert Verbundenheitsgefühl fördert Isolation.',
      'Das kultivieren der Verbindung zu dir selbst fehlt.',
    ],
    input:
      'Oxytocin ist ein Hormon und Neurotransmitter, das für Vertrauen, Nähe und soziale Bindung sorgt. Es wird z. B. beim Kuscheln, Umarmen oder in tiefen Gesprächen ausgeschüttet und stärkt das Gefühl von Verbundenheit und Sicherheit. Wir verbinden uns auf vielfältige Weise mit anderen Menschen – und das ist kein Zufall. Die Evolution hat uns so programmiert, weil Verbindung unser Überleben sichert: Wir helfen einander, wir pflanzen uns fort, wir kümmern uns umeinander – und genau dadurch bestehen wir als Menschheit. Wir haben nicht nur Beziehungen zu anderen, sondern auch zu uns selbst.',
  },
  serotonin: {
    area: 'Serotonin',
    tips: [
      {
        title: '1. Sonnenlicht tanken',
        text: 'Tägliches Licht (besonders morgens) hilft deinem Gehirn, Serotonin zu produzieren – für mehr innere Stabilität & Ruhe.',
      },
      {
        title: '2. Natur & leichte Bewegung an der frischen Luft',
        text: '→ Bewegung + Sonnenlicht = Serotonin-Boost.',
      },
      {
        title: '3. Achtsamkeit üben',
        text: 'Regelmäßige Stille durch z.B. Meditation oder bewusste Pausen – das senkt Stress, stabilisiert deine Stimmung und fördert Serotonin im Gehirn.',
      },
    ],
    reasons: [
      'Fehlende Darmgesundheit - 90% des Serotonins wird im Darm produziert',
      'Dauerstress erhöht Cortisol – und das blockiert die Serotoninproduktion.',
      'Zu wenig positive soziale oder naturverbundene Erfahrungen.',
    ],
    input:
      'Serotonin ist ein magischer Botenstoff, der - wenn er richtig aktiviert wird - zu einem deutlich gesünderen Lebensgefühl verhilft. Am besten versteht man Serotonin als den Botenstoff, der uns dabei hilft, gut auf unseren Körper zu achten. In unserer modernen Welt sprechen wir oft von *„mentaler Gesundheit“*, als wäre das etwas, das nur im Kopf stattfindet. Doch das stimmt so nicht. Ein ruhiger, gesunder und energiegeladener Körper ist die Grundlage für echte mentale Stärke und innere Freude. Serotonin sorgt dafür das du deinem Köper sorgst und damit dein System voller Energie und in guter Stimmung ist.',
  },
  endorphins: {
    area: 'Endorphine',
    tips: [
      {
        title: '1. Bewege deinen Körper intensiv',
        text: 'Mach Sport, der dich richtig fordert – zum Beispiel HIIT. Wenn du an deine körperlichen Grenzen gehst, schüttet dein Körper Endorphine aus.',
      },
      {
        title: '2. Lach von Herzen',
        text: 'Verbringe Zeit mit Menschen, die dir guttun. Gemeinsames Lachen, Tanzen oder Spielen sorgt für emotionale und soziale Intensität.',
      },
      {
        title: '3. Reiz & Herausforderung',
        text: 'Kälte, Eisbäder oder der Wechsel von Sauna zu kalter Dusche – Diese Belastungen sind natürliche Glücksbooster!',
      },
    ],
    reasons: [
      'Mangel an Reiz, Herausforderung & intensiver körperlicher Betätigung',
      'Chronischer Stress & Überlastung',
      'Fehlende emotionale und soziale Intensität – z. B. Freude, Lachen, Spiel, Kreativität & Nähe',
    ],
    input:
      'Endorphine sind wie ein innerer Freund, der dich sowohl stärkt als auch beruhigt. In stressigen oder anstrengenden Momenten sagen sie: „Du schaffst das.“– sie lindern Schmerzen, stabilisieren dein Nervensystem und helfen dir durchzuhalten. In Momenten der Entspannung, des Lachens oder Loslassens sagen sie:„Es ist okay.“ – sie schenken Leichtigkeit, Erleichterung und innere Freude. Deshalb werden Endorphine sowohl beim Sport als auch beim Tanzen, Lachen oder Weinen ausgeschüttet – sie begleiten dich durch Anspannung **und** Entladung.',
  },
  clarity_goal_goal: {
    area: 'Ziel & Klarheit',
    input:
      'Klarheit bedeutet, zu wissen, wohin du willst – und was in dir vorgeht. Sie entsteht durch innere Ordnung und bewusste Reflexion. Ein klares Ziel gibt dir Richtung, Orientierung und Antrieb. Es hilft deinem Gehirn, Energie gezielt zu bündeln und Fortschritt bewusst wahrzunehmen. So kannst du erkennen, ob sich der Weg lohnt – und ob du und dein Gehirn bereit sind, deine Motivation dafür einzusetzen.',
    tips: [
      {
        title: '1. Klarheit schaffen',
        text: 'Formuliere dein Ziel konkret und positiv – was genau willst du erreichen, und warum?',
      },
      {
        title: '2. Gedanken ordnen',
        text: 'Nutze Journaling, Brainstorming oder Mindmaps, um deine inneren Themen sichtbar zu machen.',
      },
      {
        title: '3. Fragen stellen',
        text: 'Frage dich: Was will ich wirklich? Was brauche ich gerade – emotional, mental, körperlich?',
      },
    ],
    reasons: [
      'Fehlende Selbstreflexion → Wer sich keine Zeit nimmt, innezuhalten und ehrlich hinzuspüren, verliert leicht die Verbindung zu sich selbst.',
      'Zu viele äußere Einflüsse & Reizüberflutung → Permanente Ablenkung, Social Media, Erwartungen von außen – das eigene innere Navigationssystem wird übertönt.',
      'Kein klares „Warum“ → Ohne emotionale Verbindung oder tiefen Sinn fehlt die Motivation und Richtung – das Ziel bleibt leer oder beliebig.',
    ],
  },
  feasibility_challenge: {
    area: 'Machbarkeit & Herausforderung',
    input:
      'Flow entsteht, wenn Herausforderung und Können im Gleichgewicht sind. Ist ein Ziel zu leicht, fehlt der Reiz – ist es zu schwer, blockiert es dich. Dein Gehirn braucht das Gefühl: „Das ist machbar.“ Nur dann entsteht echte Motivation und du kommst ins Handeln. Wenn du weisst was der nächste Schritt ist, dieser Sinnvoll und Machbarkeit ist kannst du gar nicht anders als lozulegen.',
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
      {
        title: '4. Raus aus der Komfortzone',
        text: 'Such dir eine Herausforderung, die dich gesund einschüchtert.',
      },
    ],
    reasons: [
      'Ziel oder Aufgabe wirkt zu groß oder unklar → Ohne klare Schritte wirkt das Vorhaben überwältigend – das Gehirn schaltet ab, bevor es beginnt.',
      'Fehlendes Vertrauen in die eigenen Fähigkeiten → Selbstzweifel („Ich schaff das eh nicht“) schwächen die innere Bereitschaft zur Umsetzung.',
      'Keine greifbare Unterstützung oder Struktur → Wenn Tools, Feedback oder Orientierung fehlen, fühlt sich der Weg unsicher und riskant an.',
    ],
  },
  meaning: {
    area: 'Sinn',
    input:
      'Sinn ist etwas sehr persönliches. Sinnerleben aktiviert tiefe emotionale Systeme im Gehirn. Wenn du weißt, wofür du etwas tust, entsteht innere Kraft und Ausdauer.',
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
      'Keine Verbindung zu den eigenen Werten → Wer nicht weiß, was ihm wirklich wichtig ist, empfindet das eigene Handeln schnell als leer.',
      'Fremdgesteuertes Leben → Man folgt äußeren Erwartungen (Familie, Gesellschaft, Karriere), statt der eigenen inneren Stimme.',
      'Fehlende Selbstkenntnis → Ohne Zugang zu sich selbst ist es schwer zu spüren, was wirklich erfüllt.',
    ],
  },
  emotional_space: {
    area: 'Emotionaler Raum',
    input:
      'Innerer Raum ist die Basis für emotionale Verarbeitung, Kreativität und Klarheit. Ohne Raum für Emotionen verlieren wir nicht nur Klarheit, sondern auch Lebendigkeit, Sinn und echte Verbindung – zu uns selbst und anderen. Ohne bewusste Pausen fehlt uns Tiefe und Verbindung zu uns selbst. Emotionen zeigen sich auf drei Ebenen: als Gefühl (subjektives Erleben), als Körperempfindung (z. B. Anspannung, Puls) und als Gedanke (bewertend, verstärkend oder abschwächend).',
    tips: [
      {
        title: '1. Inneren Raum schaffen',
        text: 'Gönn dir tägliche Pausen ohne Reize – kein Handy, keine Aufgaben. Nur du, dein Atem und dein inneres Erleben.',
      },
      {
        title: '2. Die Kraft der Natur nutzen',
        text: 'Verbringe Zeit draußen – Natur beruhigt dein Nervensystem und schafft Raum für innere Klarheit.',
      },
      {
        title: '3. Meditation',
        text: 'Erlaube dir, einfach mal nichts zu tun und zu meditieren. Im Leerlauf entstehen neue Gedanken, Kreativität – und echte Verbindung zu dir selbst.',
      },
    ],
    reasons: [
      'Dauerhafte Reizüberflutung → Ständiger Input (Social Media, To-dos, Lärm) blockiert die Verbindung zur Innenwelt.',
      'Vermeidung unangenehmer Gefühle → Viele Menschen lenken sich ab, um Schmerz, Angst oder Trauer nicht fühlen zu müssen.',
      'Leistung statt Präsenz → Wer ständig funktionieren muss, hat keinen Raum, innezuhalten und zu spüren, was wirklich da ist.',
    ],
  },
  structure_focus: {
    area: 'Struktur & Fokus',
    input:
      'Struktur gibt deinem Nervensystem Sicherheit und deinem Tag Halt. Sie hilft dir, besser mit Stress umzugehen und fokussierter zu arbeiten. Fokus entsteht, wenn dein Gehirn nicht ständig umschaltet. Mit bewusster Aufmerksamkeit kannst du tiefer arbeiten und mehr erreichen. Hier geht es aber auch vorallem darum bewusst und achtsam zu sein. Das heisst wie gestalte ich meine Zeit, welche Routinen lebe ich. Und warum? ',
    tips: [
      {
        title: '1. Feste Routinen etablieren',
        text: 'Lege Gewohnheiten fest, um deinem Tag eine klare Struktur zu geben.',
      },
      {
        title: '2. To-do-Listen mit Fokus',
        text: 'Begrenze deine Tagesziele auf max. 3 Dinge die wirklich erledigt werden müssen – weniger ist mehr.',
      },
      {
        title: '3. Nutze die Willenskraft am Morgen',
        text: 'Nutze die Willenskraft am Morgen für mehr Fokus und Umsetzung um wirklich Mehrwert zuschaffen.',
      },
      {
        title: '4. Ablenkungen reduzieren',
        text: 'Schalte unnötige Benachrichtigungen aus und arbeite in Fokusblöcken.',
      },
    ],
    reasons: [
      'Zu viele offene Baustellen → Ohne klare Prioritäten konkurrieren zu viele Aufgaben um Aufmerksamkeit – das Gehirn springt ständig hin und her.',
      'Keine klare Planung oder Tagesstruktur → Wer nur „nach Gefühl“ arbeitet, verliert sich leicht im Dringlichen statt im Wichtigen.',
      'Digitale Ablenkung & Reizüberflutung → Ständige Unterbrechungen (z. B. Handy, Benachrichtigungen) zerreißen die Konzentration..',
    ],
  },
};
