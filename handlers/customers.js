var crypto = require('crypto');
var config = require('../profile.json');
var Customer = require(config.CustomerModel);


exports.loginface = (req, res, next) => {
    // res.render('login', { layout: "login", title: '米特学堂后台管理系统' });
    res.render('admin', { layout: "admin", title: '米特学堂后台管理系统' });
}

exports.customersList = (req, res, next) => {

    // Customer.Model.find({},  (err, response) =>{
    //     if (err) {
    //         console.log("Error:" + err);
    //         res.send('查询失败' + err);
    //     }
    //     else {
    //         // console.log("Res:" + response);
    //         res.render('customersList', {
    //             layout: "admin",
    //             title: '米特学堂后台管理系统',
    //             customersList:response
    //         });
    //     }
    // })

    Customer.PageQuery(1, 3, Customer.Model, "", {}, {}).then((pageResult) => {

        res.render('customersList', {
            layout: "admin",
            title: '米特学堂后台管理系统',
            customersList: pageResult.results
        });
    }).catch((err) => {
        console.log("查询失败:" + err);
        res.send("失败");
    });
}