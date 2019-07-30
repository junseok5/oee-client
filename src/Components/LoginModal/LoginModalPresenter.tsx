import React from "react"
import styled from "styled-components"
import { FiX } from "react-icons/fi"
import { FaFacebookSquare, FaGoogle } from "react-icons/fa"
import Colors from "../../Constants/Colors"

const StyledContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    width: 100%;
    height: 100vh;

    .dark-box {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
    }
    .main {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .login-box {
            width: 340px;
            height: 280px;
            z-index: 22;
            padding: 1em;
            border-radius: 4px;
            background: #f6f6f6;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .login-header {
                display: flex;
                justify-content: space-between;

                .title {
                    font-size: 1.2em;
                    font-weight: bold;
                }

                .close {
                    cursor: pointer;
                }
            }

            .login-content {
                .social-login {
                    padding: 0.7em 1em;
                    margin-bottom: 1em;
                    color: white;
                    border-radius: 4px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    user-select: none;
                    cursor: pointer;

                    .icon {
                        margin-right: 0.3em;
                        display: flex;
                        align-items: center;
                        font-size: 1.2em;
                    }

                    &.facebook {
                        background: #1971c2;
                    }

                    &.google {
                        background: #c92a2a;
                    }
                }
            }

            .login-bottom {
                padding-top: 0.8em;
                display: flex;
                font-size: 0.8em;
                color: ${Colors.normalGray};
                border-top: 1px solid ${Colors.lightGray};
                justify-content: flex-end;
                user-select: none;

                .terms {
                    margin-right: 1em;
                    cursor: pointer;
                }

                .privacy {
                    cursor: pointer;
                }
            }
        }
    }
`

interface IProps {
    setLoginModal: () => {
        type: string
        val: boolean
    }
}

const LoginModalPresenter: React.FC<IProps> = ({ setLoginModal }) => {
    return (
        <StyledContainer>
            <div className="dark-box" onClick={setLoginModal} />
            <div className="main">
                <div className="login-box">
                    <div className="login-header">
                        <div className="title">Login</div>
                        <div className="close" onClick={setLoginModal}>
                            <FiX fontSize={"1.5em"} />
                        </div>
                    </div>
                    <div className="login-content">
                        <div className="social-login facebook">
                            <div className="icon">
                                <FaFacebookSquare />
                            </div>
                            <div className="title">Connect with facebook</div>
                        </div>
                        <div className="social-login google">
                            <div className="icon">
                                <FaGoogle />
                            </div>
                            <div className="title">Connect with google</div>
                        </div>
                    </div>
                    <div className="login-bottom">
                        <div className="terms">Terms of Service</div>
                        <div className="privacy">Privacy Policy</div>
                    </div>
                </div>
            </div>
        </StyledContainer>
    )
}

export default LoginModalPresenter
