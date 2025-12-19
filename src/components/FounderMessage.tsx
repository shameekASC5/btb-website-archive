import React from 'react'

type Props = {}

const FounderMessage = (props: Props) => {
  return (
    <div>
    {/* <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/YykjpeuMNEk?controls=1&modestbranding=1&showinfo=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe> */}
    <video
              className=" w-full h-full object-cover"
              loop
              controls
              autoPlay
              muted
            >
              <source src="/video/btb_promo_old.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
  </div>
  )
}

export default FounderMessage