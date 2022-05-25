import { IconContext } from "react-icons";
import { BsPersonFill } from "react-icons/bs";


let Post = () => {
  return (
    <div class="row border-top border-bottom">
      <div class="col-2 text-center">
        <IconContext.Provider value={{ color: "black", size: "1.5em", title: "Avatar" }}>
          <BsPersonFill />
        </IconContext.Provider>
      </div>
      <div class="col-10">
        <p><b>Nickname</b> <span class="secondary">- 1h</span></p>
        <p>Nullam a tincidunt dolor. Aenean et porta mauris, eget venenatis odio. Sed vel
          fermentum ipsum. Curabitur laoreet felis purus, quis efficitur felis semper a. Praesent orci aliquam.
        </p>
      </div>
    </div>
  );
}

export default Post;