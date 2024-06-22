import styled from "styled-components";

export const LandingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5.75rem 0;
`

export const InfoContainer = styled.div`
  max-width: 36.75rem;
  display: flex;
  flex-direction: column;
  gap: 4.125rem;

  h1 {
    font-size: 3rem;
    font-weight: 800;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['base-title']};

    line-height: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1.25rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 100%;
`

export const IconCart = styled(Icon)`
  background: ${(props) => props.theme['yellow-dark']};
`

export const IconPackage = styled(Icon)`
  background: ${(props) => props.theme['base-text']};
`

export const IconTimer = styled(Icon)`
  background: ${(props) => props.theme['yellow']};
`

export const IconCoffee = styled(Icon)`
  background: ${(props) => props.theme['purple']};
`