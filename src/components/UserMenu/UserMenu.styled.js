import styled from 'styled-components';

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #cdc1d5;
  color: #fff;
  border-radius: 50%;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    width: 30px;
    height: 30px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 20px;
    width: 40px;
    height: 40px;
  }
`;

export const UserEmail = styled.p`
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
