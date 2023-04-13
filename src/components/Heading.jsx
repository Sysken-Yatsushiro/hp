export default function Heading(props) {
  return (
    <p className="mb-2 text-4xl md:text-6xl font-extrabold">
      {props.children}
    </p>
  )
}