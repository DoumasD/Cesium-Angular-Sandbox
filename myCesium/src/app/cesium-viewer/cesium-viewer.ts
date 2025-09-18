import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as Cesium from 'cesium';

@Component({
  selector: 'app-cesium-viewer',
  imports: [],
  templateUrl: './cesium-viewer.html',
  styleUrl: './cesium-viewer.css'
})
export class CesiumViewer implements OnInit, AfterViewInit{
 

  ngOnInit(): void {

  const viewer = new Cesium.Viewer(
          "cesiumContainer",
          {
            terrain: Cesium.Terrain.fromWorldTerrain(),
            targetFrameRate: 240.0,
            useBrowserRecommendedResolution : false,
            timeline: false,
            animation: false 
          }
  );
  viewer.cesiumWidget.creditContainer.parentNode?.removeChild(viewer.cesiumWidget.creditContainer);
  viewer.camera.flyTo(
          {
            destination: Cesium.Cartesian3.fromDegrees(-91.6697,41.9828,10000), // Longitude, Latitude, Height in meters
          }
  );

 
  }

  ngAfterViewInit(): void {
  }
}
