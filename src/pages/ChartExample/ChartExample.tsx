import React from 'react'
import { createUseStyles } from 'react-jss'
import { BarChart } from '../../components/barChart/BarChart'
import { data } from '../../components/barChart/data'
const useStyles = createUseStyles({
  page: {
    height: '100%',
    width: '100%',
  },
})

export const ChartExample: React.FC = () => {
  const styles = useStyles()
  return (
    <div className={styles.page}>
      <BarChart elementId='barChart' items={data} />
    </div>
  )
}
