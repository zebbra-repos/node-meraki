describe('authentication endpoint', () => {
  const { meraki } = global

  it('login into the frontend', async () => {
    return meraki.login({ email: 'test@email.com', password: 'MY_SUPER_SECURE_PASSWORD' })
  })
})
