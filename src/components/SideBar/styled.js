import styled, {css} from "styled-components"
const Container = styled.div`
    padding: 20px;
    border-right: 1px solid #ddd;
    flex: 0.2;
    min-width: 255px;
    >.twiiter-logo{
        margin: 10px 0;
        width: 46 px;
        height: 30px;
        fill: var(--PrimaryColor) !important;
    }
    >Button{
        background-color: var(--PrimaryColor);
        border: none !important;
        font-weight: 800 !important;
        height: 46px !important;
        padding: 30px !important;
        border-radius: 1000px !important;
    } 
`
const SidebarIcon = styled.div`
    display: flex;
    align-item: center;
    padding: 14px 10px;
    >h2{
        font-size: 19px;
        margin: 0 15px 0 20px;
        font-weigth: 700;
    }
    >MuiSvgIcon-root{
        width: 30px;
        height: 30px:
    }
    &:hover{
        background-color: var(--ItemsHover);
        color: var(--PrimaryColor);
        transform: color 100ms ease-out; 
        cursor: pointer;
    }
    ${props =>  props.active && css`
        color: var(--PrimaryColor);
        background-color: var(--ItemsHover);
    `}
`
export {
    Container, 
    SidebarIcon
}