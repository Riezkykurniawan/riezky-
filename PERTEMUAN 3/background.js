var colors = ["#0b69f8ff","#f20404ff" ,"#03fad5ff", "#FFF4F7"];
var index = 0;
function ubahBackground(){
    document.body.style.backgroundColor = colors[index];
    index++;

    if(index>= colors.length){
        index =0;
    }
}