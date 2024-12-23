export default defineEventHandler((event) => {
  return {
    code: 200,
    message: 'Hello, World!',
    data: {
      title: 'Hello, World!',
      content: 'This is a test api.',
      date: new Date().toISOString(),
    },
  }
})
