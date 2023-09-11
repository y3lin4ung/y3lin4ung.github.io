import base64

def base64_decode(encoded_string):
    try:
        # Decode the base64-encoded string
        decoded_bytes = base64.b64decode(encoded_string)
        
        # Convert the bytes to a string
        decoded_string = decoded_bytes.decode('utf-8')
        
        return decoded_string
    except Exception as e:
        return f"Error: {str(e)}"

# Input the base64-encoded string you want to decode
encoded_string = input("Enter the base64-encoded string: ")

# Call the function to decode the string
decoded_result = base64_decode(encoded_string)

# Display the decoded result
print("Decoded Result:")
print(decoded_result)
