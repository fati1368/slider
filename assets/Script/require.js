require.config({
    paths: {
        "jquery": "path/to/jquery"
    }
});

require(["jquery"], function($) {
    console.log("jQuery version: " + $.fn.jquery);ئخ
});
