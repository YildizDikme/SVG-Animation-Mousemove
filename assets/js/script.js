
const svg = document.querySelector("#svg");
const mouse = svg.createSVGPoint();
const leftEye = createEye("#left-eye");
const rightEye = createEye("#right-eye");
let requestId= null;
window.addEventListener("mouseover",onMouseMove);
function onFrame(){
    let point = mouse.matrixTransform(svg.getScreenCTM().inverse());

    leftEye.rotateTo(point);
    rightEye.rotateTo(point);

    requestId = null;
}
function onMouseMove(event){
    mouse.x = event.clientX;
    mouse.y = event.clientY;

    if(!requestId){
        requestId = requestAnimationFrame(onFrame);
    }
}
function createEye(selector){
    const element = document.querySelector(selector);

    TweenMax.set(element, {
        transformOrigin : "center",
    })

    let bbox = element.getBBox();
    let centerX = bbox.x + bbox.width / 2;
    let centerY = bbox.y + bbox.height / 2;

    function rotateTo(point){
        let dx = point.x - centerX;
        let dy = point.y - centerY;

        let angle = Math.atan2(dy, dx);

        TweenMax.to(element, 0.3, {
            rotation: angle + "_rad_short",
        });
    }
    return{
        element,rotateTo
    }
}