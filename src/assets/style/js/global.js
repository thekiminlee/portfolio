import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    body {
        background: ${({theme}) => theme.body};
        color: ${({theme}) => theme.text};
        transition: color 0.6s, background 0.6s ease;
    }

    ${'' /* #about {
        background: rgba($color: ${({theme}) => theme.about_background}, $alpha: 0.9))
        background: ${({theme}) => theme.about_background}
    } */}

    #first-box {
        background: ${({theme}) => theme.first_box};
    }

    #second-box {
        background: ${({theme}) => theme.second_box};
    }

    #third-box {
        background: ${({theme}) => theme.third_box};
    }

    #fourth-box {
        background: ${({theme}) => theme.fourth_box};
    }

    #fifth-box {
        background: ${({theme}) => theme.fifth_box};
    }
`