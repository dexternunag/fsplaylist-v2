import styled from 'styled-components'

export const SearchNav = styled.div`
  padding: 30px 5% 0;
`

export const SearhInputHolder = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-right 25px;

  form {
    width: 35%
  }

  .actions-wrapper {
    button {
      margin-left: 15px;
      background: #303030;
      color: #fff;
      border: none;
      padding: 5px 20px;
      border-radius: 25px;
      cursor: pointer;
      outline: none;

      &:hover {
        background: #353535;
      }

      &.active {
        background: #ff3f34;
        cursor: default;
      }
    }
  }
`

export const SearchInput = styled.input`
  width: 100%;
  max-width: 360px;
  padding: 7px 15px;
  color: #ecf0f1;
  background-color: #303030;
  border-radius: 50px;
  border: none;
  box-shadow: none;
  outline: none;
`