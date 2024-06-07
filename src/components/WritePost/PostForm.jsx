import Input from "../Input";
import Textarea from "./Textarea";

const PostForm = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col">
        <Input label="제목" type="text" id="post-title" role="input" placeholder="제목을 입력하세요." />
      </div>
      <div className="flex flex-col">
        <Textarea label="내용" id="post-content" placeholder="내용을 입력하세요." />
      </div>
    </div>
  );
};

export default PostForm;
