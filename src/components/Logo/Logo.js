import { LogoWrapper, LogoSpan } from './Logo.styled';

export const Logo = () => {
  return (
    <LogoWrapper to="/">
      <LogoSpan>P</LogoSpan> | <p>Phonebook</p>
    </LogoWrapper>
  );
};
