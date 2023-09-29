import { createUseStyles } from 'react-jss'
import { Layout, Menu } from 'antd'
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import { MainContent } from './pages/mainContent'

const useStyles = createUseStyles({
  container: {
    height: '100%',
  },
  test: {
    background: '#94A1A6',
    height: '100%',
  },
})

function App() {
  const styles = useStyles()
  const { Sider, Content } = Layout
  return (
    <>
      <Layout className={styles.container}>
        <Sider
          breakpoint='md'
          collapsedWidth='0'
          onBreakpoint={(broken) => {
            console.log(broken)
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type)
          }}
        >
          <Menu
            // theme='dark'
            className={styles.test}
            mode='inline'
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'nav 1',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'nav 2',
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'nav 3',
              },
            ]}
          />
        </Sider>
        <Content>
          <MainContent />
        </Content>
      </Layout>
    </>
  )
}

export default App
