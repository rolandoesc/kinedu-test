import { LoaderBall } from "../ui"

const LoadingView = () => {
  return (
    <div id="loading" className="fade-in fade-out flex h-screen w-full m-auto items-center">
      <div className="ball__loader">
        <LoaderBall classes="ball__1"/>
        <LoaderBall classes="ball__2"/>
        <LoaderBall classes="ball__3"/>
      </div>

    </div>
  )
}

export default LoadingView;