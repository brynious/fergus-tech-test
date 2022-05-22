# Fergus Tech Test

## Run Locally

1. Clone repo to local machine.
2. Run `npm install` to create node_modules.
3. Create file named `.env` and add the MongoDB connection string.
The file should look like `MONGODB_URI=mongodb+srv://<name>:<password>@cluster0.0ejrk.mongodb.net/?retryWrites=true&w=majority`
4. Run `npm run app`. You should see server running on port 8082.

Object schema's for Jobs and Notes can be found in the `models` folder.

API endpoints can be found in `routes/api` folder.

## Example API Calls

### GET /api/jobs

Get all jobs.

Example: http://localhost:8082/api/jobs

Response body:

```
[
    {
        "_id": "6289a872f399be5bc0e786fd",
        "title": "Construct Bridge",
        "customer_name": "Bryn",
        "status": "to_priced",
        "job_num": 1,
        "created_at": "2022-05-22T03:05:22.359Z",
        "updated_date": "2022-05-22T03:05:22.359Z",
        "__v": 0
    },
    {
        "_id": "6289995176956b6294910d90",
        "title": "Build Swimming Pool",
        "status": "completed",
        "description": "You know, for the kids!",
        "customer_name": "Alex",
        "customer_mobile": "0215555555",
        "job_num": 2,
        "created_at": "2022-05-22T02:00:49.339Z",
        "updated_date": "2022-05-22T02:00:49.339Z",
        "__v": 0
    }
]
```

### GET /api/jobs?sortBy=<sort_field>&order=<1|-1>

Get all jobs, sorted by a specific field and ordered descending or ascending.

Example: http://localhost:8082/api/jobs/?sortBy=job_num&order=-1

Response body:

```
[
    {
        "_id": "6289995176956b6294910d90",
        "title": "Build Swimming Pool",
        "status": "completed",
        "description": "You know, for the kids!",
        "customer_name": "Alex",
        "customer_mobile": "0215555555",
        "job_num": 2,
        "created_at": "2022-05-22T02:00:49.339Z",
        "updated_date": "2022-05-22T02:00:49.339Z",
        "__v": 0
    },
    {
        "_id": "6289a872f399be5bc0e786fd",
        "title": "Construct Bridge",
        "customer_name": "Bryn",
        "status": "to_priced",
        "job_num": 1,
        "created_at": "2022-05-22T03:05:22.359Z",
        "updated_date": "2022-05-22T03:05:22.359Z",
        "__v": 0
    }
]
```

### GET /api/jobs/<job_status>

Get all jobs, filtered by a specific job status.

Example: http://localhost:8082/api/jobs/completed

Response body:

```
[
    {
        "_id": "6289a872f399be5bc0e786fd",
        "title": "help?",
        "customer_name": "bryn",
        "status": "completed",
        "job_num": 9,
        "created_at": "2022-05-22T03:05:22.359Z",
        "updated_date": "2022-05-22T03:05:22.359Z",
        "__v": 0
    }
]
```

### POST /api/jobs

Post a new job.

Example: http://localhost:8082/api/jobs

Example Body:

```
{
    "title": "Test job",
    "status": "to_priced",
    "description": "Yet another test job",
    "customer_name": "Bryn",
    "customer_mobile": "124124124"
}
```

Response Body:

```
{
    "success": "Job added successfully"
}
```

### PUT /api/jobs/<db_id>

Upload updated fields for a specific job.

Example: http://localhost:8082/api/jobs/6288c11d9aa65946c352b227

Example Body:

```
{
    "status": "active"
}
```

Response Body:

```
{
    "success": "Job updated successfully"
}
```

### DELETE /api/jobs/<db_id>

Delete a specific job.

Example: http://localhost:8082/api/jobs/6288c11d9aa65946c352b227

Response body:

```
{
    "success": "Job entry deleted successfully"
}
```

### GET /api/notes

Get all notes in collection.

Example: http://localhost:8082/api/notes

Response body:

```
[
    {
        "_id": "6288e5b6d4ba6b50752117db",
        "job_id": "6288e2b729b4af4f2043e73d",
        "content": "Note 3",
        "created_date": "2022-05-21T13:14:30.694Z",
        "updated_date": "2022-05-21T13:14:30.694Z",
        "__v": 0
    },
    {
        "_id": "6289fc23519d745781d584db",
        "job_id": "6288e146961b1a4dab289f49",
        "content": "This jobs needs to be done ASAP! :)",
        "created_date": "2022-05-22T09:02:27.899Z",
        "updated_date": "2022-05-22T09:02:27.899Z",
        "__v": 0
    }
]
```

### GET /api/notes/<job_id>

Get all notes for a specific job.

Example: http://localhost:8082/api/notes/job/6288c11d9aa65946c352b227

Response body:

```
[
    {
        "_id": "6289fc23519d745781d584db",
        "job_id": "6288e146961b1a4dab289f49",
        "content": "This jobs needs to be done ASAP! :)",
        "created_date": "2022-05-22T09:02:27.899Z",
        "updated_date": "2022-05-22T09:02:27.899Z",
        "__v": 0
    }
]
```

### GET /api/notes/<note_id>

Get a specific note.

Example: http://localhost:8082/api/notes/6288c11d9aa65946c352b227

Response body:

```
{
    "_id": "6289fc23519d745781d584db",
    "job_id": "6288e146961b1a4dab289f49",
    "content": "This jobs needs to be done ASAP! :)",
    "created_date": "2022-05-22T09:02:27.899Z",
    "updated_date": "2022-05-22T09:02:27.899Z",
    "__v": 0
}
```

### POST /api/notes

Upload a note to a job.

Example: http://localhost:8082/api/notes/6288c11d9aa65946c352b227

Example request body:

```
{
    "job_id": "6288e146961b1a4dab289f49",
    "content": "This jobs needs to be done ASAP! :)"
}
```

Response body:

```
{
    "success": "Note added successfully"
}
```

### PUT /api/notes/<note_id>

Update a note.

Example: http://localhost:8082/api/notes/6288dbf908f99c4ca9cc766d

Example request body:

```
{
    "content": "This can wait."
}
```

Response body:

```
{
    "success": "Updated successfully"
}
```

### DELETE /api/notes/<note_id>

Delete a note.

Example: http://localhost:8082/api/notes/6288e5b6d4ba6b50752117db

Response body:

```
{
    "success": "Note entry deleted successfully"
}
```
