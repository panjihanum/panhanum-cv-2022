import IMAGES from "../assets/img";

/* eslint-disable jsx-a11y/alt-text */
const Background = () => {
  return (
    <div className="background-wrapper">
      <div className="leaf">
        <div>
          <img src={IMAGES.PROGRAMMING.CSS} height="75px" width="75px"></img>
        </div>
        <div>
          <img src={IMAGES.PROGRAMMING.HTML} height="75px" width="75px"></img>
        </div>
        <div>
          <img src={IMAGES.PROGRAMMING.JAVA} height="75px" width="75px"></img>
        </div>
        <div>
          <img
            src={IMAGES.PROGRAMMING.JAVASCRIPT}
            height="75px"
            width="75px"
          ></img>
        </div>
        <div>
          <img src={IMAGES.PROGRAMMING.MYSQL} height="75px" width="75px"></img>
        </div>
        <div>
          <img src={IMAGES.PROGRAMMING.PGSQL} height="75px" width="75px"></img>
        </div>
        <div>
          <img src={IMAGES.PROGRAMMING.PHP} height="75px" width="75px"></img>
        </div>
      </div>

      <div className="leaf leaf1">
        <div>
          <img src={IMAGES.PROGRAMMING.REACT} height="75px" width="75px"></img>
        </div>
        <div>
          <img
            src={IMAGES.PROGRAMMING.JAVASCRIPT}
            height="75px"
            width="75px"
          ></img>
        </div>
        <div>
          <img src={IMAGES.PROGRAMMING.JAVA} height="75px" width="75px"></img>
        </div>
        <div>
          <img src={IMAGES.PROGRAMMING.HTML} height="75px" width="75px"></img>
        </div>
        <div>
          <img src={IMAGES.PROGRAMMING.MYSQL} height="75px" width="75px"></img>
        </div>
        <div>
          <img src={IMAGES.PROGRAMMING.JAVA} height="75px" width="75px"></img>
        </div>
        <div>
          <img src={IMAGES.PROGRAMMING.REACT} height="75px" width="75px"></img>
        </div>
      </div>
    </div>
  );
};

export default Background;
