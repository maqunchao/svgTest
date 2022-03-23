import React, { useState, useEffect } from 'react';

// import downloadImg from './download.svg';
import downloadImg from './logo.svg';

import SVG from 'react-inlinesvg';
import './App.css';

function App() {


  // useEffect(() => {

  //   let a = document.getElementById("svgframe");

  //   if (a.attachEvent) {
  //     a.attachEvent('onload', function () {
  //       alert('iframe is loaded')
  //     })
  //   } else {
  //     a.onload = function () {
  //       //这里获取svgDom
  //       var a = document.getElementById('svgframe').contentDocument;
  //       //接下来就可以对svgDom进行操作，绑定元素点击事件，改变元素的属性等等
  //       var txtObj = a.getElementById("image0");
  //       console.log(txtObj.href.baseVal);

  //       var myImg = new Image();
  //       myImg.src = txtObj.href.baseVal;

  //       var canvas = document.createElement("canvas");
  //       var ctx = canvas.getContext("2d");
  //       ctx.drawImage(myImg, 0, 0);
  //       var imgd = ctx.getImageData(0, 0, myImg.width, myImg.height);

  //       for (let i = 0; i < imgd.data.length; i += 4) {
  //         imgd.data[i] = 255;
  //         imgd.data[i + 1] = 0;
  //         imgd.data[i + 2] = 0;
  //       }
  //       console.log("imgd", imgd);
  //       // ctx.fillStyle = "red";
  //       ctx
  //       ctx.putImageData(imgd, 0, 0);

  //       console.log("ctx", ctx);

  //       var url = document.getElementById("svgframe").src;
  //       console.log("url", url);

  //       url = myImg;
  //     }
  //   }

  // }, [])

  useEffect(() => {
    setTimeout(() => {
      let svgObject = document.getElementById('object').contentDocument;

      let x = svgObject.getElementById('title');
      x.style.fill = 'red';
      console.log(svgObject);


    }, 100)

  }, [])



  return (
    <div className="App">

      {/* <img src={downloadImg} id="testId" className="App-logo" alt="logo" /> */}
      {/* <iframe id="svgframe" src={downloadImg} width="50px" height="510px"></iframe> */}
      <object id="object" data={downloadImg} type="image/svg+xml"></object>
      {/* <embed id="embed" src="icon.svg" type="image/svg+xml"> */}

      {/* <SVG className="testId" src={downloadImg} /> */}


    </div >
  );
}

export default App;
