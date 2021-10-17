import styled from "styled-components";

export const Container = styled.div`
    background-color: #eeeeee;
    color: #FFF;
`;
export const Area = styled.div`
    margin: auto;
    max-width: 1024px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #747171;
    box-shadow: 0px 0px 10px #ccc;
`;
export const Sidebar = styled.div`
    width: 250px;
    border-right: 1px solid #252983;
`;

export const Page = styled.div`
    flex: 1;
    padding-left: 40px;
    padding-top: 40px;
`;