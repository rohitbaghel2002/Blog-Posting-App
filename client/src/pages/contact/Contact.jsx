import React from "react";
import "./contact.css";
export default function Contact() {
  return (
    <div className="contact">
      <div className="contactPicCon">
        <img
          className="contactPic"
          src="https://images.pexels.com/photos/1025469/pexels-photo-1025469.jpeg"
          alt=""
        />{" "}
        <div className="contactTitle">
          <span className="contactTitleLg">A Blog Posting Site</span>
        </div>
        <div className="contactText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque veniam
          quam nulla, quis sed fugit eveniet ullam maiores molestiae suscipit
          adipisci magnam ipsam magni beatae debitis quisquam, cupiditate
          doloremque, voluptatibus esse quasi. Quam, accusantium harum. Illum et
          reiciendis odio praesentium at error facilis quis ratione saepe sequi
          eligendi cumque pariatur vitae similique explicabo, laborum,
          laudantium itaque. Placeat eos vel quam fugiat labore, et molestias
          cumque tempore illum nostrum fuga deleniti officiis voluptatum
          laboriosam, dolorum qui minus voluptatibus reiciendis ipsa. Deserunt
          cum eligendi corporis natus voluptatibus velit pariatur, deleniti
          explicabo, exercitationem nesciunt commodi, ab porro maiores facilis!
          Explicabo aliquid numquam maiores.
          <div className="contactIcon">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
