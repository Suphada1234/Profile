const express = require('express');
const router = express.Router();
const myData = require('../data');

router.get('/',(req,res)=>{         //เรียกใช้ตัวแปร router อ่าน พารามิเตอร์
    res.render('index',{myData});
});

router.get('/aboutme',(req,res)=>{
    res.render('about',{myData});
});

router.get('/education',(req,res)=>{
    res.render('education',{myData});
});

router.get('/workexperience',(req,res)=>{
    res.render('workexperiene',{myData});
});

router.get('/skills',(req,res)=>{
    res.render('skills',{myData});
});

module.exports = router;