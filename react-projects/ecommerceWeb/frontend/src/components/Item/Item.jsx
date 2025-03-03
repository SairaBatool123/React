import React from 'react'

export const Item = (props) => {
  const{image,name,new_price,old_price} = props
  return (
    <>
      <img src={image} alt="" />
      <p>{name}</p>
      <div className="item-prices">
        <div className="new-price">{new_price}
        </div>
        <div className="old-price">{old_price}
        </div>
      </div>
    </>
  );
}
