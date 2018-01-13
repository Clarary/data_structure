/*添加信息*/
window.count = 1;
function addList()
    {
        var oNum = window.count;
        var oName = document.getElementById('name').value;
        var oTime = document.getElementById('time').value;
        var oPre = document.getElementById('pre').value;
        var judge = check_pre(oPre);
        //检查
        if (!judge) return;
        if (oName ==='')
        {
            alert("错误，工作项名称不能为空！");
            return;
        }
        if (oTime ==='')
        {
            oTime = '0';
        }
        if (isNaN(parseInt(oTime)))
        {
            alert("错误，工作项时间请输入数字！");
            return;
        }
        var oTr = document.createElement('tr');
        var oTd1 = document.createElement('td');
        var oInput = document.createElement('input');
        oTd1.appendChild(oInput);
        oInput.setAttribute('type','checkbox');
        oInput.setAttribute('name','item');     //第一列选中的框框
        var oTd2 = document.createElement('td');
        oTd2.innerHTML = oNum;
        var oTd3 = document.createElement('td');
        oTd3.innerHTML = oName;
        var oTd4 = document.createElement('td');
        oTd4.innerHTML = oTime;
        var oTd5 = document.createElement('td');
        oTd5.innerHTML = oPre;
        var oTd6 = document.createElement('td');
        var oInput2 = document.createElement('input');
        var space = document.createTextNode("  ");     //这空格加的真完美，哈哈哈
        var oInput3 = document.createElement('input');
        oInput2.setAttribute('type','button');
        oInput2.setAttribute('value','删除');
        oInput2.setAttribute('onclick','del(this)');
        oInput2.className = 'btn btn-danger';
        oInput3.setAttribute('type','button');
        oInput3.setAttribute('value','修改');
        oInput3.setAttribute('onclick','modify(this)');
        oInput3.className = 'btn btn-info';
        oTd6.appendChild(oInput2);                     //一行中最后一个框，其中有删除和修改按钮
        oTd6.appendChild(space);
        oTd6.appendChild(oInput3);
        oTr.appendChild(oTd1);
        oTr.appendChild(oTd2);
        oTr.appendChild(oTd3);
        oTr.appendChild(oTd4);
        oTr.appendChild(oTd5);
        oTr.appendChild(oTd6);
        var olistTable = document.getElementById('listTable');
        olistTable.appendChild(oTr);
        document.getElementById('num').innerHTML =  window.count+1;
        window.count+=1;
        //添加完后清空方框内的字
        // oNum.value = '';
        // oName.value = '';
        // oTime.value = '';
        // oPre.value = '';
    }

function check_pre(obj)
{
    console.log('aa')
    if(obj==='') return true;//如果为空，是允许的
    var strs= new Array();
    strs=obj.split(","); //字符分割
    var num_list = document.getElementById('listTable').getElementsByTagName('tr');
    var num_a=new Array();
    for(var i = 0;i<num_list.length;i++)
        num_a.push(num_list[i].getElementsByTagName('td')[1].innerHTML)
    console.log(num_a);
    for (var i=0;i<strs.length ;i++ )
    {
        console.log(strs[i]);
        if(isNaN(parseInt(strs[i])))
        {
            alert("错误，紧前工作中有非法字符！")
            return;
        }
        if (parseInt(strs[i])>window.count-1|| num_a.indexOf(strs[i])===-1)
        {
            alert("错误,请先输入紧前工作的信息！");
            return false
        }
    }
    return true
}