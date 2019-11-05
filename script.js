const pickerLine = $(".pickerLine");
const template = $("#template");
const cardTitle = $(".card-title");
const card = $('.card');
let dancerOne;
let dancerTwo;
let isDancerOnePicked = false;
let pickedName = "carla";

let pickedNameArray = ["carla", "ralph"]



class Dancer {

    constructor(name, score, image)  {
        
        this.name = name;
        this.score = Math.floor((Math.random() * 100) + 50);
        this.image = image;
      
    }

// Makes Ajax call
getImage() {
      
    let input = this.name;
    let api = "&api_key=dy0FmMLlA7vphv8GPrWfz8W18KNS9npL&limit=" + 1;
    let queryURL =
      "https://api.giphy.com/v1/gifs/search?q=" + "dancing " + input + api;

     //The AJAX call
     $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
         
          let stillimage = response.data[0].images.fixed_height_still.url;
          console.log(stillimage)
          let movingimage = response.data[0].images.fixed_height.url;
          console.log(movingimage)

          


    
        
        let image = $("<img>");
          image.attr("src", stillimage);
          image.attr("data-still", stillimage);
          image.attr("data-state", "still");
          image.attr("data-animate", movingimage);
          image.addClass("animate");
          image.addClass("img-fluid");
          console.log(input)
         $("#" + input + "-img").append(image);
 
 

})}



 //Creates card   

 makeCard() {
      
template.clone().appendTo(pickerLine).attr("id", this.name);
$("#"+ this.name + " div:nth-child(1)").attr("id",  this.name +"-img")
$("#"+ this.name + " h4:nth-child(2)").text(this.name).attr("id", this.name + "-name");
$("#"+ this.name + " p:nth-child(3)").attr("id", this.name + "-score");
$("#"+ this.name + " a:nth-child(4)").attr("id", this.name + "-btn").attr("value", this.name)
//$("+"+this.name + "-btn").click(clickButton(this.name))
$("#" + this.name + "-score " + "span").attr("id", this.name + "-points").text(this.score)
        
 }


 picked() {
     
     $("#"+ this.name).css('border', '10px solid purple').addClass("picked");
 }

 notPicked() {
    $("#"+ this.name).addClass("not-picked").fadeOut(3000);
 }
}
let carla = new Dancer("carla", 4, "./images/wembley.jpg", "#");
//carla.makeCard()



let ralph = new Dancer("smurf", 4, "#", "#");
ralph.makeCard()
ralph.notPicked()
ralph.getImage()

let stan= new Dancer("stan", 12, "#", "#");
stan.makeCard()
stan.picked()
stan.getImage()

$( ".btn" ).click(function() {
    
   
    let selectedName = $(this).attr("value")
    $("#"+ selectedName).css('border', '10px solid purple').addClass("picked");
    console.log(selectedName)
    

    
    
  })




