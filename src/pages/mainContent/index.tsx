import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  page: {
    backgroundColor: '#D0D9D6',
    height: '100%',
  },
})

export const MainContent: React.FC = () => {
  const styles = useStyles()
  return <div className={styles.page}>content</div>
}
