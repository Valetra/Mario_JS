function animate(options) {
    var start = performance.now();
    var requestId =  requestAnimationFrame(function animate(time) {
        // timeFraction от 0 до 1
        var timeFraction = (time - start) / options.duration;
        //if (timeFraction > 1) timeFraction = 0;
        // текущее состояние анимации
        var progress = options.timing(timeFraction);
        options.draw(progress);
        if (timeFraction > 1)
        {
            requestAnimationFrame(animate);
        }
  });
}