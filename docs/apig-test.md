# CREATE NEW USER
```
awspersonal aws cognito-idp sign-up \
--region us-west-2 \
--client-id 3n4s32ooc692euagborkbflic \
--username xxx@xxx.xx \
--password yyy
```

# AUTH USER
```
awspersonal aws cognito-idp admin-confirm-sign-up \
--region us-west-2 \
--user-pool-id us-west-2_zR4wCNYxm \
--username xxx@xxx.xx
```

# TEST ACCESS FOR USER
```
./node_modules/.bin/apig-test \
--username='xxx@xxx.xx' \
--password='yyy' \
--user-pool-id='us-west-2_zR4wCNYxm' \
--app-client-id='3n4s32ooc692euagborkbflic' \
--cognito-region='us-west-2' \
--identity-pool-id='us-west-2:d7d78b9f-a4ba-4bfa-bb4a-93baa7f80585' \
--invoke-url='https://j4lxvics67.execute-api.us-west-2.amazonaws.com/prod' \
--api-gateway-region='us-west-2' \
--path-template='/notes' \
--method='POST' \
--body='{"content":"hello world","attachment":"hello.jpg"}'
```