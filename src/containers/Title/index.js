import React from 'react';

import { ContentWrapper, BannerWrapper, FlexRow, LogoWrapper, ButtonWrapper, InfoSection } from 'containers/Title/styles';

import Button from 'components/Button';
import Description from 'components/Description';
import Input from 'components/Input';
import Logo from 'components/Logo';
import PageWrapper from 'components/PageWrapper';

import { mode } from 'containers/App/constants';

const Title = props => {
  const { updateAppAtom } = props;
  const updateJobNameValue = event => updateAppAtom({ jobName: event.target.value });
  const navigateToSummaryMode = () => updateAppAtom({ appMode: mode.SUMMARY });

  return (
    <PageWrapper>
      <ContentWrapper>
        <BannerWrapper>
          <FlexRow>
            <div>AREA</div>
            <LogoWrapper>
              <Logo width="48" height="48" />
            </LogoWrapper>
          </FlexRow>
          <div>QUOTE</div>
        </BannerWrapper>
        <Description>Track, edit, and share basic site measurements and costs...</Description>
        <Input inputId="jobName" label="Job name (optional):" autoFocus={true} handleChange={updateJobNameValue} />
        <ButtonWrapper>
          <Button onClick={navigateToSummaryMode}>CREATE</Button>
        </ButtonWrapper>
        <InfoSection>v0.1 &nbsp;&nbsp;&nbsp;&nbsp;&copy; 2019. Josh Bairstow</InfoSection>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Title;
