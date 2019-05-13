import React from 'react';

import PageWrapper from 'components/Title/PageWrapper';
import ContentWrapper from 'components/Title/ContentWrapper';
import Banner from 'components/Title/Banner';
import Description from 'components/Title/Description';
import Input from 'components/App/Input';
import ButtonWrapper from 'components/Title/ButtonWrapper';
import Button from 'components/App/Button';

import { mode } from 'constants/App';

const Title = props => {
  const updateJobNameValue = event => props.setJobName(event.target.value);
  const navigateToSummaryMode = () => props.setAppMode(mode.SUMMARY);
  const isTitleMode = props.appMode === mode.TITLE;
  const pageClassNames = isTitleMode ? 'visible' : 'hidden';

  return (
    <PageWrapper className={pageClassNames}>
      <ContentWrapper>
        <Banner />
        <Description>Track, edit, and share basic site measurements and costs...</Description>
        <Input 
          inputId="jobName"
          label="Job name (optional):"
          autoFocus={true}
          handleChange={updateJobNameValue}
        />
        <ButtonWrapper>
          <Button onClick={navigateToSummaryMode}>CREATE</Button>
        </ButtonWrapper>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Title;
