import "./App.css";
import Box from "./Box";
import Boxthree from "./Boxthree";

function App() {
  return (
    <div className="App">
      <Boxthree />
    </div>
  );
}

export default App;

/*
- The transform prop lets you visually manipulate an elenents SHAPE, POSITION, and ORIENTATION in 2D or 3D space
- it doesnt actually move the elements layout position (unlike margin or top/left)
- It visually transforms it - the browsers rendering layer moves it around
---------------------------------------------------------------------------------------------------------------------------------
translate(x,y) moves an element by the X and Y pixels or percanteges tranform: translate(50px, 100px)
translateX(n) moves horizontally tranform: translate(50px)
translateY(n) moves vertically transform: translateY(-25%)
scale(x,y) Scales width and height transform: scale(1.2,0.8)
scaleX(n)/scaleY(n)/ scaleY(n)  scales one dimension transform: scaleX(2)
rotate(angle) transform: rotate(45deg); 
skew(x-angle, y-angle) slants the element transform: skew(10deg, 5deg);

Transforms stack in order - they read left to right 
    transform: trandlateX(100px) rotate (45deg)
  - move right by 100px
  - then rotate around the new origin (after translation)
*/
