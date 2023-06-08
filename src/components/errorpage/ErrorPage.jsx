import React from 'react'

function ErrorPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center animate__animated animate__bounce">
        <h1 className="text-9xl font-bold text-red-500">404</h1>
        <p className="text-3xl font-medium">Page Not Found</p>
      </div>
    </div>
  )
}

export default ErrorPage