import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,*::after,*::before {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-weight: ${({ theme }) => theme.textWeight};
    margin: 0;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Helvetica", "Segoe UI",Roboto,"Helvetica Neue", Arial, sans-serif;
    transition: all 0.25s linear;
    -webkit-transition: all 0.25s linear;
    -moz-transition: all 0.25s linear;
    -ms-transition: all 0.25s linear;
    -o-transition: all 0.25s linear;
  }

  main {
    background: ${({ theme }) => theme.background};
  }

  .bold, .subsection span, a {
    font-weight: ${({ theme }) => theme.bold};
  }

  section {
    h1, .block-grid .rounded-block span {
      color: ${({ theme }) => theme.header}; 
    }
  }

  .blob-friend {
    svg {
      path{
        fill: ${({ theme }) => theme.blob};
      }
    }
    .blob-message {
      background: ${({ theme }) => theme.blocks};
      border: 1px solid ${({ theme }) => theme.text};
    }
  }

  a {
    color: ${({ theme }) => theme.header};
  }
  
  button#burger {
    background: ${({ theme }) => theme.blocks};
  }
  
  #headers {
    & > a {
      color: ${({ theme }) => theme.text};
      transition: 0.25s linear;
        
      &:hover {
          color: ${({ theme }) => theme.header};
      }
    }
  }

  .social-icons {
    a {
      div {
        background-color: ${({ theme }) => theme.text};
        transition: 0.25s linear;
      }

      &:hover {
        div {
          background-color: ${({ theme }) => theme.header};
        }
      }
    }

    .toggler {
      label {
        background-color: ${({ theme }) => theme.text};
        .ball {
          background-color: ${({ theme }) => theme.blocks};
        }
      }
    }
  }

  .timespan, .stack {
    color: ${({ theme }) => theme.header};
  }

 .block {
     background: ${({ theme }) => theme.blocks};
 }

 .blob {
     background: ${({ theme }) => theme.blob};

     .eyes {
         background: #000000;
     }
 }
 #sun {
     background: ${({ theme }) => theme.sun};
 }

 #moon {
    background: ${({ theme }) => theme.moon};
}

.toggle-accents {
    background: ${({ theme }) => theme.blob};
}

#footer {
  background: ${({ theme }) => theme.footer};
}

`;
