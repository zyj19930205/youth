<template>
  <div style="height: 100%;">
    <baidu-map class="map" :center="{lng: 115.991028, lat: 28.695461}" :zoom="15" :scroll-wheel-zoom="true" :mapStyle="mapStyle">
      <bm-marker :position="{lng: 115.96878, lat: 28.695871}" :dragging="true"  animation="BMAP_ANIMATION_BOUNCE" @click="toAnewUrl('/FirstStep')">
        <bm-label content="起点：江西联通" :labelStyle="{color: 'white', fontSize : '12px',background:'black',border:'none'}" :offset="{width: -35, height: 30}" />
      </bm-marker>
      <bm-marker :position="{lng: 115.944927, lat: 28.680139}" :dragging="true"  animation="BMAP_ANIMATION_BOUNCE" @click="toAnewUrl('/SecondStep')">
        <bm-label content="第一站：梦时代联通营业厅" :labelStyle="{color: 'white', fontSize : '12px',background:'black',border:'none'}" :offset="{width: -35, height: 30}"/>
      </bm-marker>
      <bm-marker :position="{lng: 115.976348, lat: 28.717375}" :dragging="true"  animation="BMAP_ANIMATION_BOUNCE" @click="toAnewUrl('/ThirdStep')">
        <bm-label content="第二站：新城吾悦联通营业厅" :labelStyle="{color: 'white', fontSize : '12px',background:'black',border:'none'}" :offset="{width: -35, height: 30}"/>
      </bm-marker>
      <bm-marker :position="{lng: 115.959472, lat: 28.689173}" :dragging="true"  animation="BMAP_ANIMATION_BOUNCE" @click="toAnewUrl('/FourthStep')">
        <bm-label content="第三站：江西工业职业技术学院" :labelStyle="{color: 'white', fontSize : '12px',background:'black',border:'none'}" :offset="{width: -35, height: 30}"/>
      </bm-marker>
      <bm-marker :position="{lng: 115.958896, lat: 28.692758}" :dragging="true"   animation="BMAP_ANIMATION_BOUNCE" @click="toAnewUrl('/Fifth')">
        <bm-label content="第四站：南昌高新小脚丫幼儿园" :labelStyle="{color: 'white', fontSize : '12px',background:'black',border:'none'}" :offset="{width: -185, height: 5}"/>
      </bm-marker>
      <bm-marker :position="{lng: 115.947274, lat: 28.680398}" :dragging="true"  animation="BMAP_ANIMATION_BOUNCE" @click="toAnewUrl('/FirstStep')">
        <bm-label content="第五站：梦时代广场地铁口" :labelStyle="{color: 'white', fontSize : '12px',background:'black',border:'none'}" :offset="{width: -185, height: 5}"/>
      </bm-marker>
      <bml-curve-line :points="points" :editing="true" @lineupdate="update" :strokeStyle="strokeStyle" :strokeOpacity="strokeOpacity"></bml-curve-line>
      <transition name="bounce">
      <router-view/>
      </transition>
<!--      <PhotoBox></PhotoBox>-->
    </baidu-map>
  </div>
