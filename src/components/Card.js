import React from 'react';

import CardInfo from '../components/CardInfo';

function Card(props) {
  return (
    <div
      className="d-inline-block y-card"
      onClick={(e) => props.onClick(props.item)}
    >
      <img
        className="y-card-image"
        src={props.item.imgSrc}
        alter={props.item.imgSrc}
      />
      {props.item.selected && (
        <CardInfo
          title={props.item.title}
          subTitle={props.item.subTitle}
          link={props.item.link}
        />
      )}
    </div>
  );
}

export default Card;
