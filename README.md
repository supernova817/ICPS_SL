# ICPS_SL

## Install

~ npm install

  - root 주소에서 npm install
  - npm audit fix / npm audit 뜨면 해주면 됌
  - 

~ cd client

 - client 디렉토리 이동
 - 

~ cd client

 - clinet dir 에서 npm instlal

\client ~ npm install



server/config 에 dev.js 파일하나생성

dev.js 파일 내용 =>

module.exports = {

 mongoURI:

  'mongodb+srv://아이디:패스워드@cluster0.ssxlb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',

}

**아이디, 패스워드** 부분 몽고디비 클라우드 내에 만든 아이디 패스워드로



## MongoDB 연결

https://www.youtube.com/watch?v=Fin9jBNIaxk

![network access](https://user-images.githubusercontent.com/58262251/132633507-1e360189-56b0-40ac-8219-eb1de76c41d7.PNG)

Network Access -> ADD IP ADDRESS



![IP access](https://user-images.githubusercontent.com/58262251/132633515-26ec3a1f-2765-43ea-9149-689833f0d529.PNG)

ADD CURRENT IP ADDRESS : 현재  IP 허용

ALLOW ACCESS FROM ANYWHERE : 모든 IP 허용



## Run

home 디렉토리에서 

~ npm run dev 

