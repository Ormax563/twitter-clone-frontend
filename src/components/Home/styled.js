import styled from "styled-components";

export const Container = styled.div`
flex: 0.5;
border-right: 1px solid #ddd;
overflow-y: scroll;
box-sizing: border-box; 
&::-webkit-scrollbar{
    display:none;
}
-ms-overflow-style: none;
scrollbar-width: none;
`

export const Header = styled.header``

export const Box = styled.div`
padding: 5px 15px;
border: 1px solid #ddd;
`
export const Div = styled.div`
display: flex;
width: 100%;
>.columns{
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-rigth: 16px;
    >input{
        margin-left: 10px;
        margin-top: 10px;
        width: 100%;
        border: none;
        outline: 0;
        font-size: 19px;
        line-height: 25px;
        color : #0f1419;
    }
}
>Button{
    background-color: var(--PrimaryColor);
    border: none !important;
    color: white !important;
    font-weight: 900 !important;
    height: 40px !important;
    width: 80px !important;
    float: right !important;
    border-radius: 1000px !important;
    margin-top: 20px !important;
} 

`
export const DivBox = styled.div`
>.MuiSvgIcon-root{
    margin-top: 20px;
    padding: 10px;
    fill: var(--PrimaryColor);
    margin-left: 1 rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 30px !important;
    font-weigth: 700;
}
`
export const Avatar = styled.img`
border-radius: 50%;
width: 50px;
height: 50px;
object-fit: fill;
`
export const Form = styled.div`
display: flex;
flex-direction: column;
`
export const DivPosts = styled.div`
padding: 10px 15px;
border-top: 1px solid #ddd;
margin-top: 5px;
display: flex;
align-item: flex-start;
>.post_avatar{
    margin-top: 5px;
}
`
export const PostBody = styled.div`
padding-left: 10px;
width: 100%;
overFlow: hidden;
>div span{
    font-weight: 600;
    font-size: 15px;
    color: #5b7083;

}
.post_icon{
    font-size:14px !important;
    color: var(--PrimaryColor) !important;
}
h3{
    padding: 0;
    margin: 0;
}
`
export const PostDescription = styled.div`
margin-bottom: 10px;
>p{
    margin: 0;
    padding: 0;
    color: #0f1419;
    font-size: 16px;
    font-weight: normal;
    line-height: 16.5975px;

}
`
export const Images = styled.img`
border-radius: 20px;
min-width: 100%;
width: 100;
`
export const PostFooter = styled.div`
display: flex;
justify-content: space-between;
maring-top: 10px;
color: #5b7083;
padding: 10px;
transition: all 100ms ease-in;
>.MuiSvgIcon-root:hover:nth-child(1){
    fill: #1da1f2;
    cursor: pointer;
}
>.MuiSvgIcon-root:hover:nth-child(2){
    fill: #17bf63;
    cursor: pointer;
}
>.MuiSvgIcon-root:hover:nth-child(3){
    fill: #e02452;
    cursor: pointer;
}
>.MuiSvgIcon-root:hover:nth-child(4){
    fill: #1da1f2;
    cursor: pointer;
}
`