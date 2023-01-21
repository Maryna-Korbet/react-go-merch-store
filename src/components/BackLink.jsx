import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
    display: inline-flex;
    -items: center;
    : 4px;
    : 8px 0;
    color: black;
    text-decoration: none;
    font-weight: 500;
    text-transform: uppercase;

    :hover {
    : orangered;
}`;

export const BackLink = ({to, children}) => {
    return(
        <StyledLink to={to}>
            <HiArrowLeft size="24" />
            {children}
        </StyledLink>
    );
};
