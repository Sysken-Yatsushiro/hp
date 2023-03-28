export default function SubHeading(props) {
  return (
    <h2 className="mb-5 text-2xl md:text-3xl font-bold">
      {props.children}
    </h2>
  )
}