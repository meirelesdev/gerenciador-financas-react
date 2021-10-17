import styled from 'styled-components';

export const Container = styled.header`
  background-color: #a09f6f;  
`;
export const Header = styled.header`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
padding: 10px;

.logo {
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 1px -1px 5px #888585;
}

@media (min-width: 475px) {
  flex-direction: row;
  justify-content: space-between;
  max-width: 1024px;
  margin: auto;

  .logo{
    text-align: left;
  }
}
`;