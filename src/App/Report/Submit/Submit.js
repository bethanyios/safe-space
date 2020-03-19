import React from 'react';
import { postResponses, stringify } from '../../../utils';
import { TextField } from '@rmwc/textfield';
import { useHistory } from 'react-router-dom';
import { Typography } from '@rmwc/typography';
import { Header, ButtonPrimary } from '../../index';
import styled from 'styled-components';
import '@material/textfield/dist/mdc.textfield.css';
import '@material/typography/dist/mdc.typography.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 3rem;
  margin: 2rem;
  padding-top: 2.5rem;
`;

const Type5 = styled(Typography)`
  && {
    text-align: center;
    padding-bottom: 0.8em;
    margin-block-start: 0em;
    margin-block-end: 0em;
    color: #2d3c8a;
    z-index: 50;
  }
`;
const TypeB1 = styled(Typography)`
  && {
    text-align: center;
    color: #5763a2;
    padding-bottom: 0.8em;
  }
`;

const Submit = ({ responses, user, updateResponses }) => {
  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();
    const responsesWithUser = {
      ...responses,
      userRef: user,
    };
    postResponses('first-responses', stringify(responsesWithUser)).then(
      history.push('/report/confirm')
    );
  };

  return (
    <>
      <Header />
      <Container>
        <Type5 use='headline5' tag='h5'>
          Thank you for reporting
        </Type5>
        <TypeB1 use='subtitle1'>
          Please confirm that you give permission to the MU to use this report
          to bring about change in the music industry.
        </TypeB1>

        <TypeB1 use='subtitle1'>
          This is entirely optional, but if you wish to be contacted by the MU
          in regard to this report, please provide your email below:
        </TypeB1>

        <TextField
          use='body1'
          fullwidth
          label='email'
          pattern='^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$'
          onChange={updateResponses}
          name='userEmail'
        ></TextField>
        <ButtonPrimary onClick={handleSubmit} raised>
          Submit
        </ButtonPrimary>
      </Container>
    </>
  );
};

export default Submit;

// show unique user reference and tell user to keep it somewhere safe
// give form field for user to input email if they want to
// make button to enable pdf download
// make final submit button that posts user and responses to Airtable
