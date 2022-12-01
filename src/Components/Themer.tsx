import { MantineProvider } from '@mantine/core'

const Themer = ({ children }) => {
  return (
    <MantineProvider
      theme={{
        colorScheme: 'dark',
        spacing: { xs: 10, sm: 20, md: 30, lg: 40, xl: 50 },
      }}
    >
      {children}
    </MantineProvider>
  )
}
