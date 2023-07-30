import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'

export type PaginationProps = {
  currentPage: number
  totalPages: number
  onChangePage: (page: number) => void
  isNextPage?: boolean
  isPreviousPage?: boolean
}

export const Pagination = ({
  currentPage,
  totalPages,
  onChangePage,
  isNextPage,
  isPreviousPage,
}: PaginationProps) => {
  const [page, setPage] = useState(currentPage)

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1)
    }
  }

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  useEffect(() => {
    onChangePage(page)
  }, [page, onChangePage])

  useEffect(() => {
    setPage(currentPage)
  }, [currentPage])

  return (
    <div className="mx-auto w-full p-2 sm:p-4">
      <nav
        aria-label="Pagination"
        className="inline-flex -space-x-px rounded-md border-gray-200 bg-gray-300 shadow-sm"
      >
        <button
          disabled={currentPage <= 1 ? !isPreviousPage : isPreviousPage}
          onClick={handlePreviousPage}
          type="button"
          className="inline-flex items-center rounded-l-md border bg-brand-primary p-2 text-sm font-semibold text-brand-light hover:bg-brand-secondary disabled:bg-gray-500"
        >
          <span className="sr-only">Anterior</span>
          <Icon icon="ic:baseline-keyboard-arrow-left" width={32} />
        </button>
        <button
          type="button"
          aria-current="page"
          className="inline-flex items-center border px-4 py-2 text-sm font-semibold"
        >
          Pagina Atual {currentPage}
        </button>

        <button
          disabled={isNextPage}
          onClick={handleNextPage}
          type="button"
          className="inline-flex items-center rounded-r-md border bg-brand-primary p-2 text-sm font-semibold text-brand-light hover:bg-brand-secondary disabled:bg-gray-500"
        >
          <span className="sr-only">Proximo</span>
          <Icon icon="ic:baseline-keyboard-arrow-right" width={32} />
        </button>
      </nav>
    </div>
  )
}
