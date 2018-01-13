// function save(obj)
// {
//     obj.setAttribute('class','btn-lg btn-success');
// //     var net = require('net');
// //     //数据库操作
// //     var mysql = require('mysql');
// //     // 数据库信息
// //     var connection = mysql.createConnection
// //     ({
// //         host     : 'localhost',
// //         user     : 'root',
// //         password : 'Lishi4729',
// //         database : 'shjujiegou',
// //         port :'3306'
// //     });
// //     var values =
// //         [
// //             ["1","aaa",11,'1,2'],
// //             ["2","bbb",12,'2,3']
// //         ];
// //     var sql = "INSERT INTO shuju VALUES ?";
// //     connection.query(sql, [values], function (err)
// //     {
// //         if(err)
// //         {
// //                 console.log('INSERT ERROR - ', err.message);
// //                 return;
// //         }
// //             console.log("INSERT SUCCESS");
// //     });
// // }
// //
// // module.exports = function (obj) {
// //     return save(obj);
// }
function save(obj)
{
    obj.setAttribute('class', 'btn-lg btn-success');
    var json = TableToJson('listTable');
    console.log(json);
    $.ajax({
        type:'POST',
        url: '/index',
        data:  json,
        contentType: 'application/json',
        success:function(res)
        {
                    console.log(res)
                    console.log(0)
        },
        error:function (res)
        {
                    console.log(res);
                    console.log(1)
        }
    });
    return json;
}

function TableToJson(tableid)
    { //tableid是你要转化的表的表名，是一个字符串，如"example"
        var keysArr = new Array("key0", "num","name","time","pre");//可以根据表格的列数添加
        var rows = document.getElementById(tableid).rows.length; //获得行数(包括thead)
        var columns = 5; //获得列数
        var json = "[";
        var tdValue;
        for (var i = 0; i < rows; i++)
        { //每行
            json += "{";
            for (var j = 0; j < columns; j++)
            {
                if (j === 0) continue;
                var tdName = keysArr[j]; //Json数据的键
                json += "\""; //加上一个双引号
                json += tdName;
                json += "\"";
                json += ":";
                tdValue = document.getElementById(tableid).rows[i].cells[j].innerHTML;//Json数据的值
                json += "\"";
                json += tdValue;
                json += "\"";
                json += ",";
            }
            json = json.substring(0, json.length - 1);
            json += "}";
            json += ",";
        }
        json = json.substring(0, json.length - 1);
        json += "]";
        return json;
    }