import React from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

import logo from "./logo.svg";
import "./App.css";

function App() {
  var camera, scene, renderer;
  var pointLight;
  var mesh;
  init();
  render();
  function init() {
    new OBJLoader().load(
      require("./assets/3.obj"),
      object => {
        // console.log(object);
        object.traverse(function(child) {
          console.log(child);
          if (child instanceof THREE.Mesh) {
            // 为模型赋予材质
            child.material = new THREE.MeshNormalMaterial();
          }
        });
        scene.add(object);
      },
      xhr => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      error => {
        console.log("Error! ", error);
      }
    );

    // camera
    camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      1,
      2000
    );
    camera.position.z = 600;
    // scene
    scene = new THREE.Scene();

    var texture1 = new THREE.TextureLoader().load(require("./assets/px.jpeg"));
    var texture2 = new THREE.TextureLoader().load(require("./assets/py.jpeg"));
    var texture3 = new THREE.TextureLoader().load(require("./assets/pz.jpeg"));

    var geometry = new THREE.BoxBufferGeometry(400, 200, 200);

    mesh = new THREE.Mesh(geometry, [
      new THREE.MeshStandardMaterial({
        map: texture1
      }),
      new THREE.MeshStandardMaterial({
        map: texture2
      }),
      new THREE.MeshStandardMaterial({
        map: texture1
      }),
      new THREE.MeshStandardMaterial({
        map: texture2
      }),
      new THREE.MeshStandardMaterial({
        map: texture3
      }),
      new THREE.MeshStandardMaterial({
        map: texture2
      })
    ]);
    // scene.add(mesh);

    // light
    scene.add(new THREE.AmbientLight(0x606060));
    var directionalLight = new THREE.DirectionalLight(
      /*Math.random() * 0xffffff*/ 0xeeeeee
    );
    directionalLight.position.set(0.2, 0.21, 0.2);
    directionalLight.position.normalize();
    scene.add(directionalLight);

    pointLight = new THREE.PointLight(0x999999, 0.6);
    scene.add(pointLight);

    // renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    //
    window.addEventListener("resize", onWindowResize, false);

    var controls = new OrbitControls(camera, renderer.domElement);
  }
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  function render() {
    requestAnimationFrame(render);
    // var timer = Date.now() * 0.0005;
    // pointLight.position.copy(camera.position);

    renderer.render(scene, camera);
  }

  return <div className="App" />;
}

export default App;
