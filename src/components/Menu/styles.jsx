import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  justify-content: center;

  a {
    padding: 10px;
    margin: 5px;
    border-radius: 3px;
    text-decoration: none;
    color: white;
    transition: 0.3s all;

    &:hover {
      background-color: white;
      color: black;
    }
  }
`;