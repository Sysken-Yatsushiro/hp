export default function Tool(props) {
  return (
    <a href={props.href} className="bg-white rounded-box p-4 shadow-lg"><img src={props.src} alt="" className="w-full h-full object-scale-down" /></a>
  )
}