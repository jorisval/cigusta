import styled, { keyframes } from 'styled-components';
import theme from '../utils/Variables';
import SectionOneImage from "../../assets/images/cigusta-hero-image.png";
import SectionTwoImage from "../../assets/images/cigusta-hero-image.png";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const scroll = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;


export const HomeContainer = styled.div`
animation: ${fadeIn} 1s ease-in;
.hero {
    position: relative;
    .bi-arrow-left-circle {
        position: absolute;
        left: ${theme.layout.spaceBetween10};
        top: 40%;
        color: ${theme.colors.white};
        font-size: 1.5rem;
        cursor: pointer;
        z-index: 12;
    }
    .bi-arrow-right-circle {
        position: absolute;
        right: ${theme.layout.spaceBetween10};
        top: 40%;
        color: ${theme.colors.white};
        font-size: 1.5rem;
        cursor: pointer;
        z-index: 12;
    }
    .slide { 
        &-circles {
            display: flex;
            position: absolute;
            bottom: ${theme.layout.spaceBetween30};
            left: 45%;
        }
        &-circle {
            margin-right: ${theme.layout.spaceBetween10};
            cursor: pointer;
            font-size: 1rem;
            color: ${theme.colors.white};
            &.active {
                color: ${theme.colors.secondary};
            }
        }
    }
    &-slides {

    }
    &-slide {
        display: none;
        animation: ${fadeIn} 0.5s ease-in;
        flex-direction: column;
        justify-content: center;
        background: ${props => `url(${props.backgroundImage}) center center / cover no-repeat`};
        position: relative;
        margin: 0 -0.5rem;
        padding: ${theme.layout.spaceBetween60};
        @media (min-width: ${theme.breakpoints.up.medium}) {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin: 0 -8px;
            padding: ${theme.layout.spaceBetween90};
        }
        &.active {
            display: flex;
        }
        .hero__text {  
            padding: 0.5rem;
            z-index: 2;
            width: 90%;
            margin: auto;
            text-align: center;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                margin: 0 0 0 ${theme.layout.marginLeftRight};
                width: 40%;
                max-width: 33rem;
                text-align: unset;
            }
            h1 {
                font-family: ${theme.typography.secondaryFontFamily};
                color: ${theme.colors.white};
                font-size: 2rem;
                line-height: 2rem;
                margin-bottom: ${theme.layout.spaceBetween10};
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    font-size: 3.125rem;
                    line-height: 3.2rem;
                    text-align: left;
                }
            }
            .subtitle {
                color: ${theme.colors.white};
                font-size: 1rem;
                line-height: 1.5rem;
                font-weight: 300;
                margin-bottom: ${theme.layout.spaceBetween30};
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    text-align: left;
                }
            }
            .cta-button {
                border-radius: 2rem;
            }
        }
        .hero__overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(1,6,7,0.5);
            @media (min-width: ${theme.breakpoints.up.medium}) {
                display: none;
            }
        }
    }
}
.services-section {
    margin: 0 -0.5rem;
    padding: ${theme.layout.spaceBetween60} ${theme.layout.marginLeftRight};
    background-color: ${theme.colors.backgroundColor1};
    &__header {
        text-align: center;
        margin: auto;
        width: 80%;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            width: 40%;
        }
        .subtitle {
            font-family: ${theme.typography.tertiaryFontFamily};
            font-size: 1.25rem;
            color: ${theme.colors.secondary};
            margin-bottom: 0.5rem;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                font-size: 1.875rem;
                margin-bottom: 1.25rem;
            }
        }
        h2 {
            font-family: ${theme.typography.secondaryFontFamily};
            font-size: 1.75rem;
            color: ${theme.colors.white};
            margin-top: 0.5rem;
            margin-bottom: 0.625rem;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                margin-top: 1.25rem;
                font-size: 2.5rem;
            }
        }
        .separate-line {
            width: 30px;
            margin: auto;
            border: 1px solid ${theme.colors.secondary};
        }
        p {
            font-size: 1rem;
            color: ${theme.colors.white};
            font-weight: 200;
            line-height: 1.25rem;
        }
    }
    .services {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: ${theme.layout.spaceBetween60};
        .service {
            min-width: 245px;
            width: 30%;
            box-sizing: border-box; 
            padding: ${theme.layout.spaceBetween30};
            margin: auto;
            margin-bottom: 10px;
            color: ${theme.colors.white};
            background-color: ${theme.colors.backgroundColor3};
            text-align: center;
            h3 {
                font-family: ${theme.typography.secondaryFontFamily};
                font-size: 1.125rem;
                font-weight: bold;
                margin-bottom: 0.625rem;
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    font-size: 1.25rem;
                }   
            }
            p {
                font-size: 0.875rem;
                line-height: 1.25rem;
                font-weight: 200;
                margin-bottom: 1.25rem;
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    font-size: 1rem;
                    line-height: 1.375rem;
                } 
            }
            .cta-button {
                background-color: ${theme.colors.transparent};
                border: 2px solid ${theme.colors.white};
                box-shadow: 0 4 4 rgba(0, 0, 0, 0.1);
                &:hover {
                    background-color: ${theme.colors.secondary};
                }
            }
        }
    }
}

.reviews-section {
    margin: 0 -0.5rem;
    padding: ${theme.layout.spaceBetween60} ${theme.layout.marginLeftRight};
    background-color: ${theme.colors.backgroundColor1};
    &__header {
        text-align: center;
        margin: auto;
        width: 80%;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            width: 40%;
        }
        .subtitle {
            font-family: ${theme.typography.tertiaryFontFamily};
            font-size: 1.25rem;
            color: ${theme.colors.secondary};
            margin-bottom: 0.5rem;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                font-size: 1.875rem;
                margin-bottom: 1.25rem;
            }
        }
        h2 {
            font-family: ${theme.typography.secondaryFontFamily};
            font-size: 1.75rem;
            color: ${theme.colors.white};
            margin-top: 0.5rem;
            margin-bottom: 0.625rem;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                margin-top: 1.25rem;
                font-size: 2.5rem;
            }
        }
        .separate-line {
            width: 30px;
            margin: auto;
            border: 1px solid ${theme.colors.secondary};
        }
        p {
            font-size: 1rem;
            color: ${theme.colors.white};
            font-weight: 200;
            line-height: 1.25rem;
        }
    }
    .reviews {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: ${theme.layout.spaceBetween60};
        .review {
            min-width: 250px;
            width: 40%;
            box-sizing: border-box; 
            padding: ${theme.layout.spaceBetween30};
            margin: auto;
            margin-bottom: 10px;
            color: ${theme.colors.white};
            background-color: ${theme.colors.backgroundColor3};
            text-align: center;
            img {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                margin-bottom: 0.625rem;
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    width: 60px;
                    height: 60px;
                } 
            }
            h3 {
                font-family: ${theme.typography.secondaryFontFamily};
                font-size: 1.125rem;
                font-weight: bold;
                margin-bottom: 0.625rem;
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    font-size: 1.25rem;
                }   
            }
            p {
                font-size: 0.875rem;
                line-height: 1.25rem;
                font-weight: 200;
                margin-bottom: 1.25rem;
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    font-size: 1rem;
                    line-height: 1.375rem;
                } 
            }
            .cta-button {
                background-color: ${theme.colors.transparent};
                border: 2px solid ${theme.colors.transparent};
                &:hover {
                    background-color: ${theme.colors.secondary};
                }
            }
        }
    }
}

.section-one {
    margin: 0 -0.5rem;
    margin-top: ${theme.layout.spaceBetween90};
    display: flex;
    position: relative;
    background: url(${SectionOneImage}) center center / cover;
    @media (min-width: ${theme.breakpoints.up.large}) {
        background: unset;
        background-color: ${theme.colors.backgroundColor1};
    }
    &__image {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 7;
        width: 100%;
        height: 100%;
        background-color: rgba(20, 20, 20, 0.9);
        @media (min-width: ${theme.breakpoints.up.large}) {
            background: url(${SectionOneImage}) center center / cover;
            width: 50%;
            left: unset;
            right: 0;
        }
    }
    &__text {
        width: 100%;
        z-index: 8;
        box-sizing: border-box;
        text-align: center;
        padding: ${theme.layout.marginLeftRight};
        @media (min-width: ${theme.breakpoints.up.large}) {
            width: 50%;
            padding: ${theme.layout.spaceBetween90};
        }
        .subtitle {
            font-family: ${theme.typography.tertiaryFontFamily};
            font-size: 1.25rem;
            color: ${theme.colors.secondary};
            margin-bottom: 1rem;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                font-size: 1.875rem;
                margin-bottom: 1.875rem;
            }
        }
        h2 {
            font-family: ${theme.typography.secondaryFontFamily};
            font-size: 1.75rem;
            color: ${theme.colors.white};
            margin-top: 1rem;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                margin-top: 1.875rem;
                font-size: 2.5rem;
            }
        }
        .coma {
            img {
                max-width: 15px;
                margin-right: 0.5rem;
            }
        }
        .Customer {
            &-reviews {
                width: 70%;
                margin: auto;
                position: relative;
                .bi-chevron-left {
                    position: absolute;
                    left: -2.5rem;
                    top: 45%;
                    color: ${theme.colors.paragraph};
                    font-size: 2rem;
                    cursor: pointer;
                    z-index: 12;
                }
                .bi-chevron-right {
                    position: absolute;
                    right: -2.5rem;
                    top: 45%;
                    color: ${theme.colors.paragraph};
                    font-size: 2rem;
                    cursor: pointer;
                    z-index: 12;
                }
            }
            &-review {
                display: none;
                z-index: 11;
                animation: ${fadeIn} 0.5s ease-in;
                margin-bottom: ${theme.layout.spaceBetween30};
                p {
                    color: ${theme.colors.paragraph};
                    font-size: 1rem;
                    line-height: 1.625rem;
                    margin-bottom: ${theme.layout.spaceBetween20};
                }
                &__image {
                    max-width: 60px;
                    margin-bottom: ${theme.layout.spaceBetween10};
                    border-radius: 5px;
                }
                &__name {
                    color: ${theme.colors.white};
                    font-size: 1rem;
                    font-weight: 400;
                    margin-bottom: ${theme.layout.spaceBetween10};
                }
                &__post {
                    color: ${theme.colors.link};
                    font-size: 1rem;
                    font-weight: 400;
                    margin-bottom: ${theme.layout.spaceBetween10};
                }
                &.active {
                    display: block;
                }
            }
        }
        .review {
            &-circles {
                display: flex;
                justify-content: center;
            }
            &-circle {
                width: 14px;
                height: 14px;
                border-radius: 50%;
                background-color: ${theme.colors.paragraph};
                margin-right: 4px;
                cursor: pointer;
                &.active {
                    background-color: ${theme.colors.secondary};
                }
            }
        }
    }
}
.section-two {
    margin: 0 -0.5rem;
    display: flex;
    position: relative;
    background: url(${SectionTwoImage}) center center / cover;
    @media (min-width: ${theme.breakpoints.up.large}) {
        background: unset;
        background-color: ${theme.colors.backgroundColor1};
        flex-direction: row-reverse;
    }
    &__image {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 9;
        width: 100%;
        height: 100%;
        background-color: rgba(20, 20, 20, 0.9);
        @media (min-width: ${theme.breakpoints.up.large}) {
            background: url(${SectionTwoImage}) center center / cover;
            width: 50%;
        }
    }
    &__text {
        width: 100%;
        z-index: 10;
        box-sizing: border-box;
        text-align: center;
        padding: ${theme.layout.marginLeftRight};
        @media (min-width: ${theme.breakpoints.up.large}) {
            width: 50%;
            padding: ${theme.layout.spaceBetween90};
        }
        .subtitle {
            font-family: ${theme.typography.tertiaryFontFamily};
            font-size: 1.25rem;
            color: ${theme.colors.secondary};
            margin-bottom: 1rem;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                font-size: 1.875rem;
                margin-bottom: 1.875rem;
            }
        }
        h2 {
            font-family: ${theme.typography.secondaryFontFamily};
            font-size: 1.75rem;
            color: ${theme.colors.white};
            margin-top: 1rem;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                margin-top: 1.875rem;
                font-size: 2.5rem;
            }
        }
        .booking-section {
            margin: auto;
            width: 80%;
            form {
                display: flex;
                flex-direction: column;
                width: 100%;
                div {
                    width: 100%;
                }
                select, input, textarea {
                    box-sizing: border-box;
                    font-family: ${theme.typography.primaryFontFamily};
                    font-size: 0.9375rem;
                    line-height: 1.375rem;
                    font-weight: 400;
                    color: ${theme.colors.paragraph};
                    background-color: ${theme.colors.transparent};
                    width: 100%;
                    border: 1px ${theme.colors.paragraph} solid;
                    padding: ${theme.layout.spaceBetween10};
                    margin-bottom: ${theme.layout.spaceBetween20};
                    @media (min-width: ${theme.breakpoints.up.medium}) {
                        font-size: 1rem;
                    }
                    &:focus {
                        outline: none;
                    }
                }
                input[type="submit"] {
                    font-family: ${theme.typography.primaryFontFamily};
                    font-size: 0.875rem;
                    font-weight: 400;
                    color: ${theme.colors.white};
                    padding: 0.375rem 1.625rem;
                    background-color: ${theme.colors.link};
                    width: unset;
                    border-radius: 5px;
                    border-style: none;
                    display: inline-block;
                    cursor: pointer;
                    @media (min-width: ${theme.breakpoints.up.medium}) {
                        font-size: 1rem;
                        padding: 0.55rem 2.18rem;
                    }
                }
            }
        }
    }
}
.staff {
    margin: 0 ${theme.layout.marginLeftRight};
    margin-top: ${theme.layout.spaceBetween90}; 
    @media (min-width: ${theme.breakpoints.up.medium}) {
        margin-top: ${theme.layout.spaceBetween90};
    }
    &-header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
        &__part1 {
            text-align: center;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                text-align: left;
            }
            .subtitle {
                font-family: ${theme.typography.tertiaryFontFamily};
                font-size: 1.25rem;
                color: ${theme.colors.secondary};
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    font-size: 1.875rem;    
                }
            }
            h2 {
                font-family: ${theme.typography.secondaryFontFamily};
                font-size: 1.75rem;
                color: ${theme.colors.titleH2};
                margin-top: 1rem;
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    margin-top: 1.875rem;
                    font-size: 2.5rem;
                }
            }
        }
        &__part2 {
            text-align: center;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                text-align: right;
            }
        }
    }
    &-members {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: ${theme.layout.spaceBetween30};
    }
    &-member {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        width: 14.375rem;
        box-sizing: border-box;
        border-radius: 0.625rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        background-color: ${theme.colors.white};
        padding: 0.9375rem;
        margin: auto;
        margin-bottom: 2.1875rem;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            width: 16rem;
            padding: 1.875rem 1.5625rem;
        }
        .image {
            margin-bottom: 0.875rem;
            img {
                width: 100%;
                border-radius: 50%;
                margin: auto;
            }
        }
        .infos {
            margin-bottom: 0.875rem;
        }
        &__name {
            color: ${theme.colors.titleH2};
            font-size: 1rem;
            font-weight: 500;
            margin-bottom: 5px;
        }
        &__experience {
            color: ${theme.colors.secondary};
            font-size: 0.875rem;
            font-weight: 500;
        }
        .media {
            display: flex;
            justify-content: space-between;
            a {
                text-decoration: none;
                color: ${theme.colors.titleH2};
            }
        }
    }
}
.trust {
    &-section {
        margin: 0 -0.5rem;
        margin-top: ${theme.layout.spaceBetween90};
        margin-bottom: -${theme.layout.spaceBetween90};
        display: flex;
        background-color: ${theme.colors.white};
        overflow: hidden;
    }
    &-images {
        display: flex;
        height: 40px;
        margin 1.875rem 3.125rem;
        animation: ${scroll} 60s linear infinite;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            height: 60px;
        }
        img {
            height: 100%;
            margin-right: 2rem;
        }
    }
}
`;