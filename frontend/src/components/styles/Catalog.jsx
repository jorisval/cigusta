import styled, { keyframes } from 'styled-components';
import theme from '../utils/Variables';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const shimmer = keyframes`
    0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`;

export const SkeletonLoader = styled.div`
    min-width: 14.375rem;
    width: 40%;
    height: 9.375rem;
    background-color: ${theme.colors.titleH4};
    background-image: linear-gradient(90deg, ${theme.colors.titleH4} 25%, ${theme.colors.link} 50%, ${theme.colors.titleH4} 75%);
    background-size: 200% 100%;
    background-repeat: no-repeat;
    animation: ${shimmer} 1.5s infinite;
    margin: auto;
    margin-bottom: 2.1875rem;
    padding-bottom: 0.9375rem;
    @media (min-width: ${theme.breakpoints.up.medium}) {
        min-width: 18rem;
        height: 7.5rem;
        padding-bottom: 1.875rem;
    }
`;

export const CatalogContainer = styled.div`
    animation: ${fadeIn} 1s ease-in;
    margin: 0 ${theme.layout.marginLeftRight};
    margin-top: ${theme.layout.spaceBetween30};
    margin-bottom: ${theme.layout.spaceBetween30};
    text-align: center; 
    @media (min-width: ${theme.breakpoints.up.medium}) {
        margin-top: ${theme.layout.spaceBetween90};
        margin-bottom: ${theme.layout.spaceBetween90};
    }
    .services-section__header {
        margin-bottom: 0;
        z-index: 16;
        position: relative;
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
        .category-buttons {
            display: flex;
            justify-content: center;
           
            margin-top: 0.5rem;
            margin-bottom: 0;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                margin-top: 1.25rem;
            }
            .cta-button {
                flex: 0 0 auto;
                position: relative;
                background-color: ${theme.colors.transparent};
                border: 1 solid ${theme.colors.transparent};
                color: ${theme.colors.white};
                margin: 0;
                margin-right: 0.625rem;
                &.active {
                    color: ${theme.colors.secondary};
                }
                .bi {
                    display: none;
                    position: absolute;
                    font-size: 1.125rem;
                    bottom: -10px;
                    left: 40%;
                    color: ${theme.colors.white};
                    &.active {
                        display: inline-block;
                    }
                }
            }
        }
    }
    
    .services-section.catalog-services {
        margin: 0 ${theme.layout.marginLeftRight}; 
        text-align: center;
        a {
            text-decoration: none;
        }
        button.cta-button {
            background-color: ${theme.colors.link};
            border-radius: 2rem;
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
            color: ${theme.colors.white};
            margin-right: 0.625rem;
        }
        .s-services {
            z-index: 16;
            position: relative;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            background-color: ${theme.colors.titleH4};
            border-top: 3px solid ${theme.colors.white};
            padding: ${theme.layout.spaceBetween30} 0;
            margin: 0;
            margin-bottom: ${theme.layout.spaceBetween30};
            .s-service {
                min-width: 14.375rem;
                width: 40%;
                padding: 0.5rem;
                margin: auto;
                margin-bottom: 1rem;
                position: relative;
                background-color: ${theme.colors.transparent};
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    min-width: 16rem;
                    padding: 0.875rem;
                }
                &:hover {
                    box-shadow: 0 0 10px ${theme.colors.link};
                }
                a {
                    text-decoration: none;
                }
                &__content {
                    text-align: left;
                    position: relative;
                    z-index: 2;
                    display: flex;
                    align-items: center;
                    img {
                        width: 100px;
                        height: 100px;
                        border-radius: 50%;
                        margin-right: 0.5rem;
                    }
                    .part-one {
                        display: flex;
                        flex-direction: column;
                        color: ${theme.colors.paragraph};
                        .header {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            background-color: ${theme.colors.transparent};
                            .name {
                                font-size: 1rem;
                            }
                            .price {
                                color: ${theme.colors.link};
                                font-size: 0.875rem;
                            }
                        }
                        .description {
                            font-size: 0.875rem;
                            color: ${theme.colors.white};
                            font-weight: 200;
                            line-height: 1.25rem;
                        }
                    }
                }
            }
            .not-found {
                width: 100%;
                text-align: center;
                margin-bottom: 2.1875rem;
            }
        }
    }
`;