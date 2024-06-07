import { useNavigate } from "react-router";
import Button from "@/components/Button";
import PostForm from "@/components/WritePost/PostForm";
import useWrite from "@/hooks/useWrite";

const WritePost = () => {
  const navigate = useNavigate();
  const { writePost, isLoading, error } = useWrite();

  const handleClickBackButton = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = e.target.elements["post-title"].value;
    const content = e.target.elements["post-content"].value;
    const date = new Date().toISOString().split("T")[0];
    const postData = { title, content, date };
    
    await writePost(postData);

    navigate("/");
  };

  return (
    <div className="mx-4">
      <div className="flex justify-between mt-4 mb-4">
        <Button onClick={handleClickBackButton} text="뒤로" className="nav-button" />
      </div>

      <form onSubmit={handleSubmit}>
        <PostForm />
        <div className="flex justify-center mt-8">
          <Button type="submit" text="작성하기" className="execute-button" />
        </div>
      </form>

      {isLoading && <p>로딩 중...</p>}
      {error && <p>에러 발생: {error.message}</p>}
    </div>
  );
};

export default WritePost;
