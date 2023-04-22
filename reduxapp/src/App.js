import { useSelector, useDispatch } from "react-redux";
import { adduser } from "./redux/modules/user";
import { deluser } from "./redux/modules/user";
import { settitle } from "./redux/modules/title";
import { setbody } from "./redux/modules/body";
import { resetbody } from "./redux/modules/body";
import { resettitle } from "./redux/modules/title";

function App() {
  const title = useSelector((store) => store.reducer_title);
  const body = useSelector((store) => store.reducer_body);
  const user = useSelector((store) => store.reducer_user);
  const dispatch = useDispatch();

  const titlechange = (e) => {
    dispatch(settitle(e));
  };

  const bodychange = (e) => {
    dispatch(setbody(e));
  };

  const addbtn = () => {
    dispatch(adduser(title, body));
    dispatch(resettitle(""));
    dispatch(resetbody(""));
  };

  const deletebtn = (id) => {
    dispatch(deluser(id));
  };

  return (
    <div className="최상단">
      <div>마이투두리스트</div>
      <div>리액트</div>
      <div>
        제목
        <input type="text" value={title} onChange={titlechange} />
        내용
        <input type="text" value={body} onChange={bodychange} />
      </div>
      <button onClick={addbtn}>추가하기</button>
      <div>
        <h2>Working</h2>
        {user.map((user) => {
          return (
            <div key={user.id}>
              {user.title}-{user.body}
              <button onClick={() => deletebtn(user.id)}>삭제하기</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
