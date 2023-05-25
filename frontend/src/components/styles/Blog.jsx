import styled, {keyframes} from 'styled-components';
import theme from '../utils/Variables';

const shimmer = keyframes`
    0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`;

export const SkeletonLoader = styled.div`
    width: 14.375rem;
    height: 23.6075rem;
    background-color: ${theme.colors.titleH4};
    background-image: linear-gradient(90deg, ${theme.colors.titleH4} 25%, ${theme.colors.link} 50%, ${theme.colors.titleH4} 75%);
    background-size: 200% 100%;
    background-repeat: no-repeat;
    animation: ${shimmer} 1.5s infinite;
    padding-bottom: 0.9375rem;
    margin-bottom: 2.1875rem;
    @media (max-width: ${theme.breakpoints.down.small}) {
        margin: auto;
        margin-bottom: 2.1875rem;
    }
    @media (min-width: ${theme.breakpoints.up.medium}) {
        width: 20rem;
        height: 28.37rem;
        padding-bottom: 1.875rem;
    }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const BlogContainer = styled.div`
    animation: ${fadeIn} 1s ease-in;
    margin: 0 -0.5rem;
    padding: ${theme.layout.spaceBetween60} ${theme.layout.marginLeftRight};
    background-color: ${theme.colors.backgroundColor1};
    border-top: 1px solid ${theme.colors.c4};
    .blog__header {
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
    .articles {
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
    .buttons-article {
        margin-bottom: ${theme.layout.spaceBetween90};
        display: flex;
        justify-content: center;
        .previous {
            font-family: ${theme.typography.primaryFontFamily};
            font-size: 0.875rem;
            font-weight: 400;
            color: ${theme.colors.white};
            width: 5.625rem;
            padding: 0.375rem 1.75rem;
            background-color: ${theme.colors.link};
            border-radius: 2rem 0 0 2rem;
            border-style: none;
            display: inline-block;
            margin-bottom: ${theme.layout.spaceBetween30};
            cursor: pointer;
            margin-right: 0.5rem;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                font-size: 1rem;
                width: 6.875rem;
                padding: 0.55rem 2.18rem;
                margin-right: 0.625rem;
            }
        }
        .next {
            font-family: ${theme.typography.primaryFontFamily};
            font-size: 0.875rem;
            font-weight: 400;
            color: ${theme.colors.white};
            width: 5.625rem;
            padding: 0.375rem 1.75rem;
            background-color: ${theme.colors.link};
            border-radius: 0 2rem 2rem 0;
            border-style: none;
            display: inline-block;
            margin-bottom: ${theme.layout.spaceBetween30};
            cursor: pointer;
            margin-right: 0.625rem;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                font-size: 1rem;
                width: 6.875rem;
                padding: 0.55rem 2.18rem;
            }
        }
    }
    
`;