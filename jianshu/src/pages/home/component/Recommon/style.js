import styled from 'styled-components'

const Container = styled.div`
  margin-top: 20px;
  .head {
    display: flex;
    justify-content: space-between;
    color: #969696;
    font-size: 14px;
    i {
    }
  }
  .change {
    cursor: pointer;
  }
  .change: hover {
    color: #333;
  }
`

const Item = styled.div`
  width: 100%;
  height: 47px;
  margin-top: 15px;
  .photo {
    height: 100%;
    float: left; 
    margin-right: 10px;
  }
  .nameAndFocus {
    display: flex;
    justify-content: space-between;
    line-height: 23px;
    .name {
      cursor: pointer;
      font-size: 14px;
    }
    .focus {
      font-size: 13px;
      color: #42c02e;
      cursor: pointer;
    }
  }
  .data {
    color: #969696;
    font-size: 12px;
    line-height: 23px;
  }
`

export default {
  Container,
  Item
}