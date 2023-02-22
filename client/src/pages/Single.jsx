import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />

        <div className="user">
          <img
            src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/writw?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          doloremque.
        </h1>
        <p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nesciunt
            repellat voluptas doloribus, maxime laudantium, recusandae assumenda
            totam quo aperiam, tenetur itaque officia quisquam. Nihil adipisci
            eius et officiis at? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Et nesciunt repellat voluptas doloribus, maxime
            laudantium, recusandae assumenda totam quo aperiam, tenetur itaque
            officia quisquam. Nihil adipisci eius et officiis at?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nesciunt
            repellat voluptas doloribus, maxime laudantium, recusandae assumenda
            totam quo aperiam, tenetur itaque officia quisquam. Nihil adipisci
            eius et officiis at? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Et nesciunt repellat voluptas doloribus, maxime
            laudantium, recusandae assumenda totam quo aperiam, tenetur itaque
            officia quisquam. Nihil adipisci eius et officiis at?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nesciunt
            repellat voluptas doloribus, maxime laudantium, recusandae assumenda
            totam quo aperiam, tenetur itaque officia quisquam. Nihil adipisci
            eius et officiis at? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Et nesciunt repellat voluptas doloribus, maxime
            laudantium, recusandae assumenda totam quo aperiam, tenetur itaque
            officia quisquam. Nihil adipisci eius et officiis at?
          </p>
        </p>
      </div>
      <Menu />
    </div>
  );
};
export default Single;
