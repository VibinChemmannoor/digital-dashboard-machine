import { ChevronDown, ChevronsUpDown, ChevronUp } from 'lucide-react'
import { cn } from '../../lib/cn'

/**
 * Compound table. Desktop-oriented; screens render a stacked card list on
 * mobile instead of forcing a reflow here.
 *
 *   <Table>
 *     <Table.Head><Table.Row>…<Table.HeadCell/>…</Table.Row></Table.Head>
 *     <Table.Body>…<Table.Row><Table.Cell/></Table.Row>…</Table.Body>
 *   </Table>
 */
export function Table({ className, children, ...props }) {
  return (
    <div className="w-full overflow-x-auto">
      <table
        className={cn('w-full border-collapse text-sm', className)}
        {...props}
      >
        {children}
      </table>
    </div>
  )
}

Table.Head = function TableHead({ className, children }) {
  return <thead className={cn('', className)}>{children}</thead>
}

Table.Body = function TableBody({ className, children }) {
  return (
    <tbody className={cn('divide-y divide-border', className)}>
      {children}
    </tbody>
  )
}

Table.Row = function TableRow({ className, children, ...props }) {
  return (
    <tr className={cn('transition', className)} {...props}>
      {children}
    </tr>
  )
}

/**
 * @param {{ sortable?: boolean, sortDir?: 'asc'|'desc'|null,
 *   onSort?: () => void, align?: 'left'|'center'|'right', className?: string,
 *   children?: React.ReactNode }} props
 */
Table.HeadCell = function TableHeadCell({
  sortable = false,
  sortDir = null,
  onSort,
  align = 'left',
  className,
  children,
}) {
  const SortIcon =
    sortDir === 'asc'
      ? ChevronUp
      : sortDir === 'desc'
        ? ChevronDown
        : ChevronsUpDown
  return (
    <th
      className={cn(
        'whitespace-nowrap border-b border-border px-4 py-3 text-[11px] font-semibold uppercase tracking-wide text-muted',
        align === 'right' && 'text-right',
        align === 'center' && 'text-center',
        align === 'left' && 'text-left',
        className,
      )}
    >
      {sortable ? (
        <button
          type="button"
          onClick={onSort}
          className={cn(
            'inline-flex items-center gap-1 transition hover:text-body',
            align === 'right' && 'flex-row-reverse',
          )}
        >
          {children}
          <SortIcon className="h-3.5 w-3.5" />
        </button>
      ) : (
        children
      )}
    </th>
  )
}

/**
 * @param {{ align?: 'left'|'center'|'right', className?: string,
 *   children?: React.ReactNode } & Record<string, any>} props
 */
Table.Cell = function TableCell({
  align = 'left',
  className,
  children,
  ...props
}) {
  return (
    <td
      className={cn(
        'px-4 py-3 align-middle text-sm text-body',
        align === 'right' && 'text-right',
        align === 'center' && 'text-center',
        className,
      )}
      {...props}
    >
      {children}
    </td>
  )
}
