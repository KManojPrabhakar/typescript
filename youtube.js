var YoutubeVideo = /** @class */ (function () {
    function YoutubeVideo(videoTitle, videoLength, views, subTitles, fullScreen) {
        var _this = this;
        this.videoTitle = videoTitle;
        this.videoLength = videoLength;
        this.views = views;
        this.subTitles = subTitles;
        this.fullScreen = fullScreen;
        this.viewsLength = function () {
            return _this.views;
        };
        this.videoTitle = videoTitle;
        this.videoLength = videoLength;
        this.views = views;
        this.subTitles = subTitles;
        this.fullScreen = fullScreen;
    }
    return YoutubeVideo;
}());
var video1 = new YoutubeVideo("India vs Australia", 120, 400000, true, true);
console.log("YouTube Data");
console.log("Video Title: ", video1.videoTitle);
console.log("Video Views :", video1.viewsLength());
console.log("SubTitles Avaialble: ", video1.subTitles);
console.log("FullScreen Avaialble: ", video1.fullScreen);
