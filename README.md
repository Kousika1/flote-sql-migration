# flote-migration

### STEP 1: Command to run the script

Run the migration file in the application to add tables and columns

- Create a new database in mysql
- Create folder "migrations" under [microservices/users-svc/src](https://github.com/adminrapidinnovation/flote-backend/tree/main/microservices/users-svc/src) in flote-backend repository
- Add the file [src/utils/1628532181926-test.ts](src/utils/1628532181926-test.ts) in "migrations" folder
- Run command `npm run migration:run` to add tables and columns in the new database
### STEP 2: Command to run the script

```
npm run migration:data
```
