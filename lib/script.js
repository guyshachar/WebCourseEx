function onLoad()
{
    changeImage();
}

function changeImage()
{
    var imageElement = document.getElementById("switchedImage");
    var imageSrc = imageElement.src;
    if (imageElement.src.indexOf("1908364606615453350") > 0) {
        imageSrc = imageSrc.substr(0, imageSrc.indexOf("images/")+7) + "21835282443042595250.jpg";
    } else {
        imageSrc = imageSrc.substr(0, imageSrc.indexOf("images/")+7) + "1908364606615453350.JPG";
    }
    imageElement.src = imageSrc;
    setInterval(changeImage, 4000);
}