
module.exports = {
	'post /store/admin/login/check': function(req, res) {
		res.json({message: "", result: true, code: 200});
	},
	'get /cartlist': function(req, res) {
        setTimeout(function(){
            res.json(
                {
                    code : 200,
                    totalcost : 2333,
                    productcost : 1234,
                    deliverycost : 33,
                    shoppingList : [
                        {
                            pid:1,
                            titleimg : "../../res/images/default.png",
                            title : "阿基米德",
                            amount : 2,
                            unitprice : 66,
                            subtotal : 132
                        },
                        {
                            pid:2,
                            titleimg : "../../res/images/default.png",
                            title : "阿基米德",
                            amount : 2,
                            unitprice : 66,
                            subtotal : 132
                        }
                    ]
                }
            )
        },2000);
	},
	'get /emptycart': function(req, res) {
        setTimeout(function(){
            res.json({"code":200, "message":"success"});
        },2000);

	/*	if(req.body.username.length > 0 && req.body.password.length > 0) {
            res.json({"code":200, "message":"success"});
        } else {
            res.json({"code":400, "message":"参数错误"});
        }*/
	},
	'post /submitorder': function(req, res) {
        setTimeout(function(){
            res.json({"code":200, "message":"success"});
        },2000);
    }
};