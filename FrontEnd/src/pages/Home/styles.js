import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100dvh;

  main {
    flex: 1;

    > .introduction-container {
      width: min(100%, 42.8rem);

      margin: 1.5rem auto 6.2rem;

      display: flex;
      justify-content: center;

      position: relative;

      div {
        font-family: Poppins;

        align-self: flex-end;
        margin-bottom: 2rem;

        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        
        h3 {
          font-size: 1.8rem;
          font-weight: 600;
          line-height: 140%;
        }

        p {
          font-size: 1.2rem;
          line-height: 140%;
        }
      }

      &::before {
        content: '';
        position: absolute;
        right: 1.6rem; bottom: 0;
        z-index: -10;

        width: 37.6rem;
        height: 12rem;

        border-radius: 3px;
        
        background: ${({ theme }) => theme.COLORS.GRADIENTS_200};
      }
    }
  }
  
`;