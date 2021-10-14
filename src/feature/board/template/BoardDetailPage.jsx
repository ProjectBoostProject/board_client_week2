import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import DetailHeader from "../component/DetailHeader";
import Reply from "../../reply/template/Reply";
import { getBoardAPI } from "../utils/board.api";

const Container = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin-right: auto;
  margin-left: auto;
`;
const Content = styled.div`
  width: 100%;
  min-height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  margin-bottom: 20px;

  color: #000;
`;

const BoardDetailPage = () => {
  const router = useRouter();
  const { boardId } = router.query;

  const [board, setBoard] = useState(null);
  useEffect(() => {
    getBoardAPI(boardId).then((b) => setBoard(b));
  }, [boardId]);

  return board ? (
    <Container>
      <DetailHeader
        id={boardId}
        title={board.title}
        writer={board.writer}
        updatedAt={board.updatedAt}
        password={board.password}
      />
      <Content>{board.content}</Content>
      <Reply />
    </Container>
  ) : null;
};

export default BoardDetailPage;
