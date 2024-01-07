import React from "react";
import axios from 'axios';






// export const getBlogAPI = async (url?: string, type?: string, keyword?: string ) => {
//     try{

//         const apiKey = '3a9cbf1cdba94e3b81e06ad290482d8e';
//         // const endpoint = 'https://newsapi.org/v2/everything';
//         const endpoint = '';
        
//         // API 요청에 필요한 매개변수 설정
//         const params = {
//           q: 'dog',
//           apiKey: apiKey,
//         };
        
//         // axios를 사용하여 API 요청 보내기
//         const response = await axios.get(endpoint, { params });
//         return response.data.articles
//           // .then((response: any)=> {
//           //   // API 응답에서 원하는 정보 추출
//           //   const articles = response.data;
//           //   // articles.forEach((article:any) => {
//           //   //   console.log(`${article.title} - ${article.url}`);
//           //   // });
//           //   console.log(articles)
//           //   return response.data
//           // })
//           // .catch((error: any) => {
//           //   console.error('API 요청 중 오류 발생:', error.message);
//           // });


//     } catch( error ){
//         console.log(error);
//     }
// };