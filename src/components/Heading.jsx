export default function Heading(props) {
  return (
    <h2 className="mt-20 mb-2 text-4xl md:text-6xl font-extrabold">
      {props.children}
    </h2>
  )
}