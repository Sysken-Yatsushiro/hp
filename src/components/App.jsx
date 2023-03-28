import Navbar from "./Navbar";
import Hero from "./Hero"
import Heading from "./Heading"
import SubHeading from "./SubHeading"
import pEdi from "../assets/processingEditor.png"
import SyskenIcon from "./SyskenIcon";


export default function App() {
  return (
    <>
      <Navbar />
      <Hero className="bg-gradient-to-br from-primary to-secondary text-primary-content">
        <Heading>情報システム研究部</Heading>
        <SubHeading>プログラミング、興味ありませんか？</SubHeading>
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
      </Hero>
      <Hero className="bg-accent text-accent-content">
        <Heading>ゲーム作成</Heading>
        <SubHeading>面白いゲームがない！？作るか！</SubHeading>
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