let appData={
    name: 'Gmail',
    mailboxes: ['inbox',
                'junk',
                'sent',
                'drafts'],
    emailInProgress: [
                    {to: "personName", from: "Me", subject: "Hello", body: "this is an added draft email"}],
    contacts: [
        {name: 'Erin', lastMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {name: 'Matt', lastMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {name: 'Julian', lastMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    ],
    inbox: [
        {to: "personName", from: "Me", subject: "Hello", body: "body text"},
        {to: "personName", from: "Me", subject: "Hello", body: "body text"},
        {to: "personName", from: "Me", subject: "Hello", body: "body text"}
    ],
    sent: [
        {to: "personName", from: "Me", subject: "Hello", body: "body text"},
        {to: "personName", from: "Me", subject: "Hello", body: "body text"},
        {to: "personName", from: "Me", subject: "Hello", body: "body text"}
        ],
    drafts: [
            {to: "personName", from: "Me", subject: "Hello", body: "body text"},
            {to: "personName", from: "Me", subject: "Hello", body: "body text"}
        ],
}
appData.mailboxes
appData.emails
console.log (appData.inbox [1])
appData.sent[0].status = "Marked Sent";
appData.drafts.push(appData.emailInProgress)