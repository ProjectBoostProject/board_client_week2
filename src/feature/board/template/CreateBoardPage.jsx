import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import styled from "styled-components";
import { createBoardAPI } from "../utils/board.api";

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 20px;
`;

const UserInfoSection = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 12px;
`;

const Input = styled.input`
  width: 200px;
  height: 20px;

  margin-right: 8px;
  padding: 4px;
`;

const Title = styled.input`
  width: 80%;
  height: 32px;

  margin-bottom: 20px;
  padding: 0 8px;
`;

const Content = styled.textarea`
  width: 80%;
  height: 300px;

  padding: 8px;
  margin-bottom: 12px;

  resize: none;
`;

const CreateBoardPage = () => {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = () => {
    createBoardAPI(writer, password, title, content);
    router.push("/boards");
  };
  return (
    <Container>
      <UserInfoSection>
        <Input
          placeholder="작성자"
          value={writer}
          onChange={({ target }) => {
            setWriter(target.value);
          }}
        />
        <Input
          placeholder="password"
          value={password}
          onChange={({ target }) => {
            setPassword(target.value);
          }}
        />
      </UserInfoSection>
      <Title
        placeholder="제목"
        value={title}
        onChange={({ target }) => {
          setTitle(target.value);
        }}
      />
      <Content
        placeholder="내용을 입력하세요"
        value={content}
        onChange={({ target }) => {
          setContent(target.value);
        }}
      />
      <button type="button" onClick={onSubmit}>
        등록
      </button>
    </Container>
  );
};

export default CreateBoardPage;
