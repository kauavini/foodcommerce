import styled from "styled-components";
import { darken } from "polished";


export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  gap: 1.75rem;


  @media (max-width: 500px){
    grid-template-columns: 1;
  }

  .snack{
    position: relative;
    background-color: ${({theme}) => theme.colors.black};
    padding: 1.75rem 1.5rem;
    border-radius: 4px;

    h2{
      margin-bottom: 0.75rem;
      font-weight: 700;
      font-size: 1.5rem;
      text-align: center;
    }

    img{
      object-fit: cover;
      width: 100%;
      height: 11.25rem;
      border-radius: 4px;
      margin-bottom: 0.375rem;
    }


    p{
      font-size: .875rem;
    }

    div{
      margin-top: .875rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      strong{
        font-size: 2rem;
        font-weight: 500;
      }

      button{
        background: ${({theme}) => theme.colors.red};
        width: 3rem;
        height: 3rem;
        border: none;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;

          svg{
        stroke: ${({theme}) => theme.colors.white};
        }

      &:hover{
          background: ${darken(.1, '#aa2424')};
        }
      }      
    }
  }




`