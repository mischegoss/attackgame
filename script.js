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
      let newClass = this.name
      
template.clone().appendTo(pickerLine).removeAttr('id').attr("class", "card col-3 " + newClass)
cardTitle.text(newClass);
   
           
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

