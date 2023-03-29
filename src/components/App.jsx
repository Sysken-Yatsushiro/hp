import Navbar from "./Navbar";
import Hero from "./Hero"
import Heading from "./Heading"
import SubHeading from "./SubHeading"
import pEdi from "../assets/processingEditor.png"
import pGame from "../assets/processingGame.png"
import wApp from "../assets/webApp.png"
import SyskenIcon from "./SyskenIcon";


export default function App() {
  return (
    <>
      <Navbar />
      <Hero className="bg-gradient-to-br from-primary to-secondary text-primary-content">
        <Heading>情報システム研究部</Heading>
        <SubHeading>プログラミング、興味ありませんか？</SubHeading>
        <div class="mockup-code border-primary-content w-full max-w-xs flex-1 border-2 border-opacity-20 bg-transparent pb-6 text-left text-current lg:mx-0">
          <pre data-prefix="$">
            <code className="font-bold">共通教育科棟 2F</code>
          </pre>
          <pre data-prefix="$">
            <code className="font-bold">多目的セミナー室</code>
          </pre>
          <pre data-prefix="$">
            <code>------------------</code>
          </pre>
          <pre data-prefix="$">
            <code className="font-bold">月～木</code>
          </pre>
          <pre data-prefix="$">
            <code className="font-bold">16:30～18:30</code>
          </pre>
        </div>
      </Hero>
      <Hero className="bg-base-200">
        <Heading>Processing</Heading>
        <SubHeading>まずはここから</SubHeading>
        <p>簡単にグラフィックが出力できるプログラミング言語。授業でみんな触る。</p>
        <figure className="pt-4"><img src={pEdi} alt="" /></figure>
      </Hero>
      <Hero className="bg-neutral text-neutral-content">
        <Heading>Webアプリ作成</Heading>
        <SubHeading>世間のニーズに応えろ！</SubHeading>
        <p>デザインにこだわったTodoアプリ。</p>
        <figure className="pt-4"><img src={wApp} alt="" /></figure>
      </Hero>
      <Hero className="bg-accent text-accent-content">
        <Heading>ゲーム作成</Heading>
        <SubHeading>面白いゲームがない！？作るか！</SubHeading>
        <p>落ちてくる隕石をタイピングで撃ち落とすゲーム。</p>
        <figure className="pt-4"><img src={pGame} alt="" /></figure>
      </Hero>
      <Hero className="bg-clip-content">
        <Heading>プロコン</Heading>
        <SubHeading>優勝のため知識を総動員！？</SubHeading>
      </Hero>
      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <div className="items-center grid-flow-col gap-4">
          <SyskenIcon />
          <p>Copyright © 2023 - All right reserved</p>
        </div>
      </footer>
    </>
  )
}