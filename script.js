const pickerLine = $(".pickerLine");
const template = $("#template");
const cardTitle = $(".card-title");



class Dancer {

    constructor(name, score, image, dance)  {
        this.name = name;
        this.score = score;
        this.image = image;
        this.dance = dance;
    }

    makeCard() {
      let newClass = this.name
      let newCard = $("." + newClass)
template.clone().appendTo(pickerLine).addClass(newClass).removeAttr('id')
cardTitle.text(newClass);




           
    }
}
let r = new Dancer("carla", 4, "#", "#");
r.makeCard()

let k = new Dancer("ralph", 4, "#", "#");
k.makeCard()

let s= new Dancer("stan", 4, "#", "#");
s.makeCard()

