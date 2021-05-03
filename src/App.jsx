export default function App(props) {
    let sounds = ["bvng.mp3", "crfo.mp3", "dtse.mp3", "edqt.mp3", "ldcc.mp3", "peoi.mp3", "tena.mp3", "udgb.mp3"]
    return (
        <div className="container">
            {
                sounds.map((elem, index) => <div onClick = {(() => {
                    new Audio(`/sounds/${elem}`).play()
            })} className="block" style = {{background:randomColor(), height: 300 + 30 * index}}>{String.fromCharCode("A".charCodeAt() + index)}</div>)
            }
          
        </div>
    )
    function randomColor() {
         var r = getRandomInt(0, 255);
        var g = getRandomInt(0, 255);
        var b = getRandomInt(0, 255);
        return "rgb(" + r + "," + g + "," + b + ")";
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
