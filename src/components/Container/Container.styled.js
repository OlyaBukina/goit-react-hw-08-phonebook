import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;

  @media screen and (min-width: 320px) {
    width: 320px;
    padding: 0 20px;
  }

  @media screen and (min-width: 768px) {
    padding: 0 32px;
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;
