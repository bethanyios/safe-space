// these are the hard questions that we will dynamically get from airtable
// This is only a temp file

export default [
  {
    explainer: 'Please select all that apply.',
    page: 0,
    section: 'What When Where',
    questionNumber: 0,
    question: 'What form of sexual harrassment did you experience?',
    type: 'checkbox',
    content: [
      'Sexual comments or jokes',
      'Unwanted sexual advances',
      'Unwanted touching',
      'Another form of sexual assault',
      'Displaying pictures, photos, drawings of a sexual nature',
      'Sending messages with sexual content',
    ],
    other: 'false',
  },
  {
    page: 1,
    section: 'What When Where',
    questionNumber: 0,
    question: 'When did the incident take place?',
    type: 'date',
    other: 'false',
  },
  {
    page: 1,
    section: 'What When Where',
    content: [
      'There was a single incident in this period',
      'There were a number of occurrences within this period',
    ],
    questionNumber: 1,
    question: 'Were there multiple incidents related to the same perpetrator?',
    type: 'radio',
    other: 'false',
  },
  {
    page: 2,
    section: 'What When Where',
    content: ['United Kingdom', 'Outside of the UK'],
    questionNumber: 0,
    question: 'Did the incident take place in the UK?',
    type: 'radio',
    other: 'false',
  },
  {
    page: 2,
    section: 'What When Where',
    content: [
      'Online',
      'Music venue',
      'Function venue',
      'Music festival',
      'Studio',
      'Busking',
      'Orchestra pit',
      'Theatre pit',
      'On tour',
      'School, college or university',
      'Outside of work',
    ],
    questionNumber: 1,
    question: 'What kind of location did the incident take place in?',
    type: 'checkbox',
    other: 'true',
  },
  {
    explainer:
      'Only fill this in if you\'d like to specifically identify the location of the incident.',
    page: 2,
    section: 'What When Where',
    questionNumber: 2,
    question: 'What is the name and/or address of the location?',
    type: 'text',
    other: 'false',
  },
  {
    section: 'Perpetrator',
    question: 'The harrasser or perpetrator was...',
    type: 'radio',
    content: ['non-binary', 'a man', 'a woman', 'a group'],
    page: 3,
    questionNumber: 0,
    other: 'false',
  },
  {
    section: 'Perpetrator',
    question: 'What is their relationship to you?',
    type: 'checkbox',
    content: [
      'Manager',
      'Client',
      'Teacher',
      'Audience member',
      'Colleague',
      'Student',
      'Engager',
      'Employer',
      'Unknown',
    ],
    other: 'true',
    page: 4,
    questionNumber: 0,
  },
  {
    section: 'Perpetrator',
    question:
      'Have you experienced sexual harrassment by the same perpetrator before?',
    type: 'radio',
    content: ['Yes', 'No', 'I don\'t know'],
    page: 5,
    questionNumber: 0,
    other: 'false',
  },
  {
    section: 'Perpetrator',
    question: 'In your own words please describe what happened.',
    type: 'text',
    content: ['Type your experience here'],
    page: 6,
    questionNumber: 0,
    other: 'false',
  },
  {
    section: 'Reporting',
    content: ['Yes', 'No'],
    question: 'Have you reported this incident elsewhere?',
    type: 'radio',
    page: 7,
    questionNumber: 0,
    other: 'false',
  },
  {
    section: 'Reporting',
    question: 'Who did you report this incident to?',
    type: 'checkbox',
    content: [
      'Employer',
      'Engager',
      'Colleague',
      'Police',
      'Support Services (e.g. SARC, Rape Crisis etc.)',
      'Other (please specify)',
    ],
    other: 'true',
    page: 8,
    questionNumber: 0,
  },
  {
    section: 'Reporting',
    question: 'Was any action taken?',
    type: 'radio',
    page: 8,
    questionNumber: 1,
    content: ['Yes', 'No', 'I don\'t know'],
    other: 'false',
  },
  {
    section: 'Reporting',
    question: 'Did anything discourage you from reporting?',
    type: 'checkbox',
    page: 9,
    questionNumber: 0,
    explainer: 'Please select all that apply.',
    content: [
      'I thought it might not be taken seriously',
      'I was scared of losing work',
      'The workplace culture',
      'I thought the issue would not be properly handled',
      'I was scared of the person who did this',
      'There were no other witnesses',
      'Other (please specify)',
    ],
    other: 'true',
  },
  {
    section: 'Victim',
    question: 'What was your employment status at the time of the incident?',
    type: 'checkbox',
    page: 10,
    questionNumber: 0,
    explainer: 'Please select all that apply.',
    content: [
      'Employed',
      'Self-employed',
      'Not working at the time',
      'Other (please specify)',
    ],
    other: 'true',
  },
  {
    section: 'Victim',
    question: 'What work were performing at the time of the incident?',
    type: 'checkbox',
    page: 11,
    questionNumber: 0,
    explainer:
      'This will help us identify how sexism, harrassment and abuse manifests in different spaces.',
    content: [
      'Musician',
      'Featured Artist',
      'Orchestral player',
      'Composer, songwriter or lyricist',
      'Music producer',
      'Music engineer',
      'Record Label',
      'Music Teacher',
      'Student',
    ],
    other: 'false',
  },
  {
    section: 'Victim',
    question: 'What age were you at the time of the incident',
    type: 'radio',
    content: [
      'Under 18',
      '18-24',
      '25-34',
      '35-44',
      '45-54',
      '55-64',
      'Over 65',
    ],
    page: 12,
    questionNumber: 0,
    other: 'false',
  },
  {
    section: 'Victim',
    question: 'What is your gender?',
    type: 'radio',
    content: ['female', 'male', 'non-binary', 'Prefer to self-describe'],
    page: 13,
    questionNumber: 0,
    other: 'false',
  },
];
