import React from 'react'
import { createUseStyles } from 'react-jss'
import { ContentPath } from '../../components/contentPath'

const useStyles = createUseStyles({
  page: {
    height: '100%',
  },
})

export const MainContent: React.FC = () => {
  const styles = useStyles()
  return (
    <div className={styles.page}>
      <ContentPath />
    </div>
  )
}
