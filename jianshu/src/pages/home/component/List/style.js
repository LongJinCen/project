import styled from 'styled-components'

const ListItem = styled.div`
  width: 100%;
  padding-top: 15px;
  padding-bottom: 20px;
  height: 126px;
  padding: 15px 0px 20px 0px;
  margin-bottom: 15px;
  border-bottom: 1px solid #f0f0f0;
  .img {
    float: right;
    width: 25%;
    height: 100%;
  }
`

const ListInfo = styled.div`
  width: 75%;
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  .title{
    color: #333;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
    cursor: pointer;
  }
  .title: hover {
    text-decoration: underline;
  }
  .content {
    color: #999;
    line-height: 24px;
    font-size: 13px;
    overfolw: hidden;
    text-overflow: clip;
  }
  .footer {
    color: #b4b4b4;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    .author {
      margin-right: 10px;
      cursor: pointer;
    }
    .author:hover {
      color: #333;
    }
    .comment {
      margin-right: 10px;
      cursor: pointer;
    }
    .comment:hover {
      color: #333;
    }
    .love {
      margin-right: 10px;
    }
  }
`

export default {
  ListItem,
  ListInfo
}