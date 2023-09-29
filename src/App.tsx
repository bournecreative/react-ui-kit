import { createUseStyles } from 'react-jss'
import { Layout, Menu } from 'antd'
import {
  HomeOutlined,
  LayoutOutlined,
  SubnodeOutlined,
} from '@ant-design/icons'
import { MainContent } from './pages/mainContent'
import type { MenuProps } from 'antd'

type MenuItem = Required<MenuProps>['items'][number]

const useStyles = createUseStyles({
  container: {
    height: '100%',
  },
  sideBar: {
    background: '#94A1A6',
    height: '100%',
    '& .ant-menu-item-active': {
      backgroundColor: '#687273',
    },
    '& .ant-menu-item-selected': {
      backgroundColor: '#687273 !important',
      color: '#f5f5f5',
    },
  },
  content: {
    backgroundColor: '#D0D9D6',
    padding: '1rem',
  },
})

function App() {
  const styles = useStyles()
  const { Sider, Content } = Layout

  const getItem = (
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem => {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem
  }

  const items: MenuProps['items'] = [
    getItem('Home', 'sub1', <HomeOutlined />),
    getItem(
      'Components',
      'sub2',
      <LayoutOutlined />,
      [
        getItem('component 1', 'sub3', <SubnodeOutlined />),
        getItem('component 2', 'sub4', <SubnodeOutlined />),
      ],
      'group',
    ),
  ]

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
          width={240}
        >
          <Menu
            className={styles.sideBar}
            mode='inline'
            defaultSelectedKeys={['1']}
            items={items}
            // items={[
            //   {
            //     key: '1',
            //     icon: <HomeOutlined />,
            //     label: 'Home',
            //   },
            //   {
            //     key: '2',
            //     icon: <VideoCameraOutlined />,
            //     label: 'nav 2',
            //   },
            //   {
            //     key: '3',
            //     icon: <UploadOutlined />,
            //     label: 'nav 3',
            //   },
            // ]}
          />
        </Sider>
        <Content className={styles.content}>
          <MainContent />
        </Content>
      </Layout>
    </>
  )
}

export default App
