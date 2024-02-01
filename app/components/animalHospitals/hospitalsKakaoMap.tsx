import React, { useState, useEffect } from "react";
import { KakaoMap } from "./kakaoMap";
import Script from "next/script";


type Props = {
  setResultDataHandler: (value: number) => void;
  setIsLoading: any;
}

declare global {
  interface Window {
    kakao: any;
  }
}

export const HospitalsKakaoMap: React.FC<Props> = ({ setResultDataHandler, setIsLoading }) => {

  const [mapState, setMapState] = useState({
    center: {
      lat: 0,
      lng: 0,
    },
    errMas: null,
    isLoading: true
  });
  const [info, setInfo]: any = useState({ content: "" })
  const [markers, setMarkers]: any = useState([])
  const [map, setMap]: any = useState()
  const [searchInputValue, setSearchInputValue] = useState("");
  const [keyword, setKeyword] = useState("");
  const [province, setProvince] = useState('');

  const getLatLng = (): any => {
    return new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log('pos...');
        console.log('pos : ' + position);
        res({ latitude: position.coords.latitude, longitude: position.coords.longitude });
      });
    });
  };

  // https://codesandbox.io/p/sandbox/dazzling-colden-cqyyr3?file=%2Fsrc%2FKakaoMap.js%3A23%2C20
  useEffect(() => {
    const kakaoMapScript = document.createElement('script')
    kakaoMapScript.async = false
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=00686a05b852e4dd7e1d395281714282&libraries=services&autoload=false`
    document.head.appendChild(kakaoMapScript)

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(async () => {
        const container: any = document.getElementById('map');
        let geo: any = await getLatLng();
        console.log('geo : ' + geo);
        const options = {
          center: new window.kakao.maps.LatLng(geo.latitude, geo.longitude),
          level: 5
        };
        const map = new window.kakao.maps.Map(container, options);
        setMap(map);
        console.log(map);

        setMapState((prev)=> ({
          ...prev,
          center: {
              lat: geo.latitude,
              lng: geo.longitude
          }
        }));

        // keyword 임시 셋팅
        setKeyword('동물 병원');
      });
    }
    kakaoMapScript.addEventListener('load', onLoadKakaoAPI);
  }, []);

  const removeMarkers = () => {
    if (!map) return;
    for (let marker of markers) {
        marker.setMap(null);
    }   
    setMarkers([]);
  };

  useEffect(() => {
    if (!map) return
    const ps = new window.kakao.maps.services.Places()

    removeMarkers();
    ps.keywordSearch(`${keyword}`, (data: any, status: any, _pagination: any) => {
      if (status === window.kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new window.kakao.maps.LatLngBounds()
        let markers = [];

        console.log(data)
        for (let i = 0; i < data.length; i++) {
          let place = data[i];
          let marker = new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(place.y, place.x)
          });
          // 마커를 지도에 표시합니다.
          marker.setMap(map);
          
          /**
           * 마커 클릭시 인포 윈도우 설정 - 시작
           */
          let iwContent = `
            <div>
              <span>${place.place_name}</span><br/>
              <span>${place.road_address_name}</span><br/>
              <span>${place.address_name}</span><br/>
              <span>${place.phone}</span><br/>
            </div>
          
          `; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
          let iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

          // 인포윈도우를 생성합니다
          var infowindow = new window.kakao.maps.InfoWindow({
            content: iwContent,
            removable: iwRemoveable
          });

          // 마커에 클릭이벤트를 등록합니다
          window.kakao.maps.event.addListener(marker, 'click', function () {
            // 마커 위에 인포윈도우를 표시합니다
            infowindow.open(map, marker);
          });
          /**
           * 마커 클릭시 인포 윈도우 - 종료
           */

          markers.push(marker);
          bounds.extend(new kakao.maps.LatLng(place.y, place.x))
        }
        setMarkers(markers);

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds)
        setResultDataHandler(data)
      }
    }, {
      radius: 10000,
      location: new window.kakao.maps.LatLng(mapState.center.lat, mapState.center.lng)
    })
  }, [keyword, map, mapState])

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") setKeyword(searchInputValue);
  };

  return (
    <>
      <div id="map" style={{ width: "100%", height: "100%" }}></div>
    </>
  )
}
