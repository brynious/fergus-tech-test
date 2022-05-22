# Fergus Tech Test

## Run Locally

1. Clone repo to local machine.
2. Run `npm install` to create node_modules.
3. Create file named `.env` and add the MongoDB connection string.
The file should look like `MONGODB_URI=mongodb+srv://<name>:<password>@cluster0.0ejrk.mongodb.net/?retryWrites=true&w=majority`
4. Run `npm run app`. You should see server running on port 8082.

Object schema's for Jobs and Notes can be found in the `models` folder.
API endpoints can be found in `routes/api` folder.
