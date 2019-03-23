import styled from "styled-components";

const Container = styled.div`
  width: 940px;
  margin: 0px auto;
  margin-top: 30px;
  padding: 10px;
`
const LeftContainer = styled.div`
  width: 625px;
  float: left;
  height: 100%;
  .img {
    width: 100%;
  }
  .hr {
    border-top: 1px solid #f0f0f0;    
    margin: 20px 0px;
  }
`

const RightContainer = styled.div`
  width: 280px;
  float: right;
  height: 100%;
`

const ReadMore = styled.button`
  height: 40px;
  width: 100%;
  border-radius: 20px;
  cursor: pointer;
  background-color: #a5a5a5;
  border 0px;
  color: #fff;
  margin-top:30px;
  margin-bottom: 60px;
  outline: 0px;
`
export default {
  Container,
  LeftContainer,
  RightContainer,
  ReadMore,
}