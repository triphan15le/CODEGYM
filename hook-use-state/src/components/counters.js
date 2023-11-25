import {useState} from 'react'

function Counter() {
  let [count, setCount] = useState(0);

  return (
    <div>
      Bạn đã nhấn {count} lần
      <div>
        <button onClick= {() => setCount(count+1)}>
          Nhấn vào đây
        </button>
      </div>
    </div>
  );
}

export default Counter;
