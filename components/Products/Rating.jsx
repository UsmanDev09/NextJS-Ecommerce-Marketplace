import Image from "next/image";

import starIcon from "../../public/images/star.svg";

const Rating = (props) => {

  return (
    <>

      <div className="flex gap-x-1">
        <button className="flex" onClick={() => props.clickedRating(props.stars)}>
          {[...Array(props.stars)].map((e, i) => <Image key={i} src={starIcon} alt="star icon" />)}
          <p className="font-comfortaa ml-2">{props.stars}</p>
        </button>
      </div>
    </>
  );
};

export default Rating;
