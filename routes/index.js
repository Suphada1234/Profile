const express = require('express');
const router = express.Router();
const myData = require('../data');

router.get('/',(req,res)=>{         //เรียกใช้ตัวแปร router อ่าน พารามิเตอร์
    res.render('index',{myData});
});

router.get('/about',(req,res)=>{
    res.render('about',{myData});
});

router.get('/education',(req,res)=>{
    res.render('education',{myData});
});

router.get('/experience',(req,res)=>{
    res.render('experience',{myData});
});

router.get('/skills',(req,res)=>{
    res.render('skills',{myData});
});

module.exports = router;