import video from "../videos/goas.mp4"; //fetch video from video folder
function addVideo() {
  //selecting the custom component <responsive-video-background>
  const videoBg = document.getElementsByTagName(
    "responsive-video-background"
  )[0];

  //Create attribute named mp4(because custom component <responsive-video-background> requires mp4 attribute to display video ....... not src as in html5 video tag)
  // Refer this link https://github.com/cleverage/responsive-video-background to know more.
  const mp4 = document.createAttribute("mp4");

  //assign video that we imported on top
  mp4.value = video;

  //set attribute on tag element from above (which is <responsive-video-background>)
  videoBg.setAttributeNode(mp4);

  console.log(videoBg); // just to check we are selecting the right element.
}
export default addVideo;
