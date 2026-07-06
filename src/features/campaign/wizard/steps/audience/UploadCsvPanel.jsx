import { Download } from 'lucide-react'
import { Dropzone } from '../../../../../components/ui'
import { useWizard } from '../../../../../hooks/useWizard'
import { WIZARD_ACTIONS } from '../../../../../context/wizardReducer'

/** CSV upload dropzone (screen 5). */
export function UploadCsvPanel() {
  const { dispatch } = useWizard()

  return (
    <div>
      <Dropzone
        accept=".csv"
        onFiles={(files) =>
          dispatch({
            type: WIZARD_ACTIONS.UPDATE_AUDIENCE,
            payload: { csvFile: files[0]?.name ?? 'contacts.csv' },
          })
        }
      />
      <a
        href="#"
        className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:underline"
      >
        <Download className="h-4 w-4" />
        Download a sample file
      </a>
    </div>
  )
}
