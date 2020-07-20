
		function upDate(previewPic)
		{
			document.getElementById('imagepreview').style.background="url("+previewPic.src+") no-repeat center";
			document.getElementById('imagepreview').innerHTML="";
		}
		function unDo()
		{
    		document.getElementById('imagepreview').innerHTML= "Hover over an image below to display here. " ;
			document.getElementById('imagepreview').style.background="";	
		}