canvas = new fabric.canvas("myCanvas");

player_x = 10;
player_y = 10;
img_width = 30;
img_height = 30;
player_block = "";
image_object = "";
 
function update_player(){
    fabric.Image.fromURL("player.png",function(Img){
        player_block = Img;
        player_block.scaleToHeight(140);
        player_block=scaleToWidth(150);
        player_block.set({
            top : player_y ,
            left : player_x 
        })
        canvas.add(player_block);
    })
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
    image_object = Img;
    image_object.scaleToHeight(img_height);
    image_object.scaleToWidth(img_width);
    image_object.set({
            top : player_y ,
            left : player_x
    })
    canvas.add(image_object);
    })
}