import styled from 'styled-components';
import {screens, colors} from '../utilities';
const red = '#be0028';

export const HeaderWrapper = styled.header`
    position: sticky;
    width: 100%;
    top: -1px;
    z-index: 100;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors['color-light']};
    box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 10px;
    .nav-wrapper {
        position: relative;
    }
    .logo {
        display:flex;
        width: 80px;
        height: auto;
        margin: -10px 0;
        img {
            max-width: 100%;
            @media ${screens.mobileL} {
                max-width:85%;
            }
        }
    }
    .resume-text {
        color: ${colors['color-secondary']};
            @media ${screens.mobileL} {
                display: none
            }
    }
    .resume-icon {
        display: none;
        svg {
            object-fit: contain;
            path {
                fill: ${colors['color-highlight-dark']};
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
        color: ${colors['color-secondary']};
        padding: 20px 0 50px;
        width: 100%;
        text-align: center;
        letter-spacing: 1px;
    }
`
export const IconWrapper = styled.div`
    display: flex;
    width: 70%;
    padding: 20px 0 30px;
    align-items: center;
    .icon {
        margin-right: 20px;
        a {
            transition: transform 0.5s ease;
            &:hover {
                svg {
                    transform: scale(1.2);
                }
            }
        }
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
    width: 80%;
    margin: 0 auto;
    padding: 50px 0;
    min-height: 100vh;
    @media ${screens.mobileL} {
        width: 100%; 
    }
    .first-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 30px;
        border-bottom: 1px solid #777777;
    }
    .heading {
        font-size: 36px; 
        text-align: center;
    }
    .sub {
        font-size: 28px;
        @media ${screens.mobileL} {
            font-size: 20px; 
        }
    }
    .span {          
        font-style: italic;
    }
    .logo {
        width: 30%;
        height: auto;
        margin: 50px 0;
        img {
            width: 100%;
            object-fit: contain;
        }
        @media ${screens.mobileL} {
            width: 70%;
        }
    }
    .quote {
        font-style: italic;
        font-size: 30px;
        color: #282828;
        @media ${screens.mobileL} {
            font-size: 20px; 
        }
    }
    .about {
        margin: 30px auto;
        width: 45%;
        text-align: center;
        line-height: 36px;
        font-weight: 600;
        @media ${screens.mobileL} {
            width: 80%;
        }
    }
    .second-section {
        margin: 70px 0 50px;
        text-align: center;
    }
    .bio-image {
        position: relative;
        width: 100%;
        img {
            width: 100%;
            object-fit: contain;
        }
    }
    .bio {
        width: 90%;
        margin: 60px auto 20px;
        font-weight: 600;
        line-height: 32px;
        p {
            padding: 10px 0;
        }
    }
    .source {
        font-style: italic;
        font-weight: 400;
        text-decoration: underline;
        color: ${red};
    }
    .section {
        padding: 50px 0;
    }
    .section-heading {
        font-size: 32px;
        margin-bottom: 60px;
        text-align: center;
        text-transform: uppercase;
        @media ${screens.mobileL} {
            font-size: 28px;
        }
    }
    .loading {
        padding: 100px;
        font-size: 40px;
        text-align: center;
        font-weight: 600;
    }
    .flex-row {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        @media ${screens.mobileL} {
            justify-content: center;
        }
        .member {
            width: 24%;
        }
        .flex-group {
            width: 30%;
        }
        .flex-group, .member {         
            display: flex;
            flex-direction: column;
            margin-bottom: 40px;
            @media ${screens.mobileL} {
                width 80%;
            }
        }
        .img-box {
            position: relative;
            width: 100%;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .img-group {
            position: relative;
            border: 1px solid transparent;
            width: 48%;
            margin-bottom: 60px;
            transition: transform 1s ease;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            &:hover {
                border: 1px solid ${red};
                transform: scale(1.02);
            }
            @media ${screens.mobileL} {
                width 80%;
            }
        }
    }
    .text {
        margin-top: 10px;
        span {
            font-weight: 700;
        }
    }
    .content {
            display: flex;
            justify-content: space-between;
            align-items: start;
            .btn {
                margin-left: 30px;
                cursor: pointer;
                transition: all 0.5s ease;
                outline: transparent;
                margin-top: 10px;
            }
            .toggle {
                transform: rotate(180deg);
            }
        }
    .reduced {
        width: 80%;
        margin-top: 30px;
    }
    .song-section {
        text-align: center;
        width: 70%;
        margin: 50px auto;
        @media ${screens.tablet} {
            width 90%;
        }
        .video-player {
            width: 100%;
            height: 500px;
            display: flex;
            padding: 10px 0;
            border: 1px solid #282828;
            margin-bottom: 30px;
            .video {
                width: 95%;
                height: 100%;
                margin: 0 auto;
            }
            @media ${screens.mobileSm} {
                height: 300px;
                padding: 0;
                border: none;
                .video {
                    width: 100%;
                }
            }
        }
        .category {
            font-size: 24px;
            @media ${screens.mobileL} {
                font-size: 18px;
            }
        }
    }
    .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: #f7f7f7;
        height: 50px;
        z-index: -1;
    }
    .btn {
        text-align: center;
    }
`
