var iframe = document.querySelector('#richTextField');

var iframe_offsetLeft = iframe.offsetLeft;

var iframe_offsetTop = iframe.offsetTop;

var iframe_client_y;

var iframe_client_x;

var incremental_height;

var incremental_width;

// console.log(iframe.offsetLeft);

// console.log(iframe.offsetTop);

var iframebody = iframe.contentDocument.querySelector('body');



var embedded_video = document.querySelector('iframe');



iframebody.addEventListener('mousemove', function(e){
    console.log(e.clientY, "Iframe Move");
    iframe_client_y = e.clientY;
    iframe_client_x = e.clientX;
})



//  console.log(iframebody.children);

// var all_elements = iframebody.children;

// console.log(all_elements.length);

iframebody.getElementsByTagName('iframe');
console.log(iframebody.getElementsByTagName('iframe'));

// all_elements.addEventListener('click', function(e){
//     console.log('event fired');
// })

// if (iframebody.embedded_video){
//     iframebody.embedded_video.addEventListener('click', function(e){
//     console.log('hello hello hello hello');
// })

// }



// iframebody.embedded_video.addEventListener('click', function(e){
//     console.log(e.target);
// })




    iframe.contentWindow.document.addEventListener('click', function(e){


        // console.log(e.target.tagName);

        // iframebody.getElementsByTagName('iframe').forEach(element => {
        //     element.addEventListener('click', function(e){
        //         console.log('Evet Fired')
        //     })
        // });

        var i = 0;

        while (i < iframebody.getElementsByTagName('video').length){
            
            console.log(iframebody.getElementsByTagName('video')[i], "indx is "+ i);


            
            iframebody.getElementsByTagName('video')[i].addEventListener('click', function(e){
                console.log('event fired', e.target.tagName);
            })
            i++;
        }
        

        console.log(iframebody.getElementsByTagName('video'), "my ifrmaes");
        
        // console.log(iframebody.innerHTML);

        // console.log(e.target.tagName,'hello this is image click demo');

        if (e.target.tagName == 'IMG'){
            console.log('it an image');
            // e.target.position = 'absolute';
            // var imageWidth = prompt('Enter image width', '');
            // var imageHeight = prompt('Enter image height', '');
            var imageWidth;
            var imageHeight;
            var current_width;
            var current_height
            var mouseDown = false;
            
            var image_offsetLeft = e.target.offsetLeft;
            var image_offsetTop = e.target.offsetTop;
            var client_y;
            var client_x;

            // console.log(image_offsetLeft+current_width+10, "right Corner");
            // console.log(image_offsetLeft, "left Corner");
            // console.log(image_offsetTop, "Top Offset");
            console.log(image_offsetTop+current_height+10, "Bottom Offset");

            // console.log(e.clientX , "client X");
            // console.log(e.clientY, "Client Y");

            e.target.addEventListener('mousedown', function(e){
                
                e.target.style.border = '5px solid black';
                if(image_offsetTop+e.target.height <= e.clientY && image_offsetTop+e.target.height+5 >= e.clientY){
                    mouseDown = true;
                    client_y = e.clientY;
                    client_x = e.clientX;
                    console.log('mouse down');
                    current_width = e.target.width;
                    current_height = e.target.height;
                }

            
            })

            e.target.addEventListener('mouseup', function(e){
                console.log('mouse up');
                mouseDown = false;
            })



            //&& image_offsetTop+current_height+5 >= e.clientY


            e.target.addEventListener('mousemove', function(e){


                // Curson style change Verticle
                iframebody.style.cursor = (image_offsetTop+e.target.height <= e.clientY && image_offsetTop+e.target.height+5 >= e.clientY)? 'n-resize': 'unset';

                // Curson style change horizontol
                // iframebody.style.cursor = (image_offsetLeft+e.target.width <= e.clientX && image_offsetLeft+e.target.width+5 >= e.clientX)? 'e-resize': 'unset';

                




                // Image Height Adjust
                if(mouseDown){
                    
                    incremental_height = iframe_client_y - current_height;

                    console.log(incremental_height, "height to be increased");



                    console.log(e.clientX , "client X Move");
                    console.log(e.clientY, "Client Y Move");
                    // console.log(iframe.clientY,'mouse move');

                    console.log(client_y);

                    // iframebody.addEventListener('mousemove', function(e){
                    //     console.log('Iframe Client');
                    // })

                    e.target.height = current_height + incremental_height;
                    
                }


                // Image Width Adjust
                if(mouseDown){
                    
                    incremental_width = iframe_client_x - current_width;

                    console.log(incremental_width, "Width to be increased");



                    console.log(e.clientX , "client X Move");
                    console.log(e.clientY, "Client Y Move");
                    // console.log(iframe.clientY,'mouse move');

                    console.log(client_x);

                    // iframebody.addEventListener('mousemove', function(e){
                    //     console.log('Iframe Client');
                    // })

                    e.target.width = current_width + incremental_width;
                    
                }



            })

            
            
            // e.target.width = imageWidth ? imageWidth: e.target.width;
            // e.target.height = imageHeight ? imageHeight: e.target.height;




            console.log(e.target.offsetLeft, "image offset");



        }








        // Embeded video Resize

        if (e.target.tagName == 'IFRAME'){
            console.log('it an image');
            // e.target.position = 'absolute';
            // var imageWidth = prompt('Enter image width', '');
            // var imageHeight = prompt('Enter image height', '');
            var imageWidth;
            var imageHeight;
            var current_width;
            var current_height
            var mouseDown = false;
            
            var image_offsetLeft = e.target.offsetLeft;
            var image_offsetTop = e.target.offsetTop;
            var client_y;
            var client_x;

            // console.log(image_offsetLeft+current_width+10, "right Corner");
            // console.log(image_offsetLeft, "left Corner");
            // console.log(image_offsetTop, "Top Offset");
            console.log(image_offsetTop+current_height+10, "Bottom Offset");

            // console.log(e.clientX , "client X");
            // console.log(e.clientY, "Client Y");

            e.target.addEventListener('mousedown', function(e){
                
                // e.target.style.border = '5px solid black';
                if(image_offsetTop+e.target.height <= e.clientY && image_offsetTop+e.target.height+10 >= e.clientY){
                    mouseDown = true;
                    client_y = e.clientY;
                    client_x = e.clientX;
                    console.log('mouse down');
                    current_width = e.target.width;
                    current_height = e.target.height;
                }

            
            })

            e.target.addEventListener('mouseup', function(e){
                console.log('mouse up');
                mouseDown = false;
            })



            //&& image_offsetTop+current_height+5 >= e.clientY


            e.target.addEventListener('mousemove', function(e){


                // Curson style change Verticle
                iframebody.style.cursor = (image_offsetTop+e.target.height <= e.clientY && image_offsetTop+e.target.height+10 >= e.clientY)? 'n-resize': 'unset';

                // Curson style change horizontol
                // iframebody.style.cursor = (image_offsetLeft+e.target.width <= e.clientX && image_offsetLeft+e.target.width+5 >= e.clientX)? 'e-resize': 'unset';

                




                // Image Height Adjust
                if(mouseDown){
                    
                    incremental_height = iframe_client_y - current_height;

                    console.log(incremental_height, "height to be increased");



                    console.log(e.clientX , "client X Move");
                    console.log(e.clientY, "Client Y Move");
                    // console.log(iframe.clientY,'mouse move');

                    console.log(client_y);

                    // iframebody.addEventListener('mousemove', function(e){
                    //     console.log('Iframe Client');
                    // })

                    e.target.height = current_height + incremental_height;
                    
                }


                // Image Width Adjust
                if(mouseDown){
                    
                    incremental_width = iframe_client_x - current_width;

                    console.log(incremental_width, "Width to be increased");



                    console.log(e.clientX , "client X Move");
                    console.log(e.clientY, "Client Y Move");
                    // console.log(iframe.clientY,'mouse move');

                    console.log(client_x);

                    // iframebody.addEventListener('mousemove', function(e){
                    //     console.log('Iframe Client');
                    // })

                    e.target.width = current_width + incremental_width;
                    
                }



            })

            
            
            // e.target.width = imageWidth ? imageWidth: e.target.width;
            // e.target.height = imageHeight ? imageHeight: e.target.height;




            console.log(e.target.offsetLeft, "image offset");

        }



        });





// iframe.addEventListener('load', function(){
//     console.log('iframe loaded');
// })


//  iframe.onload = function() {
//        console.log('hello hello hello how low ');
//     }();


    // document.addEventListener('click', function(e){
    //     console.log(e.target);
    // })
