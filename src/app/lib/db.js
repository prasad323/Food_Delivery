
const {username,password} = process.env 
export const connectionString = "mongodb+srv://"+username+":"+password+"@cluster0.9rnltcv.mongodb.net/restoDB?retryWrites=true&w=majority&appName=Cluster0"