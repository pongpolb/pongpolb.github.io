---
title: 'การใช้งาน Flexbox อย่างง่ายๆ'
date: '2017-10-01'
tags: [ "CSS", "HTML" ]
---
## การใช้งาน Flexbox อย่างง่ายๆ
```flexbox``` ถูกแนะนำเข้ามาในสมัย CSS3 เพื่อเป็นการสร้าง Layout ด้วยวิธีแบบใหม่
น่าเสียดาย มันมี Specification ที่แตกต่างกันไปในแต่ละ Browser
อย่างไรก็ตามถ้าเรียนรู้มันไว้ น่าจะมีประโชยน์ในอนาคต
### Example - Fancy Layout using Flexbox
```css
.container {
  display: -webkit-flex;
  display: flex;
}
.initial {
  -webkit-flex: initial;
          flex: initial;
  width: 200px;
  min-width: 100px;
}
.none {
  -webkit-flex: none;
          flex: none;
  width: 200px;
}
.flex1 {
  -webkit-flex: 1;
          flex: 1;
}
.flex2 {
  -webkit-flex: 2;
          flex: 2;
}
```
### Example - Centering using Flexbox
```css
.vertical-container {
  height: 300px;
  display: -webkit-flex;
  display:         flex;
  -webkit-align-items: center;
          align-items: center;
  -webkit-justify-content: center;
          justify-content: center;
}
```
