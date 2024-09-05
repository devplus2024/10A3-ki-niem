import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export default async function Image() {
  const logoSrc = await fetch(new URL('./10A3.jpg', import.meta.url)).then(
    (res) => res.arrayBuffer()
  )
 
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={logoSrc} style={{
          height: "630px" ,
		  width: "1200px",
        }}  />
      </div>
    )
  )
}