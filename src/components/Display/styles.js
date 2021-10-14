import styled from 'styled-components'

export const ItemDisplay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 310px;
    height: 300px;
    background-color: beige;
    border-radius: 4px;
    border: none;
    color: tomato;
    margin: 5px 5px 5px 5px;


    img{
        width: 34%;
        height: 67%;
        margin-left: 2px;
    }

    h3{
        font-size: 12px;
        font-weight: bold;
    }

    h4{
        font-size: 8.5px;
    }

    

    
    @media screen and (min-width: 750px){
        width: 357px;
        height: 300px;

       
        
        img{
            width: 50%;
            height: 95%;
        }
        
       
    }

`

export const Button = styled.button`
   padding: 7px;
   background-color: #ff5722;
   color: white;
   border: none;
   border-radius: 4px;
   margin-bottom: 15px;
   margin-left: 5px;
   box-shadow: #942b09 0px 3px 1px 0px;
   font-size: 12px;
   margin-right: 5px;
   cursor: pointer;


    :active{
    box-shadow: 0px 0px 0px 0px, inset rgb(36, 36, 36) 0px 1px 2px 0.5px;
    transform: translateY(3px);
    }

    @media screen and (min-width: 700px){
        padding: 12px;

        img{
            width: 50%;
            height: 95%;
            margin-left: 2px;
        }

    }

`