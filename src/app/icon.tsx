import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
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
                    padding: '4px',
                }}
            >
                <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA1MDAgNTAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMV8xKSI+CjxwYXRoIGQ9Ik0yNzkuMzEgMjEyLjMyTDI1My4xMSAxNzYuNjhIMjc5LjMxTDI5My4wOCAxOTUuNDNMMzMxLjcyIDI0OC4wNkgzMDYuMDhMMjkyLjY3IDIzMS4xMUwyODEuMyAyNDguMDZIMjU0LjI1TDI3OS4zMSAyMTIuMzJaIiBmaWxsPSIjMDA5RkZGIi8+CjxwYXRoIGQ9Ik0zMjEuNDEgMTk3LjQxQzMyNS44NyAxOTAuNSAzMzAuMzQgMTgzLjU4IDMzNC44IDE3Ni42N0gzMDguMDNDMzAzLjY2IDE4My41OCAyOTkuMjggMTkwLjUgMjk0LjkxIDE5Ny40MUgzMjEuNDJIMzIxLjQxWiIgZmlsbD0iIzAwRUNGRiIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzFfMSI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="
                    alt="JDX Software"
                    width="24"
                    height="24"
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