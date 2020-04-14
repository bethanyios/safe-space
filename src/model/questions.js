const firstQuestions = [
  {
    page: 0,
    question: 'What form of sexual harrassment did you experience?',
    type: 'checkbox',
    content: [
      'Sexual comments or jokes',
      'Unwelcome sexual advances',
      'Unwanted touching',
      'A form of sexual assault',
      'Displaying pictures, photos or drawings of sexual nature',
      'Receiving unwanted messages with sexual content',
      'Other (please specify)',
    ],
    section: 0,
    explainer: 'Please select all that apply.',
    other: true,
  },
  {
    page: 1,
    question: 'When did the incident take place?',
    type: 'date',
    section: 0,
  },
  {
    page: 1,
    question: 'Were there multiple incidents related to the same perpetrator?',
    type: 'radio',
    content: [
      'There was a single incident in this period',
      'There were a number of occurrences within this period',
    ],
    section: 0,
  },
  {
    page: 2,
    question: 'Did the incident take place in the UK?',
    type: 'radio',
    content: ['In the UK', 'Outside the UK'],
    section: 0,
  },
  {
    page: 2,
    question: 'What kind of location did the incident take place in?',
    type: 'checkbox',
    content: [
      'Online',
      'Music venue',
      'Function venue',
      'Music festival',
      'Studio',
      'Busking',
      'Orchestra pit',
      'Theatre',
      'On tour',
      'School, college or university',
      'Outside of work',
      'Other (please specify)',
    ],
    section: 0,
    explainer: 'Please select all that apply.',
    other: true,
  },
  {
    page: 2,
    question: 'Where exactly did the incident take place?',
    type: 'text',
    content: ['Write the location here'],
    section: 0,
    explainer:
      "Only fill this in if you'd like to specifically identify the location of the incident.",
  },
  {
    page: 3,
    question: 'Describe what happened in your own words.',
    type: 'textarea',
    content: ['Please describe your experience here'],
    section: 0,
    explainer: "You can share as much or as little as you'd like.",
  },
  {
    page: 4,
    question: 'Was the person who did this:',
    type: 'radio',
    content: ['Female ', 'Male ', 'Mixed group', 'Not sure'],
    section: 1,
  },
  {
    page: 5,
    question: 'What is their relationship to you?',
    type: 'checkbox',
    content: [
      'Manager or agent',
      'Employer, engager or fixer',
      'Senior figure',
      'Client',
      'Teacher',
      'Audience member',
      'Colleague',
      'Student',
      'Label or publisher',
      'Not sure',
      'Unknown / stranger',
      'Other (please specify)',
    ],
    section: 1,
    explainer: 'Please select all that apply.',
    other: true,
  },
  {
    page: 6,
    question:
      'Have you experienced sexual harassment from the same perpetrator before?',
    type: 'radio',
    content: ['Yes', 'No', 'Not sure'],
    section: 1,
  },
  {
    page: 6,
    question:
      'Do you know if anyone else has been harassed by this person before?',
    type: 'radio',
    content: ['Yes', 'No', 'Not sure'],
    section: 1,
  },
  {
    page: 7,
    question: 'Have you reported this incident elsewhere?',
    type: 'radio',
    content: ['Yes', 'No'],
    section: 2,
  },
  {
    page: 8,
    question: 'Who did you report this incident to?',
    type: 'checkbox',
    content: [
      'Manager or agent',
      'Employer, engager or fixer',
      'Client',
      'Colleague',
      'Police',
      'Support services (e.g. SARC, Rape Crisis etc.)',
      'School, college or university',
      "Musicians' Union (by another means)",
      'Other (please specify)',
    ],
    section: 2,
    explainer: 'Please select all that apply.',
    other: true,
    split: 12,
    condition: ['Yes'],
  },
  {
    page: 8,
    question: 'Was any action taken?',
    type: 'radio',
    content: ['Yes', 'No', "Don't know"],
    section: 2,
    split: 12,
    condition: ['Yes'],
  },
  {
    page: 8,
    question: 'How satisfied are you with the way your report(s) was handled?',
    type: 'radio',
    content: ['Very', 'Somewhat', 'Not at all'],
    section: 2,
    split: 12,
    condition: ['Yes'],
  },
  {
    page: 8,
    question: 'What discouraged you from reporting?',
    type: 'checkbox',
    content: [
      'I thought I might not be believed or taken seriously',
      'I was scared of losing work',
      'The workplace culture',
      'I thought the issue would not be properly handled',
      'I was scared of the person who did this',
      'There were no witnesses',
      "I didn't know who I could report to",
      'Other (please specify)',
    ],
    section: 2,
    explainer: 'Please select all that apply.',
    other: true,
    split: 12,
    condition: ['No'],
  },
  {
    page: 9,
    question: 'What was your employment status at the time of the incident?',
    type: 'checkbox',
    content: [
      'Employed',
      'Self-employed',
      'Not working at the time',
      'Other (please specify)',
    ],
    section: 3,
    explainer: 'Please select all that apply.',
    other: true,
  },
  {
    page: 10,
    question: 'What work have you been performing at the time of the incident?',
    type: 'checkbox',
    content: [
      'Musician',
      'Featured Artist',
      'Orchestral player',
      'Composer, songwriter or lyricist',
      'Music producer',
      'Music engineer',
      'Record label',
      'Music teacher',
      'Student',
      'Session player',
      'Other (please specify)',
    ],
    section: 3,
    explainer:
      'Please select all that apply. This will help us identify how sexism, harrassment and abuse manifest in different spaces.',
    other: true,
  },
  {
    page: 11,
    question: 'What age were you at the time of the incident?',
    type: 'radio',
    content: ['16-18', '18-24', '25-34', '35-44', '45-54', '55-64', 'Over 65'],
    section: 3,
  },
  {
    page: 12,
    question: 'What is your gender?',
    type: 'radio',
    content: ['Female ', 'Male ', 'Non-binary', 'Other (please specify)'],
    section: 3,
    other: true,
  },
  {
    page: 12,
    question: 'Is your gender identity the same as that assigned at birth?',
    type: 'radio',
    content: ['Yes', 'No'],
    section: 3,
  },
  {
    page: 13,
    question: 'What option best describes your ethinicity?',
    type: 'radio',
    content: [
      'White - British, English, Northern Irish, Scottish, Welsh',
      'White - Irish',
      'White - Gypsy, Roma or Irish Traveller',
      'White - European',
      'White - Any other White background',
      'Mixed / Dual heritage - White & Black Caribbean',
      'Mixed / Dual heritage - White & Black African',
      'Mixed / Dual heritage - White & Asian',
      'Mixed / Dual heritage - Any other Mixed / Dual heritage background',
      'Asian / Asian British - Indian',
      'Asian / Asian British - Pakistani',
      'Asian / Asian British - Bangladeshi',
      'Asian / Asian British - Chinese',
      'Asian / Asian British - Other Asian background',
      'Black / African - African',
      'Black - British',
      'Black / Caribbean - Caribbean',
      'Black - Any other African / Caribbean background',
      'Arab',
      'Other (please specify)',
    ],
    section: 3,
    other: true,
  },
  {
    page: 14,
    question: 'Do you identify as a deaf or disabled person?',
    type: 'radio',
    content: ['Yes', 'No'],
    section: 3,
  },
  {
    page: 15,
    question: 'Which of the following best describes your sexuality?',
    type: 'radio',
    content: [
      'Asexual',
      'Bi / Bisexual',
      'Gay man',
      'Gay woman / lesbian',
      'Heterosexual / straight',
      'Queer',
      'Other (please specify)',
    ],
    section: 3,
    other: true,
  },
];

