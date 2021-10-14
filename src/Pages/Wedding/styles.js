import styled from 'styled-components'

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    nav{
        width: 100vw;
        
    }

    p{
        font-size: 50%;
        color: white;
    }

    span .MuiBadge-colorWarning{
        right: -7px;
        top: 10px;
    }

    @media screen and (min-width: 700px){

        p{
            margin: 10px;
            font-size: 17px;
        }

        span .MuiBadge-colorWarning{
            right: -3px;
            top: 13px;
        }
    }
`

export const Container = styled.section`
   display: flex;
   justify-content: center;
   flex-wrap: wrap;

`