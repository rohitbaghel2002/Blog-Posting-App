import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="about">
      <div className="aboutTitle">
        <span className="aboutTitleLg">About</span>
      </div>
      <div className="aboutPicCon">
        <img
          className="aboutPic"
          src="https://images.pexels.com/photos/355747/pexels-photo-355747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="aboutText">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
          beatae iure inventore numquam quidem explicabo veritatis, illo esse ex
          eos nemo quas temporibus ipsam eveniet nesciunt vel sit et. Eveniet at
          doloribus quibusdam hic quaerat recusandae aut, dolorum, voluptas
          distinctio ipsam optio. Et vel neque corrupti iure laborum maxime
          ipsum nam laudantium rem dolorum distinctio laboriosam tempore
          explicabo aut impedit saepe aperiam, in, esse, maiores quos
          perspiciatis quidem. Eaque, est unde doloremque tenetur corporis
          nostrum modi nesciunt veritatis atque harum, debitis dolorem officiis.
          Expedita magnam quia iste sit dicta! Minima ad temporibus, laboriosam
          excepturi suscipit ducimus perferendis animi quibusdam harum.
        </div>
      </div>
    </div>
  );
}
