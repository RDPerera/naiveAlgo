function naive()
{
    var text = document.getElementsByClassName("text")[0].value;
    var ptrn = document.getElementsByClassName("ptrn")[0].value;
    var n = text.length;
    var m = ptrn.length;
    var k=0;
    var ComparisonCount =0;
    var flag ="Not Found !";
    for (i=0;i<n-m+1;i++)
    {
        k=i;
        for(j=0;j<m;j++)
        {
            ComparisonCount++;
            if (text[k]!=ptrn[j])
            {
                break;
            }
            else{
                k++;
            }
        }
        if(j==m)
        {
            flag="Found !   # Location :  "+ i;
            break;
        }
    }
    document.getElementsByClassName("result")[0].style.opacity="100%";
    document.getElementsByClassName("result")[1].style.opacity="100%";
    document.getElementById("res").value=flag;
    document.getElementById("cmp").value="# Comparisons :  "+ComparisonCount;
}