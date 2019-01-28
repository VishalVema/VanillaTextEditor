function iFrameOn(){
	richTextField.document.designMode = 'On';
}
function iBold(){
	richTextField.document.execCommand('bold',false,null); 
}
function iUnderline(){
	richTextField.document.execCommand('underline',false,null);
}
function iItalic(){
	richTextField.document.execCommand('italic',false,null); 
}
function iFontSize(){
	var size = prompt('Enter a size 1 - 7', '');
	richTextField.document.execCommand('FontSize',false,size);
}
function iForeColor(){
	var color = prompt('Define a basic color or apply a hexadecimal color code for advanced colors:', '');
	richTextField.document.execCommand('ForeColor',false,color);
}
function iHorizontalRule(){
	richTextField.document.execCommand('inserthorizontalrule',false,null);
}
function iUnorderedList(){
	richTextField.document.execCommand("InsertOrderedList", false,"newOL");
}
function iOrderedList(){
	richTextField.document.execCommand("InsertUnorderedList", false,"newUL");
}
function iLink(){
	var linkURL = prompt("Enter the URL for this link:", "http://"); 
	richTextField.document.execCommand("CreateLink", false, linkURL);
}
function iUnLink(){
	richTextField.document.execCommand("Unlink", false, null);
}


function embedded(){
    var link = prompt('Please add your Embedded Link', '');
    console.log(link);
    link = link.replace('frameborder="0"', 'style="border:10px solid blue;"');
    // document.getElementById("myDiv").style.border
    richTextField.document.execCommand('insertHTML', true, link);

}

    
function previewFile(){
    var preview = document.querySelector('img'); //selects the query named img
    var file    = document.querySelector('input[type=file]').files[0]; //sames as here
    var reader  = new FileReader();

    reader.onloadend = function () {
        // preview.src = reader.result;

        img = reader.result;
        imgTag = "<img src='" + img + "' style='-webkit-user-drag: none;' >";
        // h1Tag = "<h1>"+'hello'+"</h1>"
        // richTextField.document.execCommand("insertHTML", false, h1Tag);
        richTextField.document.execCommand('insertHTML', false, imgTag); 
        
        
        
        


        
    }

    if (file) {
       base64 = reader.readAsDataURL(file); //reads the data as a URL
       console.log(base64);
    } else {
        preview.src = "";
    }
}



function iImage(){
	var imgSrc = prompt('Enter image location', '');
    if(imgSrc != null){
        richTextField.document.execCommand('insertimage', false, imgSrc); 
    }
}
function submit_form(){
	var theForm = document.getElementById("myform");
	theForm.elements["myTextArea"].value = window.frames['richTextField'].document.body.innerHTML;
	theForm.submit();
}




// document.addEventListener('click', function (e){
//     console.log(e.target, "event");

//     var element = e.target;
//     var nodes = [];

//     var thisparentElement = element.parentElement;
//     console.log(thisparentElement);



//     while(element.parentNode) {
//         nodes.unshift(element.parentNode);
//         element = element.parentNode;
//     }


//     console.log(nodes);

// }, false)