type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="px-5">{children}</div>
}

export default Container
