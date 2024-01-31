// _document.js 파일은 각 페이지가 초기화될 때,
// HTML 페이지 중 Document 부분에 대한 오버 라이딩을 제공해 줍니다.
// 특히, <html>과 <body> 태그에 대한 오버라이드를 제공해 줘서 
// 원하는 방식으로 페이지를 제어할 수 있게 해 줍니다.
//_document.js 파일은 _app.js 파일과 함께 /pages 폴더 밑에 위치해 있는데, 
// Next.js의 기본 세팅에는 이 파일이 보이지 않습니다.
// 그래서 /pages 폴더 밑에 이 파일이 보이지 않으면 직접 _document.js 파일을 만들면 됩니다.
// ➡️추가사항
//  eslintrc.json파일에 rule을 추가 
//  "rules": {
//  "@next/next/no-document-import-in-page": "off"
//  }



import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
        {/* <Script 
            defer
            type="text/javascript" 
            strategy="beforeInteractive" 
            src="//dapi.kakao.com/v2/maps/sdk.js?appkey=00686a05b852e4dd7e1d395281714282&libraries=services&autoload=false"
        /> */}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}