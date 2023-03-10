export const Loading = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen bg-black/[0.65] z-[45]"
      data-testid="loading"
    >
      <div className="h-screen flex items-center justify-center space-x-2">
        <div
          className="w-4 h-4 rounded-full animate-pulse bg-brand-secondary"
          data-testid="dot"
        ></div>
        <div
          className="w-4 h-4 rounded-full animate-pulse bg-brand-secondary"
          data-testid="dot"
        ></div>
        <div
          className="w-4 h-4 rounded-full animate-pulse bg-brand-secondary"
          data-testid="dot"
        ></div>
      </div>
    </div>
  )
}
