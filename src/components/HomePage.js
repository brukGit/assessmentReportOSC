import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 2rem;
`;

const IframeContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 45%; 
  margin-bottom: 2rem;
  width: 80%; // 80% of the parent container's width
  margin-left: auto;
  margin-right: auto;
`;

const ResponsiveIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;

const HomePage = () => {
  return (
    <HomeContainer>
      <h1>External Debt and Education Expenditure</h1>
      <p>To select two or more countries from <i><b>country slicers</b></i>, hold <i><b>CTRL key down </b></i>while selecting.</p>
      <IframeContainer>
        <ResponsiveIframe
          title="externalDebtEducationExpenditure"
          width="600"
          height="373.5"
          src="https://app.powerbi.com/view?r=eyJrIjoiNTViY2U2Y2EtMTAwYi00MmYyLTllNGMtNWU5YjEwMjZjZjJhIiwidCI6ImFiYTRhZjg0LTI3ZmQtNDBkMS1iYmMzLThkYWQ2MGVjZWFiNyJ9&pageName=ReportSection3b5768b901005bb811c8"
          frameBorder="0"
          allowFullScreen
        />
      </IframeContainer>
    </HomeContainer>
  );
};

export default HomePage;
