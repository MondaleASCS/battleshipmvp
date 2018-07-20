function setup() {
  createCanvas(501,501);
  background(100);
  background("grey");

}
let i = 0
function draw(){
    while(i < 451) {
        rect(i, 0 ,50, 50);
        rect(i, 50 ,50, 50);
        rect(i, 100 ,50, 50);
        rect(i, 150 ,50, 50);
        rect(i, 200 ,50, 50);
        rect(i, 250 ,50, 50);
        rect(i, 300 ,50, 50);
        rect(i, 350 ,50, 50);
        rect(i, 400 ,50, 50);
        rect(i, 450 ,50, 50);
        i+= 50;
    }
}