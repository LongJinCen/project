import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  background-color: #f1f1f1;
  height: 1000px;
  img {
    position: absolute;
  }
`

const Center = styled.div`
  width: 300px;
  background-color:#fff;
  border-radius:4px;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
  padding: 50px 50px;
  position: absolute;
  top: 100px;
  left: 560px;
  .loginAndRegister {
    height: 40px;
    font-size: 18px;
    font-weight: 700;
    color: #969696;
    display: flex;
    justify-content: space-around;
    width: 50%;
    margin: 0 auto;
    line-height: 40px;
    margin-bottom: 50px;
    .default: hover {
      border-bottom: 2px solid  #ea6f5a;
      cursor: pointer;
    }
  }
  .active {
    color: #ea6f5a;
    border-bottom: 2px solid  #ea6f5a;
  }
  .input {
    outline: 0px;
    border: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(181, 181, 181, 0.1);
    padding-left: 30px;
  }
  .icon {
    position: absolute;
    margin: 0 10px;
  }
  .login {
    border-bottom: none;
    border-radius:4px 4px 0 0;
    height: 50px;
    margin-bottom: 0px;
    outline: 0px;
    border: 1px solid #c8c8c8;
    background-color: rgba(181, 181, 181, 0.1);
    width: 100%;
    font-size: 14px;
    display: flex;
    align-items: center;
  }
  .remember {
    display: flex;
    padding: 15px;
    color: #969696;
    justify-content: space-between; 
  }
  .question {
    font-size: 14px;
  }
  .question:hover {
    cursor: pointer;
    color: #333;
  }
  .registerDeclare {
    text-align: center;
    color: #969696;
    font-size: 12px;
    line-height: 20px;
    padding: 20px 30px;
  }
  .registerDeclare a {
    color: #3194d0;
    cursor: pointer;
    text-decoration: none;
  }
`
const Button = styled.div`
  background-color: #3194d0;
  margin-top: 20px;
  padding: 9px 18px;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  color: #fff;
  cursor: pointer;
  outline: none;
  height: 26px;
  line-height: 26px;
  text-align: center;
`

const SocialAccount = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0px;
  color: #b5b5b5;
  font-size: 12px;
  hr {
    margin: 0px;
    border: 0px;
    height: 1px;
    background-color: #b5b5b5;
    width: 80px;
  }
`

const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 50px;
  .otherAccount {
    font-size: 30px;
    cursor: pointer;
  }
`
const RegisterButton = styled.div`
  background-color: #42c02e;
  margin-top: 20px;
  padding: 9px 18px;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  color: #fff;
  cursor: pointer;
  outline: none;
  height: 26px;
  line-height: 26px;
  text-align: center;
`
export default {
  Container,
  Button,
  SocialAccount,
  Icons,
  Center,
  RegisterButton
}