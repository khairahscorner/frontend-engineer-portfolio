import styled from 'styled-components';
import {screens, colors} from '../utilities';
const red = '#be0028';

export const HeaderWrapper = styled.header`
    position: sticky;
    width: 100%;
    top: -1px;
    z-index: 100;
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors['color-light']};
    box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 10px;
    @media ${screens.mobileL} {
        padding: 10px 15px;
    }
    .nav-wrapper {
        position: relative;
    }
    .logo {
        display:flex;
        width: 80px;
        height: auto;
        margin: -10px 0 -10px -10px;
        img {
            max-width: 100%;
            @media ${screens.mobileL} {
                max-width: 85%;
            }
        }
    }
    .resume-text {
        color: ${colors['color-primary']};
        cursor: pointer;
            @media ${screens.mobileL} {
                display: none
            }
    }
    .resume-icon {
        display: none;
        cursor: pointer;
        svg {
            object-fit: contain;
            path {
                fill: ${colors['color-primary']};
            }
        }
        @media ${screens.mobileL} {
            display: inline-block;
        }
    }
    
`
export const FooterWrapper = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 50px auto 0;
    background-color: ${colors['color-light']};
    .footer-logo {
        width: 20%;
        svg {
            width: 100%;
            object-align: cover;
        }     
        @media ${screens.mobileL} {
            width: 50%;
        }
    }
    .credit {      
        color: ${colors['color-primary']};
        padding: 20px 0 50px;
        width: 100%;
        text-align: center;
        letter-spacing: 1px;
    }
`

export const ButtonWrapper = styled.button`
    padding: 10px 20px;
    background-color: ${red};
    border: 1px solid transparent;
    border-radius: 10px;
    transition: transform .5s ease-in-out;
    a {
        color: #ffffff;
        font-weight: 600;
    }
    &:hover {
        transform: translateY(-5px);
    }
`

export const MainWrapper = styled.main`
    width: 100%;
    margin: 0 auto;
    min-height: 100vh;
    .inner-content {
        width: 80%;
        margin: 0 auto;
        @media ${screens.mobileL} {
            width: 90%;
        }
    }
    .inner-padding {
        padding: 7% 0;
        @media ${screens.mobileL} {
            padding: 15% 0;
        }
    }
    .first-section {
        height: 80vh;
        background-color: ${colors['color-light']};
        .intro {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 15% 0;
            justify-content: center;
            @media ${screens.mobileL} {
                padding: 25% 0;
             }
        }
        .intro-heading {
            font-size: 5rem;
            margin-bottom: 25px;
            @media ${screens.mobileL} {
               font-size: 3rem;
               margin-bottom: 15px;
            }
        }
        .intro-desc {
            font-size: 1.2rem;
            margin-bottom: 20px;
            @media ${screens.mobileL} {
                font-size: 1rem;
             }
        }
        .separator {
            width: 50px;
            height: 1px;
            border-bottom: 1.5px solid ${colors["color-primary"]};
        }
        .social-icons {
            display: flex;
            width: 70%;
            align-items: center;
            margin-top: 15px;
            .icon {
                width: 20px;
                height: 20px;
                margin-right: 15px;
                a {
                    transition: transform 0.5s ease;
                    svg {
                        width: 100%;
                        height: 100%;
                    }
                    &:hover {
                        svg {
                            transform: scale(1.2);
                        }
                    }
                }
            }
        }
    }
    .intro-heading {
        font-size: 5rem;
        margin-bottom: 25px;
        @media ${screens.mobileL} {
           font-size: 3rem;
        }
    }
    .section-heading {
        font-size: 3rem;
        margin-bottom: 40px;
        @media ${screens.mobileL} {
            font-size: 2rem;
        }
    }
    .second-section {
        background-color: ${colors['color-primary']};
        color: ${colors["color-light"]};
    }
    .section-wrapper {
        margin-bottom: 10%;
        @media ${screens.mobileL} {
            margin-bottom: 20%;
        }
    }
    .bio {
        width: 90%;
        p {
            margin-bottom: 10px;
            line-height: 2rem;
        }
        @media ${screens.mobileL} {
            width: 100%;
        }
    }
    .tools {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        .item {
            margin-bottom: 20px;
            width: 80%;
            @media ${screens.mobileL} {
                width: 100%;
            }
            .type {
                font-weight: 600;
                margin-right: 15px;
            }
            .list {
                font-style: italic;
            }
        }
    }
`