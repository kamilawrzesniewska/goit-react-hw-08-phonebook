import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: grey;
`;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 75%;
  max-width: 364px;
  padding: 24px;
  background: white;
  border-radius: 8px;
`;
const Header = styled.h1`
  margin: 0;
  font-size: 22px;
  line-height: 24px;
`;

const NotFound = () => {
  return (
    <>
      <Main>
        <Card>
          <Header>Page Not Found</Header>
          <div>
            <p>
              Link not found.
            </p>
            <Link to="/">Back to our site</Link>
          </div>
        </Card>
      </Main>
    </>
  );
};

export default NotFound;