const witnessQuestions = [
  {
    page: 0,
    question: 'What form of sexual harrassment did you witness?',
    type: 'checkbox',
    content: [
      'Sexual comments or jokes',
      'Unwelcome sexual advances',
      'Unwanted touching',
      'A form of sexual assault',
      'Displaying pictures, photos or drawings of sexual nature',
      'Receiving unwanted messages with sexual content',
      'Other (please specify)',
    ],
    section: 0,
    explainer: 'Please select all that apply.',
    other: true,
  },
  {
    page: 1,
    question: 'When did the incident take place?',
    type: 'date',
    section: 0,
  },
  {
    page: 1,
    question: 'Were there multiple incidents related to the same perpetrator?',
    type: 'radio',
    content: [
      'There was a single incident in this period',
      'There were a number of occurrences within this period',
    ],
    section: 0,
  },
  {
    page: 2,
    question: 'Did the incident take place in the UK?',
    type: 'radio',
    content: ['In the UK', 'Outside the UK'],
    section: 0,
  },
  {
    page: 2,
    question: 'What kind of location did the incident take place in?',
    type: 'checkbox',
    content: [
      'Online',
      'Music venue',
      'Function venue',
      'Music festival',
      'Studio',
      'Busking',
      'Orchestra pit',
      'Theatre',
      'On tour',
      'School, college or university',
      'Outside of work',
      'Other (please specify)',
    ],
    section: 0,
    explainer: 'Please select all that apply.',
    other: true,
  },
  {
    page: 2,
    question: 'Where exactly did the incident take place?',
    type: 'text',
    content: ['Write the location here'],
    section: 0,
    explainer:
      "Only fill this in if you'd like to specifically identify the location of the incident.",
  },
  {
    page: 3,
    question: 'Describe what happened in your own words.',
    type: 'textarea',
    content: ['Please describe your experience here'],
    section: 0,
    explainer: "You can share as much or as little as you'd like.",
  },
  {
    page: 4,
    question: 'Was the person who did this a:',
    type: 'radio',
    content: ['Female ', 'Male ', 'Mixed group', 'Not sure'],
    section: 1,
  },
  {
    page: 5,
    question: 'Do you know what is their relationship to survivor?',
    type: 'checkbox',
    content: [
      'Manager or agent',
      'Employer, engager or fixer',
      'Senior figure',
      'Client',
      'Teacher',
      'Audience member',
      'Colleague',
      'Student',
      'Label or publisher',
      'Not sure',
      'Unknown / stranger',
      'Other (please specify)',
    ],
    section: 1,
    explainer: 'Please select all that apply.',
    other: true,
  },
  {
    page: 6,
    question:
      'Have you witnessed sexual harassment from the same perpetrator before?',
    type: 'radio',
    content: ['Yes', 'No', 'Not sure'],
    section: 1,
  },
  {
    page: 6,
    question: 'Do you know if anyone else has been harassed by this person?',
    type: 'radio',
    content: ['Yes', 'No', 'Not sure'],
    section: 1,
  },
  {
    page: 7,
    question: 'Have you reported this incident elsewhere?',
    type: 'radio',
    content: ['Yes', 'No'],
    section: 2,
  },
  {
    page: 8,
    question: 'Who did you report this incident to?',
    type: 'checkbox',
    content: [
      'Manager or agent',
      'Employer, engager or fixer',
      'Client',
      'Colleague',
      'Police',
      'Support services (e.g. SARC, Rape Crisis etc.)',
      'School, college or university',
      "Musicians' Union (by another means)",
      'Other (please specify)',
    ],
    section: 2,
    explainer: 'Please select all that apply.',
    other: true,
    split: 12,
    condition: ['Yes'],
  },
  {
    page: 8,
    question: 'Was any action taken?',
    type: 'radio',
    content: ['Yes', 'No', "Don't know"],
    section: 2,
    split: 12,
    condition: ['Yes'],
  },
  {
    page: 8,
    question: 'How satisfied are you with the way your report(s) was handled?',
    type: 'radio',
    content: ['Very', 'Somewhat', 'Not at all'],
    section: 2,
    split: 12,
    condition: ['Yes'],
  },
  {
    page: 8,
    question: 'What discouraged you from reporting?',
    type: 'checkbox',
    content: [
      'I thought I might not be believed or taken seriously',
      'I was scared of losing work',
      'The workplace culture',
      'I thought the issue would not be properly handled',
      'I was scared of the person who did this',
      'There were no witnesses',
      "I didn't know who I could report to",
      'Other (please specify)',
    ],
    section: 2,
    explainer: 'Please select all that apply.',
    other: true,
    split: 12,
    condition: ['No'],
  },
];

export { firstQuestions, witnessQuestions };
