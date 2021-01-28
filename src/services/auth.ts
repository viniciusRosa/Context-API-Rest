interface Response {
    token: string;
    user: {
        name: string;
        email: string;
    }
}

export function signIn(): Promise<Response> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'sfsdfssfsfsdfsdfsdf',
                user: {
                    name: 'vinicius rosa',
                    email: 'viniciusrosa@gmail'
                }
            })
        }, 100)
    })
}