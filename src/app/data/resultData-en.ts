import { ResultData } from '../self-check-logic/self-check-logic.component';

export type SelfcheckTopics =
  | 'emotional_space'
  | 'structure_focus'
  | 'feasibility_challenge'
  | 'clarity_goal'
  | 'meaning'
  | 'oxytocin'
  | 'dopamine'
  | 'serotonin'
  | 'endorphins';

export const RESULTDATA_EN: ResultData = {
  dopamine: {
    area: 'Dopamine',
    tips: [
      {
        title: '1. Master challenges – focus time – deep work',
        text: 'Set intentional times without social media, phone, or overstimulation (e.g., 1–2 hours of full focus in the morning). → This regulates and stabilizes the dopamine system for the rest of the day.',
      },
      {
        title: '2. Complete small tasks',
        text: "The dopamine system loves achieving goals. Even things like tidying up, doing laundry, checking off to-dos, or making your bed send your brain a clear dopamine signal: 'I'm making progress.'",
      },
      {
        title: '3. Design rewards consciously',
        text: 'Reward yourself for things that were truly challenging and meaningful – whether in relationships, work, health, or personal growth.',
      },
      {
        title: '4. Rest',
        text: "Even if your dopamine system isn’t thrown off balance by unhealthy habits, it still needs rest. Allow yourself breaks where you're not goal-oriented or focused.",
      },
    ],
    reasons: [
      'Chronic overstimulation through social media, sugar, or constant noise overwhelms the dopamine system.',
      'Lack of movement & poor sleep disturb natural dopamine regulation.',
      'Unprocessed emotions often lead to unhealthy distractions.',
    ],
    input:
      'Dopamine is the neurotransmitter that drives and motivates you. It helps you take on challenges, explore new things, and stay focused on goals. For our hunter-gatherer ancestors, dopamine was essential – giving them the push to seek food and handle survival tasks despite danger. Without dopamine, drive fades. You procrastinate, lose focus, and get easily distracted. A stable dopamine system helps you stay on track, prioritize, and follow through on what matters. But if it’s constantly flooded with quick rewards (e.g., social media, junk food), it loses its ability to create true motivation. Natural drive, clarity, and focus diminish.',
  },
  oxytocin: {
    area: 'Oxytocin',
    tips: [
      {
        title: '1. Seek genuine closeness',
        text: 'Consciously hug people, hold hands, make eye contact – cultivate authentic connection.',
      },
      {
        title: '2. Have deep conversations',
        text: 'Talk with trusted people about what truly moves you – it strengthens your bond.',
      },
      {
        title: '3. Be there for others',
        text: 'Show genuine compassion or help someone – this also activates oxytocin in yourself.',
      },
      {
        title: '4. Create space for yourself',
        text: 'Be kind to yourself. Show compassion and understanding for your inner experience. Maintain a friendly and supportive inner dialogue.',
      },
    ],
    reasons: [
      'Lack of genuine connection in daily life – often only surface-level communication without emotional depth.',
      'Social comparison on social media reduces feelings of connection and increases isolation.',
      'Missing practice of self-connection.',
    ],
    input:
      'Oxytocin is released during emotional closeness, human contact, and real moments of connection – whether with others or yourself. Cuddling, hugging, and deep conversations noticeably increase oxytocin levels. It fosters trust, self-confidence, safety, and emotional security. Our tendency to connect isn’t accidental – evolution wired us that way, because connection ensures survival: we help each other, care for each other, build families, and function as communities. This connection includes...',
  },
  serotonin: {
    area: 'Serotonin',
    tips: [
      {
        title: '1. Get sunlight',
        text: 'Daily light exposure (especially in the morning) helps your brain produce serotonin – for more inner stability and calm.',
      },
      {
        title: '2. Light movement in nature',
        text: '→ Movement + sunlight = serotonin boost.',
      },
      {
        title: '3. Practice mindfulness',
        text: 'Regular stillness through meditation or mindful breaks reduces stress, stabilizes your mood, and promotes serotonin production in the brain.',
      },
    ],
    reasons: [
      'Poor gut health – 90% of serotonin is produced in the gut.',
      'Chronic stress increases cortisol – which blocks serotonin production.',
      'Lack of positive, social, or nature-connected experiences.',
    ],
    input:
      "Serotonin – the messenger of balance and well-being. It’s best understood as the neurotransmitter that helps you care for your body. Today, we often speak of 'mental health' as if it existed only in the mind – but that’s too narrow. A calm, stable, and vital body is the foundation for mental strength, emotional stability, and real joy. Serotonin supports better sleep, energy, well-being, and inner peace...",
  },
  endorphins: {
    area: 'Endorphins',
    tips: [
      {
        title: '1. Move your body intensely',
        text: 'Do exercise that really pushes you – like HIIT. When you reach your physical limits, your body releases endorphins.',
      },
      {
        title: '2. Laugh from the heart',
        text: 'Spend time with people who uplift you. Shared laughter, dancing, or playing creates emotional and social intensity.',
      },
      {
        title: '3. Stimulus & challenge',
        text: 'Cold, ice baths, or switching from sauna to cold showers – these challenges are natural mood boosters and stress relievers!',
      },
    ],
    reasons: [
      'Lack of emotional or physical stimulation or challenge.',
      'Chronic stress and overload.',
      'Lack of intense physical activity.',
      'Lack of emotional and social intensity – such as joy, laughter, play, creativity, and closeness.',
    ],
    input:
      "Endorphins are like an inner friend that both energizes and soothes you. In stressful or tough moments, they say: 'You’ve got this.' – easing pain and helping you keep going. In times of laughter or release, they say: 'It’s okay. Be happy.' – bringing relief and inner joy...",
  },
  emotional_space: {
    area: 'Emotional Space',
    input:
      'Inner space is the foundation for emotional processing, creativity, and clarity. Without it, we lose inner orientation and aliveness – and overlook the subtle signals of our intelligent system. If we don’t act from our inner truth, we live disconnected from ourselves. Emotions appear on three levels: as feeling (subjective experience), as bodily sensation (e.g., tension, heartbeat), and as thought (evaluating, amplifying, or weakening). Only when we consciously allow space for these levels can true connection to ourselves and life emerge.',
    tips: [
      {
        title: '1. Create inner space',
        text: 'Take daily breaks without stimuli – no phone, no tasks. Just you, your breath, and your inner experience.',
      },
      {
        title: '2. Use the power of nature',
        text: 'Spend time outdoors – nature calms your nervous system and clears your mind.',
      },
      {
        title: '3. Meditation',
        text: 'Allow yourself to do nothing and meditate. The stormy sea becomes a calm mountain lake.',
      },
    ],
    reasons: [
      'Constant overstimulation → Ongoing input (social media, tasks, noise) blocks access to the inner world.',
      'Avoiding unpleasant feelings → Many distract themselves to avoid pain, fear, or sadness.',
      'Productivity over presence → Those who always have to function lack space to pause and feel what’s truly present.',
    ],
  },
  structure_focus: {
    area: 'Structure & Focus',
    input:
      "Structure gives your nervous system a sense of safety, order, and clarity. It builds the foundation for true focus – your brain functions best when it's not constantly switching between tasks. Fixed routines and clear workflows reduce the strain on your willpower and help you channel energy into what truly matters. This leads to real progress – which boosts self-worth, creates joy, and lowers stress. When you feel progress, you feel stronger, calmer, and more capable.",
    tips: [
      {
        title: '1. Build routines',
        text: 'Establish habits that match your ideal life – they move you forward step by step and ease your willpower.',
      },
      {
        title: '2. Less, but meaningful',
        text: 'Limit your daily goals to 3 essential tasks. Clear focus beats endless to-do lists.',
      },
      {
        title: '3. Full presence – in everything',
        text: 'Whether working, talking, or resting: give your full attention. 100% presence changes everything.',
      },
      {
        title: '4. Eliminate distractions',
        text: 'Turn off notifications, work in focused blocks – that’s how you enter flow instead of being scattered.',
      },
    ],
    reasons: [
      'Too many open tasks → Without priorities, too many tasks compete for attention – your brain jumps constantly.',
      "No clear plan or daily structure → Working only 'by feeling' often leads to reacting, not creating.",
      'Digital distraction & overstimulation → Constant interruptions (e.g., phone, notifications) shatter concentration.',
    ],
  },
  feasibility_challenge: {
    area: 'Feasibility & Challenge',
    input:
      "Flow arises when challenge and skill are in balance. If a goal is too easy, it's boring. If it’s too hard, it becomes overwhelming. Your brain needs to feel: 'This is doable – and it stretches me.' When you know the next step – and it feels both meaningful and achievable – starting becomes effortless.",
    tips: [
      {
        title: '1. Plan realistic steps',
        text: 'Break down big goals into small, manageable steps.',
      },
      {
        title: '2. Assess your resources',
        text: 'Reflect on what you need to move forward – time, knowledge, support → Try a SWOT analysis.',
      },
      {
        title: '3. Reduce pressure',
        text: 'Allow yourself to make mistakes – steady, small steps matter more than big leaps.',
      },
      {
        title: '4. Step outside your comfort zone',
        text: 'Seek out challenges that push you just enough to grow.',
      },
    ],
    reasons: [
      'Goal or task feels too big or vague → Without clear steps, the brain feels overwhelmed and shuts down.',
      'Missing skills → Lacking key abilities creates frustration and blocks progress.',
      'No tangible support → Without tools, feedback, or direction, the path feels risky and uncertain.',
    ],
  },
  clarity_goal: {
    area: 'Clarity & Goals',
    input:
      "Clarity means knowing where you stand, where you're going – and what’s happening inside you. It comes from inner order, self-connection, and conscious reflection of feelings, thoughts, sensations, and intuition. A clear and meaningful goal gives you direction, focus, and drive. It helps your brain channel energy, track progress, and stay motivated.",
    tips: [
      {
        title: '1. Create clarity',
        text: 'Define your goal clearly – what exactly do you want, and why?',
      },
      {
        title: '2. Organize your thoughts',
        text: 'Use journaling, brainstorming, coaching, or mind maps to explore your inner world.',
      },
      {
        title: '3. Ask powerful questions',
        text: 'The quality of your life is shaped by the quality of your questions.',
      },
      {
        title: '4. Create space and stillness',
        text: 'Make room for your emotions, thoughts, sensations & intuition – nurture your inner connection.',
      },
    ],
    reasons: [
      'Lack of self-reflection → Without pausing to feel and reflect, we lose connection to ourselves.',
      'Too many external influences → Constant input and expectations drown out your inner voice.',
      "No clear 'why' → Without emotional connection or deep meaning, motivation fades and goals feel empty.",
    ],
  },
  meaning: {
    area: 'Meaning',
    input:
      "Meaning is deeply personal. It's worth revisiting the question of meaning regularly – across all areas of life. Experiencing meaning activates emotional systems in the brain. When you feel a sense of purpose, intrinsic motivation, perseverance, and joy arise – even in challenging times.",
    tips: [
      {
        title: '1. Connect your actions with purpose',
        text: 'Ask yourself: Why is this important to me? What’s the deeper reason?',
      },
      {
        title: '2. Reflect on your values',
        text: 'Define your values and live by them.',
      },
      {
        title: '3. Help others',
        text: 'When your actions benefit others, your sense of meaning and fulfillment increases.',
      },
    ],
    reasons: [
      'No connection to values → Without knowing what truly matters, actions can feel empty.',
      'Living by external expectations → Following others’ paths instead of your own inner voice.',
      'Lack of self-awareness → Without access to your inner world, it’s hard to feel what gives your life meaning.',
    ],
  },
};
