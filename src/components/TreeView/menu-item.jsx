import React from "react";
import { useState } from "react";
import MenuList from "./menu-list";

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  const handleToggleChildren = (getCurrentLabel) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
  };

  console.log(displayCurrentChildren);

  return (
    <>
      <li>
        <div className="menu-item">
          <p>{item.label}</p>
          {item && item.children && item.children.length ? (
            <span onClick={() => handleToggleChildren(item.label)}>
              {displayCurrentChildren[item.label] ? (
                <i className="pi pi-minus" style={{ fontSize: "1rem" }}></i>
              ) : (
                <i className="pi pi-plus" style={{ fontSize: "1rem" }}></i>
              )}
            </span>
          ) : null}
        </div>

        {item &&
        item.children &&
        item.children.length > 0 &&
        displayCurrentChildren[item.label] ? (
          <MenuList list={item.children} />
        ) : null}
      </li>
    </>
  );
};

export default MenuItem;
