import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import CircularProgress from '@mui/material/CircularProgress'
import Skeleton from '@mui/material/Skeleton'
import { useTranslation } from 'react-i18next'

export default function Loading({ nCols = 3 }) {
  const { t } = useTranslation()
  const nRows = 3
  return (
    <>
      {Array(nRows)
        .fill()
        .map((row) => (
          <TableRow key={row}>
            {Array(nCols)
              .fill()
              .map((v, i) => (
                <TableCell key={i}>
                  <Skeleton animation="wave" height="2rem" />
                </TableCell>
              ))}
          </TableRow>
        ))}
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress />
      </div>
    </>
  )
}

