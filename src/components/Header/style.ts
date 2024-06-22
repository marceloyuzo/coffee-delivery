import styled from "styled-components";

export const HeaderContainer = styled.div`
  margin: 0 0 2rem 0;

  display: flex;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.75rem;
  }
`

export const LocalInfo = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.125rem;

  background: ${(props) => props.theme['purple-light']};
  border-radius: 6px;

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['purple-dark']}
  }
`

export const ButtonCart = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.375rem;
  height: 2.375rem;
  border: none;
  border-radius: 6px;

  background: ${(props) => props.theme['yellow-light']};
  cursor: pointer;

  span {
    position: absolute;
    top: -15%;
    right: -15%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 0.75rem;
    font-weight: 600;
    width: 1.25rem;
    height: 1.25rem;

    color: ${(props) => props.theme['white']};
    background: ${(props) => props.theme['yellow-dark']};

    border-radius: 100%;
  }
`