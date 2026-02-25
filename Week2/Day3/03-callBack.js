

function playVideo(user,video,x,y){

console.log(user+" is watching "+video);

x() // x() is going to execute saveHistory()
y() // y() is going tp execute showRelatedVideos()



}

function saveHistory(){
console.log("Video saved to history for user ");

}

function showRelatedVideos(){
console.log(`SHowing the recommended videos`);

}

playVideo("Hari","JS Video",saveHistory,showRelatedVideos)