import { useRef, useState } from 'react'
import { UploadCloud } from 'lucide-react'
import { cn } from '../../lib/cn'

/**
 * Drag-and-drop file area with a click-to-browse fallback.
 * @param {{
 *   onFiles?: (files: File[]) => void,
 *   accept?: string,
 *   multiple?: boolean,
 *   title?: React.ReactNode,
 *   hint?: React.ReactNode,
 *   className?: string,
 * }} props
 */
export function Dropzone({
  onFiles,
  accept,
  multiple = false,
  title = 'Drag a File or click a browse',
  hint = 'File with up to 100 rows works best',
  className,
}) {
  const inputRef = useRef(null)
  const [dragging, setDragging] = useState(false)

  const emit = (fileList) => {
    const files = Array.from(fileList || [])
    if (files.length) onFiles?.(files)
  }

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault()
        setDragging(true)
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={(e) => {
        e.preventDefault()
        setDragging(false)
        emit(e.dataTransfer.files)
      }}
      onClick={() => inputRef.current?.click()}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') inputRef.current?.click()
      }}
      className={cn(
        'flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed px-6 py-10 text-center transition',
        dragging
          ? 'border-primary-500 bg-primary-50/60 dark:bg-primary-900/20'
          : 'border-border-strong bg-surface-2 hover:border-primary-400 hover:bg-surface-3',
        className,
      )}
    >
      <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-surface text-primary-600 shadow-card">
        <UploadCloud className="h-5 w-5" />
      </span>
      <p className="text-sm font-medium text-primary-600">{title}</p>
      {hint && <p className="mt-1 text-xs text-muted">{hint}</p>}
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        className="hidden"
        onChange={(e) => emit(e.target.files)}
      />
    </div>
  )
}
