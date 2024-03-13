import React from "react";
import "./DescriptionBox.css";

const Description = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Descrription</div>
        <div className="descriptionbox-nav-box fade">Reviews (122) </div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          voluptatibus illo provident maiores ab. Eligendi, nam, necessitatibus
          doloremque optio vitae exercitationem commodi sapiente molestiae
          distinctio sed, cupiditate laboriosam facere?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ab
          quibusdam tempore, quam tenetur nulla est!
        </p>
      </div>
    </div>
  );
};

export default Description;
