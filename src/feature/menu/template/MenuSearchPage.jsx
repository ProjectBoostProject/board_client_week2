import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MenuListItem from "../component/MenuListItem";
import MenuSearchBar from "../component/MenuSearchBar";
import { getMenuSearchListAPI } from "../utils/menu.api";

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 20px 0 0 0;
`;

const MenuSearchPage = () => {
  const router = useRouter();
  const [searchMenuName, setSearchMenuName] = useState("");
  const [menuList, setMenuList] = useState([]);
  useEffect(() => {
    if (searchMenuName.length > 0)
      getMenuSearchListAPI(searchMenuName).then((data) => {
        setMenuList(data);
      });
    else {
      setMenuList([]);
    }
  }, [searchMenuName]);

  const onClick = (id) => {
    router.push(`${id}`);
  };
  return (
    <Container>
      <MenuSearchBar
        value={searchMenuName}
        onChange={({ target }) => {
          setSearchMenuName(target.value);
        }}
      />
      {menuList.map(({ id, boardName, introduce }) => (
        <MenuListItem
          menuName={boardName}
          introduce={introduce}
          onClick={() => onClick(id)}
        />
      ))}
    </Container>
  );
};

export default MenuSearchPage;
