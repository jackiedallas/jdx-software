import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
    width: 180,
    height: 180,
}
export const contentType = 'image/png'

// Image generation
export default function AppleIcon() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px',
                    borderRadius: '20px',
                }}
            >
                <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xXzEpIj4KPHBhdGggZD0iTTI3OS4zMSAyMTIuMzJMMjUzLjExIDE3Ni42OEgyNzkuMzFMMjkzLjA4IDE5NS40M0wzMzEuNzIgMjQ4LjA2SDMwNi4wOEwyOTIuNjcgMjMxLjExTDI4MS4zIDI0OC4wNkgyNTQuMjVMMjc5LjMxIDIxMi4zMloiIGZpbGw9IiMwMDlGRkYiLz4KPHBhdGggZD0iTTMyMS40MSAxOTcuNDFDMzI1Ljg3IDE5MC41IDMzMC4zNCAxODMuNTggMzM0LjggMTc2LjY3SDMwOC4wM0MzMDMuNjYgMTgzLjU4IDI5OS4yOCAxOTAuNSAyOTQuOTEgMTk3LjQxSDMyMS40MkgzMjEuNDFaIiBmaWxsPSIjMDBFQ0ZGIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMV8xIj4KPHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSI1MDAiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPHN2Zz4K"
                    alt="JDX Software"
                    width="140"
                    height="140"
                    style={{
                        objectFit: 'contain',
                    }}
                />
            </div>
        ),
        {
            ...size,
        }
    )
}