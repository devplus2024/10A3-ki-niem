import { ImageResponse } from 'next/og'
export const runtime = 'edge'
 
// Image metadata
export const alt = '10A3 Ảnh Kỉ Niệm'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
// Image generation
export default async function Image() {
  // Font
  const logoSrc = await fetch(new URL('./10A3.jpg', import.meta.url)).then(
    (res) => res.arrayBuffer()
  )
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={logoSrc} style={{
          width: '100%',
          height: '100%',          
        }} />
      </div>
    ),
    // ImageResponse options
    
  )
}