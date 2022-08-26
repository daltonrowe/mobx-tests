interface DummyComponentProps {
  children: JSX.Element | JSX.Element[]
}

function DummyComponent(props: DummyComponentProps) {
  const { children } = props

  return (
    <div>
      {children}
    </div>
  )
}

export default DummyComponent