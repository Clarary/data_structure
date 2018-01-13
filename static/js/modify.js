function modify(obj)
    {
        var header = document.getElementById('header3');
        console.log(header);
        header.innerHTML = '修改数据';
        var butt = document.getElementById('butt');
        var modi = document.getElementById('modify');
        if (modi)
        {
            butt.removeChild(modi)
        }

        // <input type="button" value="更新"  class="btn btn-info" id=""  onclick="update()" />
        var but = document.createElement('input');
        but.setAttribute('type','button');
        but.setAttribute('value','修改');
        but.setAttribute('class','btn btn-info');
        but.setAttribute('onclick','update()');
        but.setAttribute('id','modify');
        document.getElementById("add").style.display="none";
        document.getElementById("reset").style.display="none";
        butt.appendChild(but);

        var oNum = document.getElementById('num');
        var oName = document.getElementById('name');
        var oTime = document.getElementById('time');
        var oPre = document.getElementById('pre');
        var oTr = obj.parentNode.parentNode;
        var aTd = oTr.getElementsByTagName('td');
        rowIndex = obj.parentNode.parentNode.rowIndex;
        oNum.innerHTML = aTd[1].innerHTML;
        oName.value = aTd[2].innerHTML;
        oTime.value = aTd[3].innerHTML;
        oPre.value = aTd[4].innerHTML;
        console.log(aTd[4].innerHTML);
        //alert(i);
    }
function update()
    {
        var header = document.getElementById('header3');
        var oNum = document.getElementById('num');
        var oName = document.getElementById('name');
        var oTime = document.getElementById('time');
        var oPre = document.getElementById('pre');
        var oMytable = document.getElementById('mytable');
        //alert(rowIndex);
        //var aTd = rowIndex.cells;
        var judge = check_pre(oPre.value);
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
        console.log(oMytable.rows[rowIndex].cells);
        oMytable.rows[rowIndex].cells[1].innerHTML = oNum.innerHTML;
        oMytable.rows[rowIndex].cells[2].innerHTML = oName.value;
        oMytable.rows[rowIndex].cells[3].innerHTML = oTime.value;
        oMytable.rows[rowIndex].cells[4].innerHTML = oPre.value;
        oNum.innerHTML =  document.getElementById('listTable').getElementsByTagName('tr').length+1;
        oName.value = '';
        oTime.value = '';
        oPre.value = '';
        var butt = document.getElementById('butt');
        var modify_b = document.getElementById('modify');
        document.getElementById("add").style.display="inline";
        document.getElementById("reset").style.display="inline";
        butt.removeChild(modify_b);
        header.innerHTML = '新增数据';
    }