import Navbar from "./Navbar";
import Hero from "./Hero"
import Heading from "./Heading"
import SubHeading from "./SubHeading"
import Tool from "./Tool"
import ToolBox from "./ToolBox";
import SyskenIcon from "./SyskenIcon";
import Badge from "./Badge";
import pEdi from "../assets/processingEditor.png"
import pGame from "../assets/processingGame.png"
import wApp from "../assets/webApp.png"
import procon1 from "../assets/procon1.png"
import procon2 from "../assets/procon2.png"
import phoneDev from "../assets/phoneDev.png"
import logoFlutter from "../assets/logoFlutter.png"
import logoReact from "../assets/logoReact.png"
import logoVue from "../assets/logoVue.png"
import logoP5 from "../assets/logoP5.png"
import logoUnity from "../assets/logoUnity.png"
import logoUE from "../assets/logoUE.png"
import icoTeams from "../assets/icoTeams.svg"
import { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function App() {
  const [news, setNews] = useState("")

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Sysken-Yatsushiro/hp/master/news.md")
      .then(response => response.text())
      .then(setNews)
  }, [])

  return (
    <>
      <Navbar />
      <Hero className="bg-gradient-to-br from-primary to-secondary text-primary-content">
        <Heading>情報システム研究部</Heading>
        <SubHeading>プログラミング、興味ありませんか？</SubHeading>
        <p>STEAM第2演習室(図書館棟1F)にて活動中です！</p>
        <p>月~木の16:30~18:30に来てね！</p>
        <br />
        <p>質問や入部希望等は以下の連絡先、</p>
        <p>もしくはTwitter(<a href="https://twitter.com/sysken_8can" className="underline">@sysken_8can</a>)のDMまでお願いします！</p>
        <div className="glass rounded-box p-4 flex gap-4 mt-8">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          <code>mi0143shim@g.kumamoto-nct.ac.jp</code>
        </div>
        <div className="glass rounded-box p-4 flex gap-4 mt-4">
          <img src={icoTeams} alt="" className="w-6 h-6 fill-current" />
          <code>mi0143shim@kumamoto.kosen-ac.jp</code>
        </div>
        <div className="card glass mt-8">
          <div className="card-body">
            <SubHeading>新着情報</SubHeading>
            <ReactMarkdown
              className="text-left"
              children={news}
            // components={{
            //   code: Badge
            // }}
            />
          </div>
        </div>
      </Hero>

      <Hero className="bg-pink-50 text-gray-700">
        <SubHeading>どんな部活？</SubHeading>
        <div className="text-left my-5">
          <p className="my-4">主にプログラミングを楽しむ部活です！</p>
          <li>詳しいことはわからないけどなんとなくプログラミングやってみたい</li>
          <li>プログラミングの授業でわからないところがある</li>
          <li>ゲームやスマホアプリを自分でつくれたら楽しそう</li>
          <li>高スペックPCやMac、iPadを触りたい</li>
          <p className="my-4">など初心者の方や、</p>
          <li>大会で成績を残したい</li>
          <li>チームでプロダクトを開発したい</li>
          <p className="my-4">など経験者の方も大歓迎です！</p>
          <p>活動は自由参加ですので気軽に見学に来てください！</p>
        </div>
        <SubHeading>活動内容</SubHeading>
        <div className="text-left my-5">
          <li>個人開発</li>
          <li>勉強会(たまに)</li>
          <li>学内の依頼物作成(たまに)</li>
          <li>大会参加(単位が出るので4, 5年生の授業が少し楽になります)</li>
          <li>雑談　など</li>
          {/* <p className="my-4">など経験者の方も大歓迎です！</p> */}
          {/* <p>活動は自由参加ですので気軽に見学に来てください！</p> */}
        </div>
      </Hero>

      <Hero className="bg-base-200">
        <Heading>Processing</Heading>
        <SubHeading>まずはここから</SubHeading>
        <p>簡単にグラフィックが出力できるプログラミング言語。授業でみんな触る。</p>
        <p>やっておくと成績が良くなるかも…？</p>
        <img src={pEdi} alt="" className="pt-4" />
        <ToolBox>
          <Tool src={logoP5} href="https://processing.org" />
        </ToolBox>
      </Hero>
      <Hero className="bg-neutral text-neutral-content">
        <Heading>Webアプリ作成</Heading>
        <SubHeading>世間のニーズに応えろ！</SubHeading>
        <p>今、世の中はどんなアプリケーションを欲しているだろうか？</p>
        <p>webアプリを作るには、企画力とそれを実装する力、さらにデザイン力が必要だ。</p>
        <img src={wApp} alt="" className="pt-4" />
        <ToolBox>
          <Tool src={logoReact} href="https://react.dev" />
          <Tool src={logoVue} href="https://vuejs.org" />
        </ToolBox>
      </Hero>

      <Hero className="bg-accent text-accent-content">
        <Heading>ゲーム作成</Heading>
        <SubHeading>面白いゲームがない！？作るか！</SubHeading>
        <p>実は、ゲーム作りとはとても骨が折れる作業である。</p>
        <p>有名タイトルはもちろん、Steamに安売りされているようなゲームでさえ、</p>
        <p>ひとりで作るならけっこう手間がかかる。</p>
        <p>決して甘くはない道だが、乗り越えたときに得られるものは計りしれないだろう。</p>
        <img src={pGame} alt="" className="pt-4" />
        <ToolBox>
          <Tool src={logoP5} href="https://processing.org" />
          <Tool src={logoUnity} href="https://unity.com/ja" />
          <Tool src={logoUE} href="https://www.unrealengine.com/ja" />
        </ToolBox>
      </Hero>

      <Hero className="bg-base-200">
        <Heading>プロコン</Heading>
        <SubHeading>優勝のため知識を総動員！？</SubHeading>
        <p>高専プログラミングコンテストとは、自由部門、課題部門、競技部門の三部門に分かれ、</p>
        <p>全国の高専生が技術力を競い合う大会である。</p>
        <img src={procon1} alt="" className="mt-4 mb-12" />
        <p>厳しい戦いではあるが、実績づくりに加え、企業とのコネクションもできる。</p>
        <p>ここに出場することによって得られるものは多いだろう。</p>
        <p>なお、プロコンのための活動は、単位として申請できる。</p>
        <img src={procon2} alt="" className="mt-4" />
      </Hero>

      <Hero className="bg-primary text-primary-content">
        <Heading>スマホアプリ</Heading>
        <SubHeading>時代の流れに乗れ！</SubHeading>
        <p>世は、まさに大スマホ時代…</p>
        <p>デスクトップアプリを公開するよりも、スマホアプリを公開したほうが、</p>
        <p>より多くの人に使ってもらえるだろう。</p>
        <img src={phoneDev} alt="" className="mt-4" />
        <ToolBox>
          <Tool src={logoFlutter} href="https://flutter.dev/" />
          <Tool src={logoReact} href="https://reactnative.dev" />
        </ToolBox>
      </Hero>

      <footer className="footer items-center p-4 px-8 bg-neutral text-neutral-content">
        <div className="items-center grid-flow-col gap-4">
          <SyskenIcon />
          <p>Copyright &copy; 2023 - All right reserved</p>
        </div>
      </footer>
    </>
  )
}
