import { ImageResponse } from 'next/og'
import { join } from 'node:path'
import { readFile } from 'node:fs/promises'
 
export default async function Image() {
  const logoData = await readFile(join(process.cwd(), '10A3.jpg'))
  const logoSrc = Uint8Array.from(logoData).buffer
 
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={logoSrc} height="100" style={{
          width: "1200px",
		  height:"650px",
        }} />
      </div>
    )
  )
}