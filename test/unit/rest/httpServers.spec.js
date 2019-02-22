describe('http servers endpoint', () => {
  const { meraki, networkId } = global

  const testUrl = 'http://requestbin.fullcontact.com/1otfr3t1'
  const webhook = {
    name: 'Test Hook',
    url: testUrl,
    sharedSecret: 'Sooo secret'
  }

  const webhookUpdate = {
    url: testUrl,
    name: 'Test Hook 2',
    sharedSecret: 'ImprovedSecret'
  }

  let createdWebhook
  let testWebhook

  it('add http server', async () => {
    const res = await meraki.addHTTPServer({ networkId, webhook })
    expect(res).toHaveProperty('id')
    expect(res).toHaveProperty('networkId')
    expect(res).toHaveProperty('name')
    expect(res).toHaveProperty('url')
    expect(res).toHaveProperty('sharedSecret')
    expect(res.name).toBe(webhook.name)
    expect(res.url).toBe(webhook.url)
    expect(res.sharedSecret).toBe(webhook.sharedSecret)

    createdWebhook = res
  })

  it('list the http servers of a network', () => {
    expect(meraki.listHTTPServers({ networkId }))
      .resolves.toHaveLength(1)
  })

  it('get a http servers of a network', () => {
    expect(meraki.getHTTPServer({ networkId, webhookId: createdWebhook.id }))
      .resolves.toMatchObject(createdWebhook)
  })

  it('update http server', async () => {
    const res = await meraki.updateHTTPServer({ networkId, webhookId: createdWebhook.id, webhook: webhookUpdate })
    expect(res).toMatchObject(webhookUpdate)
    createdWebhook = res
  })

  it('send test hook', async () => {
    const res = await meraki.sendTestWebhook({ networkId, url: testUrl })
    expect(res).toHaveProperty('id')
    expect(res).toHaveProperty('url')
    expect(res).toHaveProperty('status')
    expect(res.url).toBe(testUrl)

    testWebhook = res
  })

  it('get test status', async () => {
    expect(meraki.getWebhookTestStatus({ networkId, webhookTestId: testWebhook.id }))
      .resolves.toMatchObject(testWebhook)
  })

  it('delete http server', async () => {
    await meraki.deleteHTTPServer({ networkId, webhookId: createdWebhook.id })
  })
})
