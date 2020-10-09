let currentPhoto=0;
let data = [
    {
        photo:"file:///C:/Users/mrado/Desktop/photos/pic1.jpg",
        title:"Purple Moutain",
        description: "This moutain has cool purple hue!",
    },
    {
        photo:"file:///C:/Users/mrado/Desktop/photos/pic2.jpeg",
        title:"Water Moutain",
        description: "This moutain is near water!",
    },
    {
        photo:"file:///C:/Users/mrado/Desktop/photos/pic3.jpg",
        title:"Pink Moutain",
        description:"This is very cold pink moutain!",
    },
    {
        photo:"file:///C:/Users/mrado/Desktop/photos/pic4.jpg",
        title:"Sand Moutain",
        description:"This is moutain is made from sand!",
    },
    {
        photo:"file:///C:/Users/mrado/Desktop/photos/pic5.jpg",
        title:"Japanese Moutain",
        description:"This moutain is located in Japan!",
    }
]
let loadPhoto = (photoNumber) => {
    $("#photo").attr('src', data[photoNumber].photo);
    $("#photo-title").text(data[photoNumber].title);
    $("#photo-description").text(data[photoNumber].description);
}

loadPhoto(currentPhoto);

$('.butt2').click(() => {
    if(currentPhoto<data.length) {
    currentPhoto++;
    }
    loadPhoto(currentPhoto);
})
$('.butt1').click(() => {
    if(currentPhoto>0) {
    currentPhoto--;
    }
    loadPhoto(currentPhoto);
})
data.forEach(element => {
    $('#container').append('<img class="thumb" src="' + element.photo + '">');
    $('.thumb').click((event) => {
        let indexClicked = $(event.target).index();
        loadPhoto(indexClicked)
      });    
});
//$("#photo").attr('src', data[currentPhoto].photo);
//$("#photo-title").text(data[currentPhoto].title);
//$("#photo-description").text(data[currentPhoto].description);