</template>
<script>
import {BmlCurveLine} from 'vue-baidu-map'
import qnwmh1 from '../assets/青年文明号图1.jpg'
import PhotoBox from './PhotoBox'
export default {
  components: {
    BmlCurveLine, PhotoBox
  },
  data () {
    return {
      mapStyle: {
        styleJson: [{
          'featureType': 'land',
          'elementType': 'geometry',
          'stylers': {
            'color': '#242f3eff'
          }
        }, {
          'featureType': 'manmade',
          'elementType': 'geometry',
          'stylers': {
            'color': '#242f3eff'
          }
        }, {
          'featureType': 'water',
          'elementType': 'geometry',
          'stylers': {
            'color': '#17263cff'
          }
        }, {
          'featureType': 'road',
          'elementType': 'geometry.fill',
          'stylers': {
            'color': '#9e7d60ff'
          }
        }, {
          'featureType': 'road',
          'elementType': 'geometry.stroke',
          'stylers': {
            'color': '#554631ff'
          }
        }, {
          'featureType': 'districtlabel',
          'elementType': 'labels.text.fill',
          'stylers': {
            'color': '#d69563ff'
          }
        }, {
          'featureType': 'districtlabel',
          'elementType': 'labels.text.stroke',
          'stylers': {
            'color': '#17263cff',
            'weight': 3
          }
        }, {
          'featureType': 'poilabel',
          'elementType': 'labels.text.fill',
          'stylers': {
            'color': '#d69563ff'
          }
        }, {
          'featureType': 'poilabel',
          'elementType': 'labels.text.stroke',
          'stylers': {
            'color': '#17263cff',
            'weight': 3
          }
        }, {
          'featureType': 'subway',
          'elementType': 'geometry',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'railway',
          'elementType': 'geometry',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'poilabel',
          'elementType': 'labels.icon',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'subwaylabel',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'subwaylabel',
          'elementType': 'labels.icon',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'tertiarywaysign',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'tertiarywaysign',
          'elementType': 'labels.icon',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'provincialwaysign',
          'elementType': 'labels.icon',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'provincialwaysign',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'nationalwaysign',
          'elementType': 'labels.icon',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'nationalwaysign',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'highwaysign',
          'elementType': 'labels.icon',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'highwaysign',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'green',
          'elementType': 'geometry',
          'stylers': {
            'color': '#263b3eff'
          }
        }, {
          'featureType': 'nationalwaysign',
          'elementType': 'labels.text.fill',
          'stylers': {
            'color': '#d0021bff'
          }
        }, {
          'featureType': 'nationalwaysign',
          'elementType': 'labels.text.stroke',
          'stylers': {
            'color': '#ffffffff'
          }
        }, {
          'featureType': 'city',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'on'
          }
        }, {
          'featureType': 'city',
          'elementType': 'labels.icon',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'city',
          'elementType': 'labels.text.fill',
          'stylers': {
            'color': '#d69563ff'
          }
        }, {
          'featureType': 'city',
          'elementType': 'labels.text.stroke',
          'stylers': {
            'color': '#17263cff'
          }
        }, {
          'featureType': 'water',
          'elementType': 'labels.text.fill',
          'stylers': {
            'color': '#d69563ff'
          }
        }, {
          'featureType': 'water',
          'elementType': 'labels.text.stroke',
          'stylers': {
            'color': '#242f3eff'
          }
        }, {
          'featureType': 'local',
          'elementType': 'geometry.fill',
          'stylers': {
            'color': '#38414eff'
          }
        }, {
          'featureType': 'local',
          'elementType': 'geometry.stroke',
          'stylers': {
            'color': '#ffffff00'
          }
        }, {
          'featureType': 'fourlevelway',
          'elementType': 'geometry.fill',
          'stylers': {
            'color': '#38414eff'
          }
        }, {
          'featureType': 'fourlevelway',
          'elementType': 'geometry.stroke',
          'stylers': {
            'color': '#ffffff00'
          }
        }, {
          'featureType': 'tertiaryway',
          'elementType': 'geometry.fill',
          'stylers': {
            'color': '#38414eff'
          }
        }, {
          'featureType': 'tertiaryway',
          'elementType': 'geometry.stroke',
          'stylers': {
            'color': '#ffffff00'
          }
        }, {
          'featureType': 'tertiaryway',
          'elementType': 'labels.text.fill',
          'stylers': {
            'color': '#759879ff'
          }
        }, {
          'featureType': 'fourlevelway',
          'elementType': 'labels.text.fill',
          'stylers': {
            'color': '#759879ff'
          }
        }, {
          'featureType': 'highway',
          'elementType': 'labels.text.fill',
          'stylers': {
            'color': '#759879ff'
          }
        }, {
          'featureType': 'highway',
          'elementType': 'geometry.fill',
          'stylers': {
            'color': '#9e7d60ff'
          }
        }, {
          'featureType': 'highway',
          'elementType': 'geometry.stroke',
          'stylers': {
            'color': '#554631ff'
          }
        }, {
          'featureType': 'provincialway',
          'elementType': 'geometry.fill',
          'stylers': {
            'color': '#9e7d60ff'
          }
        }, {
          'featureType': 'provincialway',
          'elementType': 'geometry.stroke',
          'stylers': {
            'color': '#554631ff'
          }
        }, {
          'featureType': 'tertiaryway',
          'elementType': 'labels.text.stroke',
          'stylers': {
            'color': '#1a2e1cff'
          }
        }, {
          'featureType': 'fourlevelway',
          'elementType': 'labels.text.stroke',
          'stylers': {
            'color': '#1a2e1cff'
          }
        }, {
          'featureType': 'highway',
          'elementType': 'labels.text.stroke',
          'stylers': {
            'color': '#1a2e1cff'
          }
        }, {
          'featureType': 'nationalway',
          'elementType': 'labels.text.stroke',
          'stylers': {
            'color': '#1a2e1cff'
          }
        }, {
          'featureType': 'nationalway',
          'elementType': 'labels.text.fill',
          'stylers': {
            'color': '#759879ff'
          }
        }, {
          'featureType': 'nationalway',
          'elementType': 'geometry.fill',
          'stylers': {
            'color': '#9e7d60ff'
          }
        }, {
          'featureType': 'nationalway',
          'elementType': 'geometry.stroke',
          'stylers': {
            'color': '#554631ff'
          }
        }, {
          'featureType': 'cityhighway',
          'elementType': 'geometry.fill',
          'stylers': {
            'color': '#9e7d60ff'
          }
        }, {
          'featureType': 'cityhighway',
          'elementType': 'geometry.stroke',
          'stylers': {
            'color': '#554631ff'
          }
        }, {
          'featureType': 'arterial',
          'elementType': 'geometry.fill',
          'stylers': {
            'color': '#9e7d60ff'
          }
        }, {
          'featureType': 'arterial',
          'elementType': 'geometry.stroke',
          'stylers': {
            'color': '#554631fa'
          }
        }, {
          'featureType': 'medicallabel',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'medicallabel',
          'elementType': 'labels.icon',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'entertainmentlabel',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'entertainmentlabel',
          'elementType': 'labels.icon',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'estatelabel',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'estatelabel',
          'elementType': 'labels.icon',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'businesstowerlabel',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'businesstowerlabel',
          'elementType': 'labels.icon',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'companylabel',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'companylabel',
          'elementType': 'labels.icon',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'governmentlabel',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'governmentlabel',
          'elementType': 'labels.icon',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'restaurantlabel',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'restaurantlabel',
          'elementType': 'labels.icon',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'hotellabel',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'hotellabel',
          'elementType': 'labels.icon',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'shoppinglabel',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'shoppinglabel',
          'elementType': 'labels.icon',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'lifeservicelabel',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'lifeservicelabel',
          'elementType': 'labels.icon',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'carservicelabel',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'carservicelabel',
          'elementType': 'labels.icon',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'financelabel',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'financelabel',
          'elementType': 'labels.icon',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'otherlabel',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'otherlabel',
          'elementType': 'labels.icon',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'airportlabel',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'on'
          }
        }, {
          'featureType': 'airportlabel',
          'elementType': 'labels.text.fill',
          'stylers': {
            'color': '#d69563ff'
          }
        }, {
          'featureType': 'airportlabel',
          'elementType': 'labels.text.stroke',
          'stylers': {
            'color': '#17263cff'
          }
        }, {
          'featureType': 'airportlabel',
          'elementType': 'labels.icon',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'highway',
          'stylers': {
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '6'
          }
        }, {
          'featureType': 'highway',
          'stylers': {
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '7'
          }
        }, {
          'featureType': 'highway',
          'stylers': {
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '8'
          }
        }, {
          'featureType': 'highway',
          'stylers': {
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '9'
          }
        }, {
          'featureType': 'highway',
          'stylers': {
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '10'
          }
        }, {
          'featureType': 'highway',
          'elementType': 'geometry',
          'stylers': {
            'visibility': 'off',
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '6'
          }
        }, {
          'featureType': 'highway',
          'elementType': 'geometry',
          'stylers': {
            'visibility': 'off',
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '7'
          }
        }, {
          'featureType': 'highway',
          'elementType': 'geometry',
          'stylers': {
            'visibility': 'off',
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '8'
          }
        }, {
          'featureType': 'highway',
          'elementType': 'geometry',
          'stylers': {
            'visibility': 'off',
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '9'
          }
        }, {
          'featureType': 'highway',
          'elementType': 'geometry',
          'stylers': {
            'visibility': 'off',
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '10'
          }
        }, {
          'featureType': 'nationalway',
          'stylers': {
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '6'
          }
        }, {
          'featureType': 'nationalway',
          'stylers': {
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '7'
          }
        }, {
          'featureType': 'nationalway',
          'stylers': {
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '8'
          }
        }, {
          'featureType': 'nationalway',
          'stylers': {
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '9'
          }
        }, {
          'featureType': 'nationalway',
          'stylers': {
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '10'
          }
        }, {
          'featureType': 'nationalway',
          'elementType': 'geometry',
          'stylers': {
            'visibility': 'off',
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '6'
          }
        }, {
          'featureType': 'nationalway',
          'elementType': 'geometry',
          'stylers': {
            'visibility': 'off',
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '7'
          }
        }, {
          'featureType': 'nationalway',
          'elementType': 'geometry',
          'stylers': {
            'visibility': 'off',
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '8'
          }
        }, {
          'featureType': 'nationalway',
          'elementType': 'geometry',
          'stylers': {
            'visibility': 'off',
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '9'
          }
        }, {
          'featureType': 'nationalway',
          'elementType': 'geometry',
          'stylers': {
            'visibility': 'off',
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '10'
          }
        }, {
          'featureType': 'nationalway',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off',
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '6'
          }
        }, {
          'featureType': 'nationalway',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off',
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '7'
          }
        }, {
          'featureType': 'nationalway',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off',
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '8'
          }
        }, {
          'featureType': 'nationalway',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off',
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '9'
          }
        }, {
          'featureType': 'nationalway',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off',
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '10'
          }
        }, {
          'featureType': 'highway',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off',
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '6'
          }
        }, {
          'featureType': 'highway',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off',
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '7'
          }
        }, {
          'featureType': 'highway',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off',
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '8'
          }
        }, {
          'featureType': 'highway',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off',
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '9'
          }
        }, {
          'featureType': 'highway',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off',
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '10'
          }
        }, {
          'featureType': 'provincialway',
          'stylers': {
            'curZoomRegionId': '0',
            'curZoomRegion': '8,9',
            'level': '8'
          }
        }, {
          'featureType': 'provincialway',
          'stylers': {
            'curZoomRegionId': '0',
            'curZoomRegion': '8,9',
            'level': '9'
          }
        }, {
          'featureType': 'provincialway',
          'elementType': 'geometry',
          'stylers': {
            'visibility': 'off',
            'curZoomRegionId': '0',
            'curZoomRegion': '8,9',
            'level': '8'
          }
        }, {
          'featureType': 'provincialway',
          'elementType': 'geometry',
          'stylers': {
            'visibility': 'off',
            'curZoomRegionId': '0',
            'curZoomRegion': '8,9',
            'level': '9'
          }
        }, {
          'featureType': 'provincialway',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off',
            'curZoomRegionId': '0',
            'curZoomRegion': '8,9',
            'level': '8'
          }
        }, {
          'featureType': 'provincialway',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off',
            'curZoomRegionId': '0',
            'curZoomRegion': '8,9',
            'level': '9'
          }
        }, {
          'featureType': 'cityhighway',
          'stylers': {
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '6'
          }
        }, {
          'featureType': 'cityhighway',
          'stylers': {
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '7'
          }
        }, {
          'featureType': 'cityhighway',
          'stylers': {
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '8'
          }
        }, {
          'featureType': 'cityhighway',
          'stylers': {
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '9'
          }
        }, {
          'featureType': 'cityhighway',
          'stylers': {
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '10'
          }
        }, {
          'featureType': 'cityhighway',
          'elementType': 'geometry',
          'stylers': {
            'visibility': 'off',
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '6'
          }
        }, {
          'featureType': 'cityhighway',
          'elementType': 'geometry',
          'stylers': {
            'visibility': 'off',
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '7'
          }
        }, {
          'featureType': 'cityhighway',
          'elementType': 'geometry',
          'stylers': {
            'visibility': 'off',
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '8'
          }
        }, {
          'featureType': 'cityhighway',
          'elementType': 'geometry',
          'stylers': {
            'visibility': 'off',
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '9'
          }
        }, {
          'featureType': 'cityhighway',
          'elementType': 'geometry',
          'stylers': {
            'visibility': 'off',
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '10'
          }
        }, {
          'featureType': 'cityhighway',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off',
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '6'
          }
        }, {
          'featureType': 'cityhighway',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off',
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '7'
          }
        }, {
          'featureType': 'cityhighway',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off',
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '8'
          }
        }, {
          'featureType': 'cityhighway',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off',
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '9'
          }
        }, {
          'featureType': 'cityhighway',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off',
            'curZoomRegionId': '0',
            'curZoomRegion': '6,10',
            'level': '10'
          }
        }, {
          'featureType': 'arterial',
          'stylers': {
            'curZoomRegionId': '0',
            'curZoomRegion': '9,10',
            'level': '9'
          }
        }, {
          'featureType': 'arterial',
          'stylers': {
            'curZoomRegionId': '0',
            'curZoomRegion': '9,10',
            'level': '10'
          }
        }, {
          'featureType': 'arterial',
          'elementType': 'geometry',
          'stylers': {
            'visibility': 'off',
            'curZoomRegionId': '0',
            'curZoomRegion': '9,10',
            'level': '9'
          }
        }, {
          'featureType': 'arterial',
          'elementType': 'geometry',
          'stylers': {
            'visibility': 'off',
            'curZoomRegionId': '0',
            'curZoomRegion': '9,10',
            'level': '10'
          }
        }, {
          'featureType': 'arterial',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off',
            'curZoomRegionId': '0',
            'curZoomRegion': '9,10',
            'level': '9'
          }
        }, {
          'featureType': 'arterial',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off',
            'curZoomRegionId': '0',
            'curZoomRegion': '9,10',
            'level': '10'
          }
        }, {
          'featureType': 'building',
          'elementType': 'geometry.topfill',
          'stylers': {
            'color': '#2a3341ff'
          }
        }, {
          'featureType': 'building',
          'elementType': 'geometry.sidefill',
          'stylers': {
            'color': '#313b4cff'
          }
        }, {
          'featureType': 'building',
          'elementType': 'geometry.stroke',
          'stylers': {
            'color': '#1a212eff'
          }
        }, {
          'featureType': 'road',
          'elementType': 'labels.text.fill',
          'stylers': {
            'color': '#759879ff'
          }
        }, {
          'featureType': 'road',
          'elementType': 'labels.text.stroke',
          'stylers': {
            'color': '#1a2e1cff'
          }
        }, {
          'featureType': 'provincialway',
          'elementType': 'labels.text.fill',
          'stylers': {
            'color': '#759879ff'
          }
        }, {
          'featureType': 'cityhighway',
          'elementType': 'labels.text.fill',
          'stylers': {
            'color': '#759879ff'
          }
        }, {
          'featureType': 'arterial',
          'elementType': 'labels.text.fill',
          'stylers': {
            'color': '#759879ff'
          }
        }, {
          'featureType': 'provincialway',
          'elementType': 'labels.text.stroke',
          'stylers': {
            'color': '#1a2e1cff'
          }
        }, {
          'featureType': 'cityhighway',
          'elementType': 'labels.text.stroke',
          'stylers': {
            'color': '#1a2e1cff'
          }
        }, {
          'featureType': 'arterial',
          'elementType': 'labels.text.stroke',
          'stylers': {
            'color': '#1a2e1cff'
          }
        }, {
          'featureType': 'local',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'manmade',
          'elementType': 'labels.text.fill',
          'stylers': {
            'color': '#d69563ff'
          }
        }, {
          'featureType': 'manmade',
          'elementType': 'labels.text.stroke',
          'stylers': {
            'color': '#17263cff'
          }
        }, {
          'featureType': 'subwaystation',
          'elementType': 'geometry',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'transportationlabel',
          'elementType': 'labels.icon',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'transportationlabel',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off'
          }
        }, {
          'featureType': 'estate',
          'elementType': 'geometry',
          'stylers': {
            'color': '#2a3341ff'
          }
        }]
      },
      points: [
        {lng: 115.96878, lat: 28.695871},
        {lng: 115.944927, lat: 28.680139},
        {lng: 115.976348, lat: 28.717375},
        {lng: 115.959472, lat: 28.689173},
        {lng: 115.958896, lat: 28.692758},
        {lng: 115.958896, lat: 28.692758},
        {lng: 115.947274, lat: 28.680398}
      ],
      hotData: [
        {lng: 115.96878, lat: 28.695871, count: 50},
        {lng: 115.944927, lat: 28.680139, count: 51},
        {lng: 115.976348, lat: 28.717375, count: 15}
      ],
      show: true,
      qnwmh1: qnwmh1,
      strokeStyle: 'dashed',
      strokeOpacity: 0.9,
      transitionName: '',
      routerList:['FirstStep','SecondStep','ThirdStep','FourthStep','FifthStep']
    }
  },
  methods: {
    update (e) {
      this.points = e.target.cornerPoints
    },
    infoWindowClose () {
      this.show = false
    },
    infoWindowOpen () {
      this.show = true
    },
    toAnewUrl (step) {
      // this.$router.push({path: '/FirstStep'})
      this.$router.push({path: step})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .map {
    width: 100%;
    height: 100%;
  }
  .content{
    margin-top: 10px;
    text-align: center;
  }
  .content img{
    width: 485px;
    height: 365px;
  }
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

</style>
