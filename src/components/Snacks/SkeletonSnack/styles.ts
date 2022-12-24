import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div:last-child{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.875rem;
  }

  > div:last-child{
    width: 3rem;
    height: 3rem;
  }
`