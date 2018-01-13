/*删除一行或多行*/
function del(obj)
    {
        var oParentnode = obj.parentNode.parentNode;
        var olistTable = document.getElementById('listTable');
        //若要删除某个工作项，则需要注意紧前关系的约束。
        var now = oParentnode.getElementsByTagName('td')[1].innerHTML;
        console.log(oParentnode.getElementsByTagName('td')[1].innerHTML);
        console.log(oParentnode.getElementsByTagName('td').length);
        for (var i=0;i<olistTable.getElementsByTagName('tr').length;i++)
        {
            var strs= new Array();
            console.log(olistTable.getElementsByTagName('tr')[i].getElementsByTagName('td')[4].innerHTML);
            strs=olistTable.getElementsByTagName('tr')[i].getElementsByTagName('td')[4].innerHTML.split(",");
            console.log(strs);
            for (var j=0;j<strs.length ;j++ )
            {
                if (now===strs[j])
                {
                    alert("无法删除，删除后不满足紧前关系的约束！");
                    return false;
                }
            }

        }
        olistTable.removeChild(oParentnode);
        return true;
    }

function delAll()
    {
        //var olistTable = document.getElementById('listTable');
        var items = document.getElementsByName("item");
        for(var j=0;j<items.length;j++){
            if(items[j].checked)//如果item被选中
            {
                if(del(items[j])) j--;
            }
        }
    }
