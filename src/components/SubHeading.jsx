export default function SubHeading(props) {
  return (
    <p className="mb-5 text-2xl md:text-3xl font-bold">
      {props.children}
    </p>
  )
}