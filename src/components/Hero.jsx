export default function Hero(props) {
  return (
    <div className={"hero min-h-[60vh] md:min-h-screen " + props.className}>
      <div className="hero-content gap-0 flex-col mx-auto max-w-2xl text-center">
        {props.children}
      </div>
    </div>
  )
}