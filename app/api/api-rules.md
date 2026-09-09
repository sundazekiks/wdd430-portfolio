# Rules

# try/catch blocks
    - use a custom error class for custom error codes and messages
    - throw an error on the try block and pass messages that are client friendly.
    - only send response above 299 in the catch block
    - the `try` block should only send response that are 200-299 

# Sanitize data first