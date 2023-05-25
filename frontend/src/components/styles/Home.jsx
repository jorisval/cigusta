import styled, { keyframes } from 'styled-components';
import theme from '../utils/Variables';
import StorySectionImage from "../../assets/images/image-story.png";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
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

.story-section {
    margin: 0 -0.5rem;
    padding: ${theme.layout.spaceBetween60} ${theme.layout.marginLeftRight};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background: url(${StorySectionImage}) center center / cover;
    @media (min-width: ${theme.breakpoints.up.large}) {
        background: unset;
        background-color: ${theme.colors.backgroundColor3};
    }
    &__image {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 7;
        width: 100%;
        height: 100%;
        background-color: rgba(20, 20, 20, 0.8);
        @media (min-width: ${theme.breakpoints.up.large}) {
            position: relative;
            background: url(${StorySectionImage}) center center / cover;
            min-height: 500px;
            width: 40%;
        }
    }
    &__text {
        width: 100%;
        z-index: 8;
        box-sizing: border-box;
        text-align: center;
        @media (min-width: ${theme.breakpoints.up.large}) {
            width: 50%;
            text-align: left;
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
            @media (min-width: ${theme.breakpoints.up.large}) {
                margin: 0;
            }
        }
        p {
            font-size: 1rem;
            color: ${theme.colors.white};
            font-weight: 200;
            line-height: 1.25rem;
        }
    }
}
.blog-view {
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
    }
    &__articles {
        margin-top: ${theme.layout.spaceBetween30};
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        .blog-view__article {
            width: 14.375rem;
            text-align: left;
            font-weight: 400;
            font-size: 1rem;
            background-color: ${theme.colors.backgroundColor3};
            padding-bottom: 0.9375rem;
            margin-bottom: 2.1875rem;
            @media (max-width: ${theme.breakpoints.down.small}) {
                margin: auto;
                margin-bottom: 2.1875rem;
            }
            @media (min-width: ${theme.breakpoints.up.medium}) {
                width: 20rem;
                font-size: 1.125rem;
                padding-bottom: 1.875rem;
            }
            &:hover {
                border-bottom: 3px solid ${theme.colors.secondary};
            }
            .image {
                height: 200px;
                img {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    z-index: 20;
                }
            }
            .content {
                position: relative;
                z-index: 21;
                width: 80%;
                background-color: ${theme.colors.backgroundColor3};
                padding: 1rem;
                margin: auto;
                margin-top: -${theme.layout.spaceBetween60};
            }
            h3 {
                margin: 0;
                margin-bottom: 0.9375rem;
                color: ${theme.colors.titleH2};
                background-color: ${theme.colors.backgroundColor3};
                font-familly: ${theme.typography.secondaryFontFamily};
                font-size: 1.25rem;
                font-weight: bold;
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    font-size: 1.375rem;
                } 
            }
            p {
                color: ${theme.colors.white};
                margin: 0;
                margin-bottom: 0.875rem;
                font-weight: 300;
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    margin-bottom: 1rem;
                    line-height: 24px;
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
`;