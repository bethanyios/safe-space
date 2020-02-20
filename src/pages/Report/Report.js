import React, { useReducer, useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';

// import subcomponents and reusables
import Form from './Form/Form';
import Divider from './Divider/Divider';
import Review from './Review/Review';
import Submit from './Submit/Submit';
import { Loading } from '../../components';

// and packages and utils
import uuid from 'uuid/v4';
import { getQuestions, getDividers } from '../../utils/index';

// fallback data
import hardQuestions from '../../model/questions';
import hardDividers from '../../model/dividers';

const Report = () => {
  // set up states
  const [questions, setQuestions] = useState(null);
  const [user, setUser] = useState(null);
  const [dividers, setDividers] = useState(null);

  useEffect(() => {
    getQuestions()
      .then(records => {
        setQuestions(records);
      })
      .catch(err => {
        setQuestions(hardQuestions);
        console.log(
          'Failed to fetch question data - falling back to hard coding. Error: ',
          err
        );
      });

    getDividers()
      .then(dividers => {
        setDividers(dividers);
      })
      .catch(err => {
        setDividers(hardDividers);
        console.log(
          'Failed to fetch divider data - falling back to hard coding. Error: ',
          err
        );
      });

    setUser({
      ref: uuid(), // may be non-unique (but almost impossibly unlikely)
      email: '',
    });
  }, []);

  const reducer = (state, { field, value, type }) => {
    if (type === 'checkbox') {
      // if there is already a value spread ... and then add the new value,
      // if you don't do this the value is just replaced even for checkboxes
      const newField = state[field] ? [...state[field], value] : [value];
      return {
        ...state,
        [field]: newField,
      };
    } else {
      return {
        ...state,
        [field]: value,
      };
    }
  };

  // set up responses state with reducer
  let initialState = {};
  const [responses, dispatch] = useReducer(reducer, initialState);

  const onChange = event => {
    dispatch({
      type: event.target.type, //send the input type, i.e. checkbox/radio
      field: event.target.name, //the name of the field (questionName)
      value: event.target.value, // the response value
    });
  };

  // grab React Router states to determine which components to render at Report level
  const params = useParams();
  const location = useLocation();

  // if any API calls have yet to resolve, render Loading component
  if (!(questions && user && dividers)) {
    return <Loading />;
  }
  // if the user is at a section interval the params should indicate this
  // we will therefore render a section, else we will render the questions
  if (location.pathname.includes('section')) {
    return <Divider questions={questions} dividers={dividers} />;
  } else if (location.pathname.includes('review')) {
    return <Review questions={questions} responses={responses} />;
  } else if (location.pathname.includes('submit')) {
    return <Submit responses={responses} user={user} setUser={setUser} />;
  } else {
    const page = parseInt(params.index);
    // find indices (in questions array) of first and last questions to appear on this page
    let firstIndex = Infinity;
    let lastIndex = 0;
    questions.forEach((question, i) => {
      if (question.page === page) {
        if (i < firstIndex) firstIndex = i;
        if (i > lastIndex) lastIndex = i;
      }
    });

    return (
      <>
        <Form
          page={page}
          questions={questions}
          user={user}
          setUser={setUser}
          funcOnChange={onChange}
        ></Form>
      </>
    );
  }
};
export default Report;