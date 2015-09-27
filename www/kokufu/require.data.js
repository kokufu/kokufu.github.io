requirejs.config({
    paths: {
        "Amazon": "http://wms-fe.amazon-adsystem.com/20070822/JP/js/link-enhancer-common.js?tag=team00-22"
    }
});

// require(["module/name", ...], function(params){ ... });
require(["Amazon"], function ($) {
  alert($);
});
