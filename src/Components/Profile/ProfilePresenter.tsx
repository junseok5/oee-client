import React from "react"
import styled from "styled-components"
import Colors from "../../Constants/Colors"

const StyledContainer = styled.div`
    height: calc(100vh - 4em);
    padding-top: 4em;
    display: flex;
    justify-content: center;

    .profile {
        width: 320px;

        .user-info {
            padding-left: 1em;
            padding-right: 1em;
            display: flex;
            align-items: center;
            justify-content: center;

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

            .logout {
                color: ${Colors.lightGray};
                text-decoration: underline;
                font-size: 0.9em;
                display: flex;
                flex: 1;
                justify-content: flex-end;

                span {
                    cursor: pointer;
                }
            }
        }

        .u-list {
            margin-top: 1em;
            font-size: 1.1em;

            .list {
                padding: 0.8em 0.2em;
                border-bottom: 1px solid ${Colors.lightGray};

                &.em {
                    color: #1266ff;
                }
            }
        }
    }
`

interface IProps {
    profile: {
        _id: string
        email: string
        displayName: string
        thumbnail: string
    }
    onLogout: () => void
}

const ProfilePresenter: React.FC<IProps> = ({ profile, onLogout }) => {
    return (
        <StyledContainer>
            <div className="profile">
                <div className="user-info">
                    <div className="profile-photo">
                        <img src={profile.thumbnail} draggable={false} />
                    </div>
                    <div className="profile-name">{profile.displayName}</div>
                    <div className="logout">
                        <span onClick={onLogout}>Logout</span>
                    </div>
                </div>
                <div className="u-list">
                    <div className="list em">{profile.email}</div>
                    <div className="list">@Contact</div>
                    <div className="list">Terms of Service</div>
                    <div className="list">Privacy Policy</div>
                </div>
            </div>
        </StyledContainer>
    )
}

export default ProfilePresenter
