import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";






const mapStyle = styled.div`
    width: 100vw;
    height: 77%;
    overflow: hidden;
    
`

const currentLocationBtnStyle = styled.button`
    position: relative;
    width: 60px;
    height: 60px;
    top: 20px;
    left: 30px;
    overflow: hidden;

`



export {};
declare global {
  interface Window {
    kakao: any ;
    mapState: any;
  }
}

const { kakao } = window;


export const KakaoMap = () => {
    const [ mapState, setMapState ] = useState({
        center: {
            lat: 37.03405959978135, 
            lng: 127.07658315152395,
        },
        errMas: null,
        isLoading: true
    });
    const [searchInput, setSearchInput ] = useState(''); 

    
    console.log(mapState)

    useEffect(()=>{
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(mapState.center.lat, mapState.center.lng),
            level: 3
        };
        const map = new kakao.maps.Map(container, options);
        console.log(map)
    }, [ mapState ]);



    const getCurrentCoordinate = async () => {
        console.log("getCurrentCoordinate 함수 실행!!!");
        return new Promise((res, rej) => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
              console.log(position);
              const lat = position.coords.latitude; // 위도
              const lon = position.coords.longitude; // 경도
      
              const coordinate = new kakao.maps.LatLng(lat, lon);
              res(coordinate);
              setMapState((prev)=> ({
                                ...prev,
                                center: {
                                    lat: lat,
                                    lng: lon
                                }
                              }));
            });
          } else {
            rej(new Error("현재 위치를 불러올 수 없습니다."));
          }
        });
      };

    
    // const getCurrentLocation = ():void  => {
    //     // HTML5의 geolocation으로 사용할 수 있는지 확인합니다

    //     navigator.geolocation.getCurrentPosition(function(position) {
    //         alert(position.coords.latitude + ' ' + position.coords.longitude);
    //       })


    //     if(navigator.geolocation){
    //         console.log(navigator)
    //         navigator.geolocation.getCurrentPosition(function(position) {
    //             var lat = position.coords.latitude, // 위도
    //                 lon = position.coords.longitude; // 경도
            
    //             // var locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
    //             // var message = '<div style="padding:5px;">현위치</div>'; // 인포윈도우에 표시될 내용입니다
    
    //             // 마커와 인포윈도우를 표시합니다
    //             // displayMarker(locPosition, message);
    //             console.log(lat);
    //             console.log(lon);
    //             setMapState((prev)=> ({
    //                 ...prev,
    //                 center: {
    //                     lat: lat,
    //                     lng: lon
    //                 }
    //               }));
    //         });
    //     }
    // };

    // function locationLoadSuccess(pos?: any){
    //     const container = document.getElementById('map');
    //     const options = {
    //         center: new kakao.maps.LatLng(mapState.center.lat, mapState.center.lng),
    //         level: 3
    //     };
    //     let map = new kakao.maps.Map(container, options);
    //     var currentPos = new kakao.maps.LatLng(pos.coords.latitude,pos.coords.longitude);
    
    //     // 지도 이동(기존 위치와 가깝다면 부드럽게 이동)
    //     map.panTo(currentPos);
    

    //     // 마커 생성
    //     var marker = new kakao.maps.Marker({
    //         position: currentPos
    //     });
    
    //     // 기존에 마커가 있다면 제거
    //     marker.setMap(null);
    //     marker.setMap(map);
    // };
    
    // function locationLoadError(){
    //     alert('위치 정보를 가져오는데 실패했습니다.');
    // };
    
    // // 위치 가져오기 버튼 클릭시
    // function getCurrentPosBtn(){
    //     navigator.geolocation.getCurrentPosition(locationLoadSuccess,locationLoadError);
    // };



    return (
        <>
            <div  id="map" style={{width:"100%", height:"90%", position: "absolute",zIndex: 1}}>
                <button className="current_location_btn" style={{ 
                    position: "relative", width: "80px",
                    height: "60px", top: "20px", left: "20px", zIndex: 10 }} 
                    onClick= { getCurrentCoordinate }
                    > 현재 위치 </button>
            </div>
        </>
    )
}