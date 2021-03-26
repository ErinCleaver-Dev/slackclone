import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
function Header() {
    return (
        <Container>
            <Main>
                <AccessTimeIcon />
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder="Search... "/>
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon />
            </Main>
            <UserContainer>
                <Name>
                    Erin Cleaver
                </Name>
                <UserImage>
                    <img src="https://i.imgur.com/6VBx3io.png"/>
                </UserImage>
            </UserContainer>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #2C092E;
    color: white;
`
const Main = styled.div`
    display: flex;
    align-items: right;
`
const UserContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 16px;
`

const SearchContainer = styled.div`
    min-width: 400px;
`
const Search = styled.div`
    box-shadow: inset 0 0 0 1px rgb(104 74 104);
    width: 100%;
    border-radius: 6px;
    display: flex;
    align-items: center;
    input {
        background-color: transparent;
        border: none;
        padding: 4px 8px;
        color: white;
    }

    input:focus {
        outline: none;
    }
`

const Name = styled.div`
    padding-right: 16px;
`

const UserImage = styled.div`
    width: 28px;
    height: 28px;
    border: 2px soild white;

    img {
        width: 100%;
    }
`
