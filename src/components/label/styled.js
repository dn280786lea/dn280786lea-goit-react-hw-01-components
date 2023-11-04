
import styled from 'styled-components'

export function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

        export const Label = styled.div`
        border: 1px solid grey;
            width: 300px;
            height: auto;
            background-color: white;
            border-radius: 5%;
            box-shadow: 10px 5px 5px grey;
`;
        export const Title = styled.h2`
        text-align: center;
        font-family: 'Roboto', sans-serif;
            font-weight: 700;
            font-size: 20px;
            line-height: 14px;
            color: grey;
            margin-top: 20px;
            margin-bottom: 20px;
`;

export const List = styled.ul`
display: flex;
padding-right: 20px;
`;    


export const Percentage = styled.span`
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 14px;
        padding-top: 15px;
        text-align: center;
        padding-bottom: 10px;
        color:white;
    `;   

export const Item = styled.li`
   display: flex;
   flex-wrap: wrap;
 `;  

export const Labeler = styled.span`
        font-family: 'Roboto', sans-serif;
            font-weight: 500;
            font-size: 16px;
            padding-right: 8px;
            padding-top: 15px;
            color:white;
            text-align: center;
 `;  

