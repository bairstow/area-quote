import React from 'react';

import PageWrapper from 'components/Title/PageWrapper';
import ContentWrapper from 'components/Title/ContentWrapper';
import Banner from 'components/Title/Banner';
import Description from 'components/Title/Description';
import Input from 'components/App/Input';
import Button from 'components/App/Button';

const Title = props => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <Banner>
          <div>AREA</div>
          <div>QUOTE</div>
        </Banner>
        <Description>Track, edit, and share basic site measurements and costs...</Description>
        <Input />
        <Button onClick={() => console.log('button things')}>NEW</Button>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Title;
