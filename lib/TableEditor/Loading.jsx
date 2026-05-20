import { CircularProgress, Skeleton, TableCell, TableRow } from "@mui/material"

export default function Loading({ nCols = 3 }) {
  const nRows = 3
  return (
    <>
      {Array(nRows)
        .fill()
        .map((_, rowIndex) => (
          <TableRow key={rowIndex}>
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
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <CircularProgress />
      </div>
    </>
  )
}
