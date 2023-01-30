

export const CardEstadisticaItem = ({progress, barTitle}) => {
  return (
    <>
        <div className="mb-2">
            <div className="clearfix">
            <span className="float-start">{barTitle}</span>
            <span className="float-end">{progress}%</span>
            </div>
            <div className="progress" role="progressbar">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    </>
  )
}
