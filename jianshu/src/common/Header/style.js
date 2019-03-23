import styled from 'styled-components'
import logo from '../../static/logo.png'

export const DivHeader = styled.div`
  width: 1519px;
  height: 55px;
  margin: 0px auto;
  border-bottom: 1px solid #F0F0F0;
  position: relative;
`

export const DivLogo = styled.div`
  width: 100px;
  height: 100%;
  position: absolute;
  left: 40px;
  background-image: url(${logo});
  background-size: contain;
  cursor: pointer;
`

export const Nav = styled.div`
  margin: 0 auto;
  width: 945px;
  height: 56px;
`

export const NavItem = styled.span`
  line-height: 56px;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  &.left {
    float: left;
    width: 120px;
    color: #333;
    font-size: 17px;
    display: flex;
  }
  &.right {
    float: right;
    width: 70px;
    font-size: 17px;
    color: rgb(150,150,150);
    .iconfont {
      font-size: 20px;
    }
  }
  &.active {
    color: #ea6f5a;
  }
  &.homepage {
    .iconfont {
      font-size: 30px;
    }
  }
`

export const SearchContainer = styled.div`
  float: left;
  position: relative;
  .searchIcon {
    position: absolute;
    right: 5px;
    top: 13px;
    width: 25px;
    height: 25px;
    border-radius: 20px;
    text-align: center;
    line-height: 25px;
  }
  .focusInput {
    width: 320px;
  }
  .focusIcon {
    background-color: rgb(150,150,150);
    color: #FFF;
  }
`

export const Search = styled.input.attrs({
  placeholder: '搜索'
})`
  transition: all .2s;
  width: 200px;
  height: 38px;
  margin-top: 8px;
  font-size: 14px;
  border: 0px solid #eee;
  border-radius: 40px;
  background-color: #eee;
  outline: none;
  box-sizing: border-box;
  padding: 0px 30px 0px 20px;
  color: rgb(51,51,51);
`

export const SearchInfo = styled.div`
  position: absolute;
  top: 56px;
  width: 230px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  border-radius: 4px;
  padding: 20px;
`

export const SearchHot = styled.div`
  color: #969696;
  font-size: 14px;
  display: inline-block;
  float: left;
`

export const Change = styled.div`
  display: inline-block;
  color: #969696;
  float: right;
  font-size: 13px;
  :hover {
    color: #333;
    cursor: pointer;
  }
  .rotateIcon {
    margin-right: 2px;
    font-size: 12px;
    transition: all 0.2s ease;
  }
`

export const Addtion = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  width: 250px;
  line-height: 56px;
` 

export const InfoTag = styled.div`
  font-size: 12px;
  color: #787878;
  display: inline-block;
  border: 1px solid #ddd;
  padding: 2px 6px;
  cursor: pointer;
  margin: 7px;
`

export const Button = styled.button`
  height: 38px;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  &.login {
    width: 80px;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid rgba(236, 97, 73, 0.7);
    font-size: 15px;
    font-weight: 400;
    color: rgba(236, 97, 73, 0.7);
  }
  &.write {
    width: 100px;
    background-color: rgb(234, 111, 90);
    border: 1px solid rgba(236, 97, 73, 0.7);
    margin-left: 20px;
    font-size: 15px;
    font-weight: 400;
    color: rgb(255,255,255);
  }
`