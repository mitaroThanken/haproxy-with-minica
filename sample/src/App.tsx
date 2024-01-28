import { useEffect, useState } from 'react'
import { DateTime } from 'luxon';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

class HelloDto {
  message: string;
  current: DateTime;

  constructor(json: unknown) {
    // 丁寧にガードかけるならこんな感じ
    if (json === undefined) throw new Error("json is undefined");
    if (json === null) throw new Error("json is null");
    if (typeof json !== "object") throw new Error("json is not object");
    if (!("message" in json) || json.message === undefined) throw new Error("json.message is not defined");
    if (!("current" in json) || json.current === undefined) throw new Error("json.current is not defined");
    if (json.message === null) throw new Error("json.message is null");
    if (json.current === null) throw new Error("json.current is null");
    if (typeof json.message !== "string") throw new Error("json.message is not string");
    if (typeof json.current !== "string") throw new Error("json.current is not string");

    // ここまで到達したなら、json.message と json.current はともに何らかの string
    this.message = json.message;
    this.current = DateTime.fromISO(json.current);

    // json.current に与えられた時刻が不正であったかをチェックするなら
    if (!this.current.isValid) throw new Error("json.current is not valid");
  }
}

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // バックエンドからメッセージと「現在時刻」を受け取ってみる
    void (async () => {
      const response = await fetch("/api/hello");
      const json = await response.json();
      const dto = new HelloDto(json);
      console.info(`current from dto: ${dto.current.toLocaleString(DateTime.DATETIME_HUGE)}`);
      console.info(dto.current);
    })();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
