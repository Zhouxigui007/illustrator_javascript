//Select 1 pathitem and write down the bezer parameters 
//both to the document and selected csv file
function bezierParameters_simplest(){
	var selObj = activeDocument.selection;
	var str = "";
    var fstr = "";
	if (selObj.length!=1 ){alert("select one path"); return false;}
	if (selObj[0].typename == "PathItem"){
		var pLen = selObj[0].pathPoints.length;
		for(var j=0; j<pLen; j++){
			var x = selObj[0].pathPoints[j].anchor[0];
			var y = selObj[0].pathPoints[j].anchor[1];
			var leftX = selObj[0].pathPoints[j].leftDirection[0];
			var leftY = selObj[0].pathPoints[j].leftDirection[1];
			var rightX = selObj[0].pathPoints[j].rightDirection[0];
			var rightY = selObj[0].pathPoints[j].rightDirection[1];
			str += "anchor_"+j+" :  x= "+x+"  y="+y+"\r"+"leftXY : x="+leftX+"  y="+leftY+"\r"+"rightXY : x="+rightX+"  y="+rightY+"\r\r";
             fstr +=  ""+leftX + ", " +leftY +  ", " + rightX + ", " + rightX + ", " + x + ", " + y+"\r";
		}
	}
	var txtObj = activeDocument.textFrames.add();
	txtObj.contents = str;
    fName = File.openDialog("= select  a csv file =");
    fObj = new File(fName);
    flag = fObj.open("w");
    if (flag == true){
           fObj.write(fstr);
           fObj.close();
        }  else {
        alert("Can't open file.");    
        }
}

bezierParameters_simplest();
