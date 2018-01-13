function search()
{
    var tosearch = document.getElementById("tosearch").value;
    console.log(tosearch);
    document.getElementById("searchTable").innerHTML='';//清空，防止多次查询
    if (tosearch==='') return;//如果搜索框为空，则跳过
    var rows = document.getElementById('listTable').rows.length; //获得行数
    var sr=document.getElementById('searchTable').rows.length;
    var columns = 5; //列数
    var count = 0;
    if ( sr === 0)
    {
        var td1 =document.createElement('th');
        td1.innerHTML = '工作项代号';
        var td2 =document.createElement('th');
        td2.innerHTML = '工作项名称';
        var td3 =document.createElement('th');
        td3.innerHTML = '工作持续时间';
        var td4 =document.createElement('th');
        td4.innerHTML = '紧前工作的列表';
        var th =document.createElement('tr');
        th.appendChild(td1);
        th.appendChild(td2);
        th.appendChild(td3);
        th.appendChild(td4);
        document.getElementById("searchTable").appendChild(th);
    }
    for (var i = 0; i < rows; i++)
    { //每行
        for (var j = 0; j < columns; j++)
        {
            if (j === 0) continue;//第一个是复选框，不用
            var tdValue = document.getElementById('listTable').rows[i].cells[j].innerHTML;//Json数据的值
            if(tdValue.indexOf(tosearch)>-1)
            {
                //找到了
                var oTr = document.createElement('tr');
                var oTd2 = document.createElement('td');
                oTd2.innerHTML = document.getElementById('listTable').rows[i].cells[1].innerHTML;
                var oTd3 = document.createElement('td');
                oTd3.innerHTML = document.getElementById('listTable').rows[i].cells[2].innerHTML;
                var oTd4 = document.createElement('td');
                oTd4.innerHTML = document.getElementById('listTable').rows[i].cells[3].innerHTML;
                var oTd5 = document.createElement('td');
                oTd5.innerHTML = document.getElementById('listTable').rows[i].cells[4].innerHTML;
                oTr.appendChild(oTd2);
                oTr.appendChild(oTd3);
                oTr.appendChild(oTd4);
                oTr.appendChild(oTd5);
                var searchTable = document.getElementById('searchTable');
                searchTable.appendChild(oTr);
                count+=1;
                break//跳出内层循环，以免输出多次
            }
        }
    }
    var tend = document.createElement('td');
    tend.setAttribute('colspan','4');
    var end = document.createElement('p');
    end.innerHTML = '共搜索到'+count+'条记录';
    end.setAttribute('align','center');
    end.style.cssText = "  font-size:large; font-weight:bold; ";
    tend.appendChild(end);
    document.getElementById('searchTable').appendChild(tend);
}