class Car{
    start(){
        console.log("start method from Car class");
        console.log("Start by Turn Key")
    }

    stop(){
        console.log("stop method from Car class");
    }

    accelrate(){
        console.log("accelrate method from Car class");
    }
}

class Hyndai extends Car{

}

class RollsRoyce extends Car{
    override start(): void {
        console.log("Start methdd from Rolls Royce");
        console.log("Start by Voice Recog.");
    }   
}

let rr = new RollsRoyce();
rr.start()
rr.accelrate();
rr.stop();