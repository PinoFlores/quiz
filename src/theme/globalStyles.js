import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    .btn-primary {
        border: none;
        color:  ${({ theme }) => theme.textColor400};
        background: ${({ theme }) => theme.primaryColor};

        &:hover {
            background: ${({ theme }) => theme.primaryColorHover};
        }
    }

    .btn-secondary {
        background: ${({ theme }) => theme.btnSecondary};
        color: ${({ theme }) => theme.textColor200};
        
        &:hover {
            color: ${({ theme }) => theme.textColor300};
        }
    }
    
    .btn-outline-primary {
        color:  ${({ theme }) => theme.primaryColor};
        background: transparent;
        border: 2px solid ${({ theme }) => theme.primaryColor};

        &:hover {
            border: 2px solid ${({ theme }) => theme.primaryColor};
            color:  ${({ theme }) => theme.textColor400};
            background: ${({ theme }) => theme.primaryColor};
        }
    }

    .card {
        border-radius: 5px;
        border: 1px solid ${({ theme }) => theme.borderColor};
        background-color: ${({ theme }) => theme.cardBackground};
    }
    .card-bg {
        background-color: ${({ theme }) => theme.cardBackground};
    }
    .bordered {
        border-radius: 5px;
        border: 1px solid ${({ theme }) => theme.borderColor};
    }

    h1, h2, h3, h4, h5, h5 {
        margin: 0;
        color: ${({ theme }) => theme.textColor400};
    }

    .color-primary {
        color: ${({ theme }) => theme.primaryColor};
    }
`;
