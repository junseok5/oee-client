import React from "react"
import styled from "styled-components"
import Colors from "../../Constants/Colors";

const StyledContainer = styled.div`
    height: calc(100vh - 4em);
    display: flex;
    justify-content: center;
    align-items: center;

    .profile {
        .user-info {
            display: flex;
            align-items: center;

            .profile-photo {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                overflow: hidden;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .profile-name {
                font-size: 1.3em;
                margin-left: 1em;
            }
        }

        .u-list {
            margin-top: 1em;

            .list {
                padding: 0.8em 0.2em;
                border-bottom: 1px solid ${Colors.lightGray};
            }
        }
    }
`

const ProfilePresenter: React.FC = () => {
    return (
        <StyledContainer>
            <div className="profile">
                <div className="user-info">
                    <div className="profile-photo">
                        <img
                            src={
                                "https://t4.ftcdn.net/jpg/00/64/67/27/240_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg"
                            }
                            draggable={false}
                        />
                    </div>
                    <div className="profile-name">Junseok Oh</div>
                </div>
                <div className="u-list">
                    <div className="list">@Contact</div>
                    <div className="list">Terms of Service</div>
                    <div className="list">Privacy Policy</div>
                </div>
            </div>
        </StyledContainer>
    )
}

export default ProfilePresenter
