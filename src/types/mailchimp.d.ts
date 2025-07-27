declare module '@mailchimp/mailchimp_marketing' {
  interface MailchimpConfig {
    apiKey: string
    server: string
  }

  interface ListMemberData {
    email_address: string
    status: 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending'
    tags?: string[]
  }

  interface MailchimpLists {
    addListMember(listId: string, memberData: ListMemberData): Promise<any>
  }

  interface MailchimpClient {
    setConfig(config: MailchimpConfig): void
    lists: MailchimpLists
  }

  const mailchimp: MailchimpClient
  export default mailchimp
}