import React from "react"
import styled from "styled-components"
import { FiSearch } from "react-icons/fi"
import Colors from "../../Constants/Colors"

const StyledContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3em;
    padding-left: 1em;
    padding-right: 1em;
    background: white;
    border-bottom: 1px solid ${Colors.border};
    display: flex;
    align-items: center;

    .search-icon {
        margin-right: 1em;
        font-size: 1.5em;
        color: ${Colors.normalGray};
        display: flex;
        align-items: center;
    }

    .search-input {
        width: 100%;

        input {
            width: 100%;
            font-size: 1.05em;
        }
    }
`

const SearchMobilePresenter: React.FC = () => {
    return (
        <StyledContainer>
            <div className="search-icon">
                <FiSearch />
            </div>
            <div className="search-input">
                <input type="search" placeholder="Search here.." />
            </div>
        </StyledContainer>
    )
}

export default SearchMobilePresenter
