import React from 'react';

import PageWrapper from 'components/Title/PageWrapper';
import ContentWrapper from 'components/Title/ContentWrapper';
import Banner from 'components/Title/Banner';
import Description from 'components/Title/Description';
import Input from 'components/App/Input';
import ButtonWrapper from 'components/Title/ButtonWrapper';
import Button from 'components/App/Button';

const Title = props => {
  const updateJobNameValue = event => props.setJobName(event.target.value);

  return (
    <PageWrapper>
      <ContentWrapper>
        <Banner>
          <div>AREA</div>
          <div>QUOTE</div>
        </Banner>
        <Description>Track, edit, and share basic site measurements and costs...</Description>
        <Input 
          inputId="jobName"
          label="Job name (optional):"
          autoFocus={true}
          handleChange={updateJobNameValue}
        />
        <ButtonWrapper>
          <Button onClick={() => console.log('button things')}>CREATE</Button>
        </ButtonWrapper>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Title;
