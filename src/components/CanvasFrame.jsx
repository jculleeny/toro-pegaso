import { Outlet } from 'react-router-dom'

const CanvasFrame = () => {
  return (
    <div className="canvas-frame">
      <div className="canvas-frame-container">
        <Outlet />
      </div>
    </div>
  )
}

export default CanvasFrame