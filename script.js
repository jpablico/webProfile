function init()
{
    canvas = document.getElementById("canvas");
    canvas.width = document.body.clientWidth; //document.width is obsolete
    canvas.height = document.body.clientHeight; //document.height is obsolete
    canvasW = canvas.width;
    canvasH = canvas.height;

    if( canvas.getContext )
    {
        setup();
        setInterval( run , 33 );
    }
}
init();
console.log(init)