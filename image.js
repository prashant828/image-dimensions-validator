$(function () {

    $("#image").change(function(e) {
        var file, img;
        var _URL = window.URL || window.webkitURL;
        if ((file = this.files[0])) {
            img = new Image();
            img.onload = function() {
                if(this.width < 600){
                    alert('less than 600 pixels upload another');
                }
                if(this.width > 600){
                    alert('more than 600 pixels crop the image')
                }
                if(this.width === 600){
                    alert('image is correct')
                }
            };
            img.onerror = function() {
                alert( "not a valid file: " + file.type);
            };
            img.src = _URL.createObjectURL(file);

        }

    });
})
