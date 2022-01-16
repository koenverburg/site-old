export type Props = {
  content: string
}
export const Paragraph = (props: Props) => {
  return (
    <p className="text-slate-500 text-medium">{props.content}</p>
  )
}
