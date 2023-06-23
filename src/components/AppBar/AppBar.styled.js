import styled from 'styled-components';

export const Header = styled.header`
  border-bottom: 1px solid #9e9e9e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  @media screen and (min-width: 320px) {
    width: 280px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 10px 0;
  }

  @media screen and (min-width: 1280px) {
    padding: 15px 0;
    width: 1216px;
  }
`;
