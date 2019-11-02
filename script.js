const pickerLine = $(".pickerLine");
const template = $("#template");
const cardTitle = $(".card-title");
const card = $('.card');



class Dancer {

    constructor(name, score, image, dance)  {
        this.name = name;
        this.score = score;
        this.image = image;
        this.dance = dance;
    }

    makeCard() {
     
      
template.clone().appendTo(pickerLine).attr("id", this.name);
$("#"+ this.name + " h4:nth-child(2)").text(this.name);


   
           
 }

 picked() {
     let newCard= $("."+ this.name)
    newCard.css('border', '10px solid black');
 }
}
let r = new Dancer("carla", 4, "#", "#");
r.makeCard()

let k = new Dancer("ralph", 4, "#", "#");
k.makeCard()

let s= new Dancer("stan", 4, "#", "#");
s.makeCard()
s.picked()

