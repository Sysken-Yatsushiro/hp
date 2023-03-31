export default function ToolBox(props) {
  return (
    <>
      <p className="font-bold mt-12 mb-4">ツール</p>
      <div className="flex gap-8 h-16 md:h-20 justify-center">{props.children}</div>
    </>
  )
}