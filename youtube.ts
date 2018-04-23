class YoutubeVideo {
    constructor(public videoTitle:string,private videoLength:number,private views:number,public subTitles:boolean,public fullScreen?:boolean) {
        this.videoTitle = videoTitle;
        this.videoLength = videoLength;
        this.views = views;
        this.subTitles = subTitles;
        this.fullScreen = fullScreen;
    }
     viewsLength = () => {
        return this.views;
    }
}


let video1 = new YoutubeVideo("India vs Australia",120,400000,true,true);
console.log("YouTube Data");
console.log("Video Title: ",video1.videoTitle);
console.log("Video Views :",video1.viewsLength())
console.log("SubTitles Avaialble: ",video1.subTitles)
console.log("FullScreen Avaialble: ",video1.fullScreen)