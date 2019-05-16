import React from 'react';

import PageWrapper from 'components/App/PageWrapper';
import ContentWrapper from 'components/Title/ContentWrapper';
import Banner from 'components/Title/Banner';
import Description from 'components/App/Description';
import Input from 'components/App/Input';
import ButtonWrapper from 'components/Title/ButtonWrapper';
import Button from 'components/App/Button';

import { mode } from 'containers/App/constants';

const Title = props => {
  const updateJobNameValue = event => props.updateJobName(event.target.value);
  const navigateToSummaryMode = () => props.updateAppMode(mode.SUMMARY);

  return (
    <PageWrapper>
      <ContentWrapper>
        <Banner />
        <Description>Track, edit, and share basic site measurements and costs...</Description>
        <Input inputId="jobName" label="Job name (optional):" autoFocus={true} handleChange={updateJobNameValue} />
        <ButtonWrapper>
          <Button onClick={navigateToSummaryMode}>CREATE</Button>
        </ButtonWrapper>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Title;
