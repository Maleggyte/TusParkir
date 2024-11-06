window.onload = function() {
    const canvas = document.getElementById("waveCanvas");
    const ctx = canvas.getContext("2d");


    function drawWave() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.moveTo(0, canvas.height * 0.2);
        ctx.bezierCurveTo(
            canvas.width * 0.25, canvas.height * 0.3,
            canvas.width * 0.75, canvas.height * 0.1,
            canvas.width, canvas.height * 0.3
        );
        
        ctx.lineTo(canvas.width, 0);
        ctx.lineTo(0, 0);
        ctx.closePath();
        
        ctx.fillStyle = "rgba(173, 216, 230, 0.5)";
        ctx.fill();
    }

    drawWave();
};
