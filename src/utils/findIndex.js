// fn: return the index of a particular question in the questions array

const findIndex = (questions, field) => {
  let index = -1;
  questions.forEach((question, i) => {
    if (question.question === field) index = i;
  });
  return index;
};

export default findIndex;
