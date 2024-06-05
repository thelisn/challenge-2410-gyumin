import Input from "../Input";

const PostForm = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col">
        <Input label="제목" type="text" id="post-title" role="input" placeholder="제목을 입력하세요." />
      </div>
      {/* 내용 텍스트 위쪽에 정렬되도록 수정 필요 */}
      <div className="flex flex-col">
        <Input
          label="내용"
          type="textarea"
          id="post-content"
          role="input"
          placeholder="내용을 입력하세요."
          className="h-[200px] align-top block"
        />
      </div>
    </div>
  );
};

export default PostForm;
