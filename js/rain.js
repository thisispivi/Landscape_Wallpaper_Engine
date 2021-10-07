function render() {
    var image = document.getElementById('background');
    image.onload = function() {
        var engine = new RainyDay({
            image: this
        });

        engine.rain([
            [10, 5, 10]
        ], 100);
    };
};