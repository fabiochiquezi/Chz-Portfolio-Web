import styled from 'styled-components'

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 48px;

    @media (min-width: 1024px){
        flex-direction: row;
        align-items: flex-start;
    }

    h6{
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .links{
        display: none;

        @media (min-width: 1024px){
            display: inline-block;
        }

        li{
            padding: 10px 0px;
        }

        a{
            display: inline-block;
            font-size: 11px;
            font-weight: bold;
            text-transform: uppercase;

            &:hover{
                opacity: 0.5;
            }

            @media (min-width: 1024px){
                font-size: 12px;
            }
        }
    }

    .pt{
        width: 100%;

        @media (min-width: 1024px){
            width: 33%;
        }
    }

    .pt-1{
        margin-bottom: 50px;

        @media (min-width: 1024px){
            width: 33%;
        }

        h4{
            font-size: 28px;
            font-weight: bold;
            width: 400px;

            @media (min-width: 1024px){
                font-size: 30px;
                margin-bottom: 32px;
                width: auto;
            }

            @media (min-width: 1530px){
                font-size: 38px;
            }
        }
    }

    .pt-2{
        display: none;

        @media (min-width: 1024px){
            padding-left: 80px;
            display: inline-block;
        }
        @media (min-width: 1280px){
            padding-left: 140px;
        }
    }

    .pt-3{
        margin-bottom: 32px;

        p:nth-child(2){
            font-size: 18px;
            margin-bottom: 0px;

            @media (min-width: 1024px){
                margin-bottom: 10px;
            }
        }

        p:nth-child(3){
            font-size: 30px;
            font-weight: bold;
            margin-bottom: 0px;

            @media (min-width: 1024px){
                margin-bottom: 20px;
            }
        }
    }
`
