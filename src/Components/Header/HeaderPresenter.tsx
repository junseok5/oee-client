import React from "react"
import styled from "styled-components"
import Colors from "../../Constants/Colors"
import { FiSearch } from "react-icons/fi"
import Button from "../Button/Button"

const StyledContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 4em;
    box-shadow: 0 1px 2px ${Colors.activeBox};
    display: flex;
    align-items: center;

    .logo {
        width: 240px;
        padding-left: 1em;
        box-sizing: border-box;
        color: ${Colors.main};
        font-size: 1.5em;
        font-weight: bold;
    }

    .search-box {
        display: flex;

        label {
            width: 400px;
            height: 2.5em;
            padding-left: 0.5em;
            padding-right: 0.5em;
            border: 1px solid ${Colors.border};
            border-radius: 4px;
            display: flex;
            align-items: center;

            .search-form {
                width: 100%;
                padding-left: 1em;

                input {
                    width: 100%;
                    cursor: text;
                    font-size: 1.1em;
                }
            }
        }
    }

    .login {
        padding-right: 2em;
        color: ${Colors.main};
        font-weight: bold;
        font-size: 1.1em;
        display: flex;
        flex: 1;
        justify-content: flex-end;
    }
`

const HeaderPresenter: React.FC = () => {
    return (
        <StyledContainer>
            <div className="logo">OEE</div>
            <div className="search-box">
                <label>
                    <FiSearch fontSize="1.3rem" color={Colors.normalGray} />
                    <div className="search-form">
                        <input type="search" placeholder="Search here.." />
                    </div>
                </label>
            </div>
            <div className="login">Login</div>
        </StyledContainer>
    )
}

export default HeaderPresenter
