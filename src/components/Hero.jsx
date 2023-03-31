export default function Hero(props) {
  return (
    <div className={"hero min-h-[60vh] md:min-h-[80vh] " + props.className}>
      <div className="hero-content gap-0 flex-col py-20 mx-auto max-w-2xl text-center">
        {props.children}
      </div>
    </div>
  )
}