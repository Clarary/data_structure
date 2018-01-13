//选中多行
function checkAll(c)
    {
        var status = c.checked;
        var oItems = document.getElementsByName('item');
        for(var i=0;i<oItems.length;i++){
            oItems[i].checked=status;
        }
    }