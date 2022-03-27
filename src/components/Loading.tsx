const sty: React.CSSProperties = {
    position: `fixed`,
    zIndex: 999,
    inset: 0,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
}
const Loading = () => {
  return (
      <div style={sty}>
          <img  src="images/audio.svg" alt="loading" />
      </div>
  )
}

export default Loading